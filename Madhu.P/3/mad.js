function submit() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const postData = {
      title: title,
      body: body,
      userId: 101
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(data => {
      const rd = document.getElementById('response');
      rd.innerHTML = `<p>Post successfully</p>`;
  })
  .catch(error => {
      const rd = document.getElementById('response');
      rd.innerHTML = `<p>An error occurred</p>`;
  });
}