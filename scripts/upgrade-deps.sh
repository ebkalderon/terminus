#!/usr/bin/env bash

#
# Executes whenever a new version of KaTeX is released, updating the embedded
# assets in `static/{css,fonts,js}/` accordingly.
#

set -euo pipefail

readonly KATEX_MIN_CSS_PATH='static/css/katex.min.css'
readonly KATEX_MIN_JS_PATH='static/js/katex.min.js'
readonly KATEX_FONTS_PATH='static/fonts/katex/'

for dependency in curl grep jq tar; do
    command -v "${dependency}" > /dev/null
done

KATEX_LATEST_RELEASE_INFO="$(curl -sL https://api.github.com/repos/KaTeX/KaTeX/releases/latest)"
KATEX_LATEST_RELEASE_VERSION="$(echo "${KATEX_LATEST_RELEASE_INFO}" | jq -r '.tag_name')"
KATEX_CURRENT_VERSION="v$(grep -oP 'version:"([^"]*)"' "${KATEX_MIN_JS_PATH}" | cut -d '"' -f 2)"

if [[ "${KATEX_CURRENT_VERSION}" = "${KATEX_LATEST_RELEASE_VERSION}" ]]; then
    echo "Current KaTeX version is up-to-date (${KATEX_LATEST_RELEASE_VERSION}), skipping upgrade."
    exit 0
else
    echo "Found new KaTeX version ${KATEX_LATEST_RELEASE_VERSION}, upgrading from ${KATEX_CURRENT_VERSION}..."
fi

KATEX_DOWNLOAD_DIR="$(mktemp -d)"
trap 'rm -rf "${KATEX_DOWNLOAD_DIR}"' EXIT
KATEX_LATEST_RELEASE_URL="$(echo "${KATEX_LATEST_RELEASE_INFO}" | jq -r '.assets[] | select(.name? | match("katex.tar.gz$")) | .browser_download_url')"
curl -L "${KATEX_LATEST_RELEASE_URL}" | tar zxf - -C "${KATEX_DOWNLOAD_DIR}" --strip-components=1
echo "Downloaded and extracted KaTeX ${KATEX_LATEST_RELEASE_VERSION} to: ${KATEX_DOWNLOAD_DIR}"

set -x
mv "${KATEX_DOWNLOAD_DIR}/katex.min.css" "${KATEX_MIN_CSS_PATH}"
mv "${KATEX_DOWNLOAD_DIR}/katex.min.js" "${KATEX_MIN_JS_PATH}"
mv "${KATEX_FONTS_PATH}" "${KATEX_DOWNLOAD_DIR}/fonts.old/" && mv "${KATEX_DOWNLOAD_DIR}/fonts/" "${KATEX_FONTS_PATH}"
set +x

echo "Patching KaTeX fonts directory in ${KATEX_MIN_CSS_PATH}..."
sed -i 's,url(fonts/,url(../fonts/katex/,g' "${KATEX_MIN_CSS_PATH}"

echo "Appending auto-render extension to ${KATEX_MIN_JS_PATH}..."
cat "${KATEX_DOWNLOAD_DIR}/contrib/auto-render.min.js" >> "${KATEX_MIN_JS_PATH}"
cat <<'EOF' | tr -d '[:space:]' >> "${KATEX_MIN_JS_PATH}"
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.getElementById("main"), {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\(", right: "\\)", display: false},
                {left: "\\begin{equation}", right: "\\end{equation}", display: true},
                {left: "\\begin{align}", right: "\\end{align}", display: true},
                {left: "\\begin{alignat}", right: "\\end{alignat}", display: true},
                {left: "\\begin{gather}", right: "\\end{gather}", display: true},
                {left: "\\begin{CD}", right: "\\end{CD}", display: true},
                {left: "\\[", right: "\\]", display: true}
            ]
        });
    });
EOF

echo "Upgraded KaTeX from ${KATEX_CURRENT_VERSION} to ${KATEX_LATEST_RELEASE_VERSION}!"
exit 0
