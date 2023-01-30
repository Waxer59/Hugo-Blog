const searchElement = document.querySelectorAll('.search-navbar');
const container = document.querySelector('#pageContent');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const paginationControlsContainer = document.querySelector(
  '#paginationControlsContainer'
);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const pageParam = +params.page ?? 1;

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
    <div class="shadow-lg flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center mx-auto py-4 px-4">
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
  const totalPages = content.length / 10 + 1;
  if (pageParam + 1 < totalPages) {
    nextBtn.style.display = 'block';
    nextBtn.href =
      window.location.origin +
      window.location.pathname +
      `?page=${pageParam + 1}`;
  }
  if (pageParam > 1) {
    prevBtn.style.display = 'block';
    prevBtn.href =
      window.location.origin +
      window.location.pathname +
      `?page=${pageParam - 1}`;
  }
  if (prevBtn.style.display === 'block' || nextBtn.style.display === 'block') {
    paginationControlsContainer.style.display = 'block';
  }
  container.innerHTML = '';
  [...content]
    .slice((pageParam - 1) * 10, pageParam * 10)
    .forEach(({ url, title, date, content, readTime, technology }) => {
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
if ([...searchElement]?.every((el) => el.value.trim() === '')) {
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
