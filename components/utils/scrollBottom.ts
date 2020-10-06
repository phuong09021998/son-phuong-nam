const scrollToBottom = () => {
  const textEl = document.getElementById('text');
  // @ts-ignore
  textEl.scrollTop = textEl.scrollHeight;
};

export default scrollToBottom;
