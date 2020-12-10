//select the faq-toggle using selecor all because of node list
const toggles = document.querySelectorAll(".faq-toggle")

//now we need to make a function with a event listener 

toggles.forEach(toggle => {
	toggle.addEventListener("click", () => {
		//take the button toggle
		//access parent node
		//access the class list
		//call the toggle method 
		//toggle the active class
		toggle.parentNode.classList.toggle("active")
	})
})