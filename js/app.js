



var activeSection = document.querySelector(".your-active-class")
const allSectors = document.querySelectorAll("section")


function isInViewport(el)
{
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

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

// Detecting if user Scrolling the page
let userHasScrolled = false;  
window.addEventListener('scroll', (e) => {  
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
  

    window.addEventListener('scroll', function () 
  {
      for(var i=0; i<allSectors.length; i++)
      {
          if (!isInViewport(allSectors[i]))
        {
           true;
           allSectors[i].classList.remove("your-active-class");
          console.log('In viewport!');
          
          
        } 
      else
    {
        allSectors[i].classList.add("your-active-class");
        //this.event.preventDefault();
        
        console.log('Nope...');
               }
    }
  })

  

//document.querySelector(".navbar__menu").getElementsByClassName("your-active-class").style="backgroundColor:red";


function NavBar ()
{
	const section = document.querySelectorAll('section');
	for (let i = 0; i < section.length; i++)
     {	
		const li = document.createElement('li');
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


