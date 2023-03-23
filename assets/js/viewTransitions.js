const onNavigate = (callback) => {
  if (!document.startViewTransition) {
    return;
  }

  document.startViewTransition(callback);
};

const fetchPage = async (url) => {
  const response = await fetch(url);
  const page = await response.text();
  return /<body[^>]*>([\w\W]*)<\/body>/.exec(page)[1]
};

window.navigation.addEventListener('navigate', async (event) => {
  const toUrl = new URL(event.destination.url);

  if (window.location.origin !== toUrl.origin) {
    return;
  }

  event.intercept({
    async handler() {
      if (event.info === 'ignore') {
        return;
      }
      onNavigate(async () => {
        document.body.innerHTML = await fetchPage(toUrl);
      });
    }
  });
});
