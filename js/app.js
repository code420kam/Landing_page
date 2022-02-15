

const activeSection = document.getElementsByClassName(".your-active-class");

console.log(distance);

var isInViewport = function (activeSection) 
{

	const distance = activeSection.getBoundingClientRect()
	return (
		distance.top > 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);    
};

window.addEventListener('scroll', function () 
{
	if (isInViewport(activeSection))
     {
		console.log('In viewport!');
	} else
    {
    console.log('Nope...');
  }
}, false);




function NavBar ()
{
	const section = document.querySelectorAll('section');
	for (let i = 0; i < section.length; i++)
     {	
		const li = document.createElement('li');
		const tag = document.createElement('a');	
		const sectionName = section[i].getAttribute('data-nav');
		tag.setAttribute('href',"#"+sectionName);
		tag.setAttribute('id',"linkNumber" +[i+1]);
		tag.innerText=sectionName;
		li.appendChild(tag);
        document.getElementById("navbar__list").appendChild(li);
		document.getElementById("linkNumber" +[i+1]).addEventListener("click", function(){
			Scrolling(i+1)
		});
	};
}
