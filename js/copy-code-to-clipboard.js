const code_blocks = document.querySelectorAll("pre code[data-lang]");

for (const code_block of code_blocks) {
    let content;
    if (code_block.parentElement.hasAttribute("data-linenos")) {
        content = [...code_block.querySelectorAll("tr")]
            .map((row) => row.querySelector("td:last-child")?.innerText ?? "")
            .join("");
    } else {
        content = code_block.innerText.split("\n").filter(Boolean).join("\n");
    }

    // Copy to clipboard
    if (navigator.clipboard !== undefined) {
        const copyButton = document.createElement("button");
        copyButton.classList.add("copy-button");
        copyButton.innerText = "Copy";

        copyButton.addEventListener("click", () => {
            copyButton.innerText = "Copied!";
            setTimeout(() => {
                copyButton.innerText = "Copy";
            }, 1000);

            navigator.clipboard.writeText(content);
        });

        code_block.prepend(copyButton);
    }
}
