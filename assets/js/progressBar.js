const progressBar = document.querySelector('#progressScrollBar');

const updateProgressBar = () => {
  const scrollTop = document.body.scrollTop;
  const scrollHeight = document.body.scrollHeight;
  const clientHeight = document.body.clientHeight;

  console.log(scrollTop, scrollHeight, clientHeight);

  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  const divWidth = `${scrollPercent}%`;

  progressBar.style.width = divWidth;
};

document.body.addEventListener('scroll', updateProgressBar);
