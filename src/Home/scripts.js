//// Light Mode Function

document.addEventListener('DOMContentLoaded', function () {
  const lightModeSwitch = document.getElementById('lightModeSwitch');
  const body = document.body;

  if (lightModeSwitch && body) {
    console.log('Light UI link and body element found.')

    lightModeSwitch.addEventListener('click', function () {
      event.preventDefault();
      body.classList.toggle('light-mode');
      lightModeSwitch.innerHTML = '<i class="fas fa-sun"></i>' + (body.classList.contains('light-mode') ? ' Dark UI' : ' Light UI');
      console.log('Switch light-mode class.')
    });
  } else {
    console.error('Error: Light UI link or body element not found.')
  }
});