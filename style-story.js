const creditPict = document.getElementsByClassName("credit-pict")[0];
const cover = document.getElementsByClassName("cover")[0];
const creditLink = document.getElementsByClassName("credit-link")[0];

creditPict.addEventListener("mouseover", ()=>{
	creditLink.style.opacity = "1";
	cover.style.opacity = "1"
})

creditPict.addEventListener("mouseleave",()=>{
	creditLink.style.opacity = "0";
	cover.style.opacity = "0"	
})