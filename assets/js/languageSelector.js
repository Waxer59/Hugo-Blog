const languageOptionsBtns = document.querySelectorAll('.lenguageSelection');

languageOptionsBtns.forEach((btn) => {
  btn.addEventListener('click', (el) => {
    window.location.href = `${window.location.origin}/${btn.textContent
      .replace(/ /g, '')
      .replace(/[\n\r]+|[\s]{2,}/g, ' ')
      .trim()
      .toLowerCase()}/`;
  });
});
