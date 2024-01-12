const trigger = document.querySelector('[ap-copy="trigger"]');
const target = document.querySelector('[ap-copy="target"]');

trigger.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(target);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
});
