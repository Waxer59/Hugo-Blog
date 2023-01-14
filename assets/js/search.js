const searchElement = document.querySelectorAll('.search-navbar');
const container = document.querySelector('#pageContent');

const URLS = {
  GET_POSTS_URL: `${
    window.location.origin + window.location.pathname
  }index.json`,
  BASE_URL: `${window.location.origin}`
};

async function fetchData(url) {
  const response = await fetch(url).then();
  return await response.json();
}

function mapArticlePost({ url, title, date, content, readTime, technology }) {
  return `<a
    class="text-center block bg-primary-color mt-11 max-w-[70vw] mx-auto rounded-lg transition-transform duration-500 ease hover:translate-x-5"
    href="${url}">
    <div class="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center mx-auto py-4 px-4">
      <img
        src="${URLS.BASE_URL}/icons/${technology}.png"
        alt="${technology} icon"
        width="128"
        height="128"
        class="w-12" 
        />
        
      <div class="flex justify-center flex-col">
        <strong> ${title} </strong>
          <time>${date.day} ${date.month} ${date.year}</time>
          <span class="opacity-50">${readTime}</span>
      </div>
      
      <i class="fa-solid fa-chevron-right ml-4 pl-auto"></i>
      </div>
      </a>`;
}

async function displayAllPosts() {
  const content = await fetchData(URLS.GET_POSTS_URL);
  container.innerHTML = '';
  content.forEach(({ url, title, date, content, readTime, technology }) => {
    container.innerHTML += mapArticlePost({
      url,
      title,
      date,
      content,
      readTime,
      technology
    });
  });
}
if (
  searchElement[0]?.value.trim() === '' &&
  searchElement[1]?.value.trim() === ''
) {
  displayAllPosts();
}

searchElement.forEach((searchInput) => {
  searchInput.addEventListener('input', async () => {
    let content = await fetchData(URLS.GET_POSTS_URL);
    content = content.filter((el) =>
      el.title.toLowerCase().includes(searchInput?.value.toLowerCase())
    );
    container.innerHTML = '';
    content.forEach(({ url, title, date, content, readTime, technology }) => {
      container.innerHTML += mapArticlePost({
        url,
        title,
        date,
        content,
        readTime,
        technology
      });
    });
  });
});
