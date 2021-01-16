let toggle = document.querySelector('.toggle');
toggle.addEventListener('click', function () {
  let menu = document.querySelector('.menu-full');
  console.log(menu.style.width);
  if (menu.style.width === '0px')
    menu.style.width = '30vw';
  else
    menu.style.width = '0px';
}, false);
