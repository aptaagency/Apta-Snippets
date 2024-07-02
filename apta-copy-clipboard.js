const triggers = document.querySelectorAll('[ap-copy^="trigger"]');
const targets = document.querySelectorAll('[ap-copy^="target"]');

triggers.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    const range = document.createRange();
    range.selectNode(targets[index]);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  });
});
