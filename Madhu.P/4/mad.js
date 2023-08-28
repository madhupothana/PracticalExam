function Back() {
  window.history.back();
}
function Forward() {
  window.history.forward();
}
function redirect(url) {
  window.location.href = url;
}

function reload() {
  location.reload();
}
  function History() {
  const historyList = document.getElementById('history');
  historyList.innerHTML = '';
  for (let i = 1; i < window.history.length; i++) {
    const historyItem = document.createElement('li');
    historyItem.textContent = window.history[i];
    historyList.appendChild(historyItem);
  }
}