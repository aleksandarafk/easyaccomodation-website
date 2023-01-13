let menu = document.querySelector('#menu-bars'); //declaring a variable and selecting the menu-bars by id and navigation bar by class
let navbar = document.querySelector('.navbar');

menu.onclick = () => //onclick function to see if the user clicked on the button
{
  navbar.classList.toggle('active');
  navbar.classList.toggle('fa-times');

}

window.onscroll = () => //removes the active status of the button if the user scrolls 
{
  navbar.classList.remove('active');
  navbar.classList.remove('fa-times');
}
