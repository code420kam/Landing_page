/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
var activeSection = document.querySelector(".your-active-class")
const allSectors = document.querySelectorAll("section")
let userHasScrolled = false;  
const sections = document.querySelectorAll("section");
var el = document.body.querySelectorAll("section");
const viewportHeight = window.innerHeight;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Detecting if user Scroll the page
window.addEventListener('scroll', (e) => 
{  
    userHasScrolled = true;  
})

//Detecting Scroll direction
window.onscroll = function(e) {
    if (this.oldScroll > this.scrollY === true)
    {
        console.log("up");
        this.oldScroll = this.scrollY;
    }
    else
    {
        console.log("down");
        this.oldScroll = this.scrollY;
    }
  }
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build viewport
function isInViewport(el)
{
    const rect = el.getBoundingClientRect();
    return(
        rect.top <= 140 &&
        rect.bottom >= 100
    )
}
  // Make sections active
document.addEventListener("scroll", function()
{
    makeActive();
});
// Build menu 

window.addEventListener("load", function()
{
	const section = document.querySelectorAll('section');
  function NavBar ()
{
  const bar = document.getElementById("navbar__list");
  const elem = document.createElement("ul");
  const container = document.createElement("div");
  container.setAttribute("id", "conti");
  container.setAttribute("class", "closeResponsiveNavBar");
  bar.appendChild(container);
  elem.setAttribute("class", "fa fa-bars");
  elem.innerHTML = "Navigation"
  elem.setAttribute("id", "responsiveMenu");
  bar.appendChild(elem);
  elem.addEventListener("click", function()
  {
    if(container.classList.contains("closeResponsiveNavBar"))
    {
      container.classList.remove("closeResponsiveNavBar");
      container.classList.add("openResponsiveNavBar");
    }
    else
    {
      container.classList.remove("openResponsiveNavBar");
      container.classList.add("closeResponsiveNavBar");
    }
  }); 
  // Hide the Navbar again..
  document.querySelector("main").addEventListener("click", function()
  {
    container.classList.remove("openResponsiveNavBar");
    container.classList.add("closeResponsiveNavBar");
  })
}
//Build Navigation Bar
NavBar();
	for (let i = 0; i < section.length; i++)
     {	
		const li = document.createElement('li');
    li.setAttribute("id", "navList");
		const tag = document.createElement('a');	
		const sectionName = section[i].getAttribute('data-nav');
    const sectionClass = section[i].getAttribute("class");
		tag.setAttribute('href',"#"+sectionName);
		tag.setAttribute('id',"linkNumber" +[i+1]);
    tag.setAttribute("class", sectionClass);
		tag.innerText=sectionName;
		li.appendChild(tag);
    console.log(tag);
    document.getElementById("conti").appendChild(li);
		document.getElementById("linkNumber" +[i+1]).addEventListener("click", function()
    {
			Scrolling(i+1)
		});
   
  }});
// Scroll to section on link click
function Scrolling (sectionI)
{
	const section = document.getElementById('section'+sectionI);
	const pos = section.offsetTop;
	//event.preventDefault();
	window.scrollTo(
    {
		left: 0, 
		top: pos,
		behavior: 'smooth'
	  });
}
//function to activate and deactivate the class of the individual sections
function makeActive () {
    const checker = this.document.querySelectorAll("#navList");
    for(var i=0; i<allSectors.length; i++)
    {
        if (!isInViewport(allSectors[i]))
      {
         true;
         allSectors[i].classList.remove("your-active-class");
         checker[i].classList.remove("your-active-class");
        console.log('In viewport!');
      } 
    else
  {
      allSectors[i].classList.add("your-active-class");
      checker[i].classList.add("your-active-class");
      //this.event.preventDefault();
      console.log('Nope...');
  }
}}
//collapse sections on or off 
var coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}