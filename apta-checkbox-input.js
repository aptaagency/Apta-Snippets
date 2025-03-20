function updateHiddenInput(groupNumber) {
  const checkboxes = document.querySelectorAll(
    `input[type="checkbox"][ap-multi-choice="${groupNumber}"]`
  );
  const hiddenInput = document.querySelector(
    `[ap-group-value="${groupNumber}"]`
  );

  const selectedLabels = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.parentNode.textContent.trim());

  hiddenInput.value = selectedLabels.join(", ");
}

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const groupNumber = checkbox.getAttribute("ap-multi-choice");
    updateHiddenInput(groupNumber);
  });
});
