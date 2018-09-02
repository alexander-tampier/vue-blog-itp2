const filter = (text, length, clamp) => {
  const newClamp = clamp || '...';
  const node = document.createElement('div');
  node.innerHTML = text;
  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + newClamp : content;
};

const filterTitle = (text, length) => {
  let response = '';
  let index = 0;
  const node = document.createElement('div');
  node.innerHTML = text;
  const content = node.textContent;

  if (length > 0 && content.length > length) {
    index = text.indexOf(' ');
    response = content.slice(0, index);
  }

  return response !== '' ? response : content;
};

export { filter, filterTitle };
