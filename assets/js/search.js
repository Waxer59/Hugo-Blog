const ALGOLIA_APPLICATION_ID = 'IQDYVZHSJ1';
const ALGOLIA_SEARCH_API_KEY = '8c01ff14ce05785074f6c4f038fdcc23';
const ALGOLIA_INDEX_NAME = 'prod_blog.wadev.dev';
const lang = window.location.pathname.replaceAll('/', '') || "en";
const timeout = 1000;
const searchPlaceholder = lang === 'es' ? 'Buscar...' : 'Search...';
const emptyPlaceholder =
  lang === 'es' ? 'Sin resultados :-(' : 'No results :-(';
const algoliaClient = algoliasearch(
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_SEARCH_API_KEY,
  ALGOLIA_INDEX_NAME
);

let timerId;

const search = instantsearch({
  indexName: 'prod_blog.wadev.dev',
  searchClient: algoliaClient,
  searchFunction(helper) {
    const hits = document.querySelector('#hits');

    if (helper.state.query.trim() !== '') {
      hits.classList.remove('hidden');
      helper.search();
    } else {
      hits.classList.add('hidden');
    }
  }
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: searchPlaceholder,
    cssClasses: {
      input:
        'shadow-none block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-secondary-color focus:border-secondary-color dark:bg-primary-color dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-color dark:focus:border-secondary-color',
      form: 'bg-transparent'
    },
    showReset: true,
    showLoadingIndicator: false,
    autofocus: false,
    queryHook(query, refine) {
      clearTimeout(timerId);
      timerId = setTimeout(() => refine(query), timeout);
    }
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: emptyPlaceholder,
      item: `<a href="{{ link }}" class="bg-primary-color text-white p-6 shadow-lg w-full text-center rounded-lg">
        {{ title }}
        </a>`
    },
    cssClasses: {
      item: 'bg-transparent shadow-none p-0',
      emptyRoot:
        'bg-primary-color text-white p-6 shadow-lg w-full text-center rounded-lg'
    }
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 3,
    filters: `lang:${lang}`
  })
]);

search.start();
