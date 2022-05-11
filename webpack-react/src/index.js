const logger = (message, cssCode) => {
  console.log(`%c${message}`, cssCode);
};

const formatText = (text) =>
  text.toString().replace(/\n\s+/g, '').trim();

logger(
  '안녕! 웹팩 😃',
  formatText(`
    font-size: 4rem;
    font-weight: bold;
  `)
);