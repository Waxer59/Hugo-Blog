const searchElement = document.querySelector('#search-navbar');
const container = document.querySelector('#pageContent');

searchElement.addEventListener('input', async () => {
  const response = await fetch(`${window.location.href}/index.json`).then();
  let content = await response.json();
  content = content.filter((el) =>
    el.title.toLowerCase().includes(searchElement.value.toLowerCase())
  );

  container.innerHTML = '';
  content.forEach(({ url, title, date, content, readtime, technology }) => {
    container.innerHTML += `<a
      class="text-center block bg-primary-color mt-11 max-w-[70vw] mx-auto rounded-lg"
      href="${url}">
      <div class="flex items-center justify-between py-4 px-4">
        <img
          src="icons/${technology}.png"
          alt="${technology} icon"
          class="w-12" />
        <div class="flex justify-center flex-col">
          <strong> ${title} </strong>
          <time>${date}</time>
          <span class="opacity-50">${readtime} to read</span>
        </div>
        <i class="fa-solid fa-chevron-right ml-4"></i>
      </div>
    </a>`;
  });
});
