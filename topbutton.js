var target = document.querySelector("footer"); //selects the footer part
var scrollToTopBtn = document.querySelector(".topBtn"); //selects the topbtn class
var rootElement = document.documentElement; //returns the root element

function callback(entries, observer)  //using a function to show the button if the user is at the bottom of the page and removes it if the user is not on the bottom
{
  entries.forEach((entry) =>
  {
    if (entry.isIntersecting)
    {
      scrollToTopBtn.classList.add("showBtn");
    } else
    {
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop()  //function to return the user to the top smoothly
{
  rootElement.scrollTo(
    {
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop); //adding an event listener to check if the user clicked the button
let observer = new IntersectionObserver(callback); //we declare a new variable and we intersect the function callback
observer.observe(target); //calling the variable if the user is at the footer
