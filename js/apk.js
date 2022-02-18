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
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
function NavBar ()
{
	const section = document.querySelectorAll('section');
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
        document.getElementById("navbar__list").appendChild(li);
		document.getElementById("linkNumber" +[i+1]).addEventListener("click", function(){
			Scrolling(i+1)
		});
	};
}
// Scroll to section on link click
function Scrolling (sectionI)
{
	const section = document.getElementById('section'+sectionI);
	const pos = section.offsetTop;
	//event.preventDefault();
	window.scrollTo({
		left: 0, 
		top: pos,
		behavior: 'smooth'
	});
}
// Adding event if user scroll the page for Viewport
window.addEventListener('scroll', function () 
{
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
  }
});
