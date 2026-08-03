function showInfo() {
  Neutralino.os.getEnv('USERNAME')
    .then(data => {
      document.getElementById('info').innerHTML = `<p>Hello, ${data.value}!</p>`;
    })
    .catch(err => console.error(err));
}
Neutralino.init();
