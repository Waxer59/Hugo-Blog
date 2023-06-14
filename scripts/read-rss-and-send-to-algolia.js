require('dotenv').config()
const fs = require('node:fs');
const path = require('node:path');
const parser = require('xml2json');
const algoliasearch = require('algoliasearch');
const LANGUAGES = ['es', 'en'];

const ALGOLIA_APPLICATION_ID = process.env.ALGOLIA_APPLICATION_ID;
const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const createRssAndSearchToAlgolia = (lang = '') => {
  const rss = fs.readFileSync(
    path.resolve(__dirname, `../public${lang === 'en' ? '/' : `/${lang}/`}index.xml`),
    'utf-8'
  );

  const json = parser.toJson(rss, { object: true });

  const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  const posts = json.rss.channel.item.map((post) => ({
    ...post,
    objectID: post.guid
  }));

  index
    .saveObjects(posts)
    .then((objectIds) => {
      console.log({ objectIds });
    })
    .catch((err) => {
      console.error(err);
    });
};

LANGUAGES.forEach((val) => {
  createRssAndSearchToAlgolia(val);
});
