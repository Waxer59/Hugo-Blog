const languageOptionsBtns = document.querySelectorAll('.lenguageSelection');
const dropdownDefaultButtonTextContent = document.querySelector(
  '#dropdownDefaultButtonTextContent'
);

languageOptionsBtns.forEach((btn) => {
  btn.addEventListener('click', (el) => {
    const currentBtnTextContent = dropdownDefaultButtonTextContent.textContent
      .replace(/ /g, '')
      .replace(/[\n\r]+|[\s]{2,}/g, ' ')
      .trim();
    dropdownDefaultButtonTextContent.textContent = btn.textContent
      .replace(/ /g, '')
      .replace(/[\n\r]+|[\s]{2,}/g, ' ')
      .trim();
    btn.textContent = currentBtnTextContent;
  });
});
