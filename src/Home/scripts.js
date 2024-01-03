//// Light Mode Function

document.addEventListener('DOMContentLoaded', function () {
  const lightModeSwitch = document.getElementById('lightModeSwitch');
  const body = document.body;

  if (lightModeSwitch && body) {
    console.log('Light UI link and body element found.')

    lightModeSwitch.addEventListener('click', function () {
      e.preventDefault();
      body.classList.toggle('light-mode');
      console.log('Switch light-mode class.')
    });
  } else {
    console.error('Error: Light UI link or body element not found.')
  }
});