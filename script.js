function inputFieldInput(event) {
  const text = getOutputText(event.target.value);
  setOutputField(text);
}

function getOutputText(url) {
  if (!isTweet(url)) {
    return '';
  }

  return getTweetAndImages(url);
}

function getTweetAndImages(url) {
  // TODO: Fetch API
  return url;
}

function setOutputField(text) {
  const outputField = document.getElementById('outputField');
  outputField.value = text;
}

function isTweet(url) {
  const pattern = /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)$/;

  return url.match(pattern);
}

document.getElementById('inputField').addEventListener('input', inputFieldInput);

function copyButtonClick(event) {
  const outputField = document.getElementById('outputField');
  outputField.select();
  document.execCommand('copy');
}

document.getElementById('copyButton').addEventListener('click', copyButtonClick);
