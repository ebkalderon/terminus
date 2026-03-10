const codeBlocks = document.querySelectorAll("pre.giallo code[data-lang]:not([data-lang='plain'])");

for (const codeBlock of codeBlocks) {
    const preBlock = codeBlock.parentElement;

    // Giallo wraps every line in a .giallo-l span, with optional .giallo-ln spans
    // for line numbers. Extract text from each line span, stripping line numbers.
    const content = [...codeBlock.querySelectorAll(".giallo-l")]
        .map((line) => {
            const clone = line.cloneNode(true);
            clone.querySelectorAll(".giallo-ln").forEach((ln) => ln.remove());
            return clone.textContent;
        })
        .join("\n");

    if (navigator.clipboard !== undefined) {
        const copyButton = document.createElement("button");
        copyButton.classList.add("copy-button");
        copyButton.innerText = "Copy";

        copyButton.addEventListener("click", () => {
            copyButton.innerText = "Copied!";
            navigator.clipboard.writeText(content);
            setTimeout(() => copyButton.innerText = "Copy", 1000);
        });

        preBlock.prepend(copyButton);
    }
}
