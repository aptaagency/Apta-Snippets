const copyButton = document.querySelectorAll('[ap="button_copy"]');
const copyAll = document.querySelectorAll('[ap="button_copy_all"]');

copyButton.forEach((copyButtonElm) => {
  copyButtonElm.addEventListener("click", async (e) => {
    const divParent = copyButtonElm.parentNode;
    const textToCopy = divParent.querySelector('[ap="copy_value"]').textContent;
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (error) {
      console.log("Erro ao copiar o texto.");
    }
  });
});

copyAll.forEach((copyAllElm) => {
  copyAllElm.addEventListener("click", async (e) => {
    const elementToCopy = copyAllElm.previousElementSibling;

    const range = document.createRange();
    range.selectNodeContents(elementToCopy);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      console.log("Conteúdo copiado com formatação:", selection.toString());
    } catch (error) {
      console.log("Erro ao copiar o texto.");
    } finally {
      selection.removeAllRanges();
    }
  });
});
