var h_content 		 = 	 document.getElementsByClassName("h-content");
var borderColor 	 =   h_content[0].style.backgroundcolor;
var Menu 			 = 	 document.getElementsByClassName("dropDownMenu");
//var Input          = 	 document.getElementById("search");
//var InputContainer =   document.querySelector("#submit-search"); 
var windowWidth      = 	 window.innerWidth;
var RightMenu        =   document.querySelector("#dropDownMenuRoot");
var RightMenuDroper  = 	 document.querySelector("#dropDownImg");
var SearchForm 		 = 	 document.querySelector("#SearchForm");
var Selected 		 = 	 document.querySelectorAll(".selector");
var VolType 		 =   document.querySelectorAll(".VolCheck")
function unselect(x,unselectedObject,exception="Default"){
document.addEventListener('click',function(e){
	if(e.target.id != x && e.target.id != exception)
	unselectedObject.style.display = "none";

});
}

for(let i=0;i<h_content.length;i++){
h_content[i].addEventListener('mouseenter',function(){
	h_content[i].style.color = "white";
	h_content[i].style.borderBottomColor = "white";
    Menu[i].style.display = "grid";
    Menu[i].style.position = "absolute";
    Menu[i].addEventListener('mouseenter',function(){
    	h_content[i].style.color = "white";
		h_content[i].style.borderBottomColor = "white";
    	Menu[i].style.display = "grid";

    });
});
h_content[i].addEventListener('mouseleave',function(){
    Menu[i].style.display = "none";
    h_content[i].style.color = "rgb(209, 157, 67)";
	h_content[i].style.borderBottomColor = "rgb(209, 157, 67)";
    
    Menu[i].addEventListener('mouseleave',function(){
    	h_content[i].style.color = "rgb(209, 157, 67)";
		h_content[i].style.borderBottomColor = "rgb(209, 157, 67)";
    	Menu[i].style.display = "none";
    });
});
}
/*Input.addEventListener('click',function(){
	Input.style.border = "none";
	Input.style.backgroundColor = "light-gray";
	InputContainer.style.display= "inline-grid";
});
unselect("search",InputContainer);*/
RightMenuDroper.addEventListener('click',function(e){
	RightMenu.style.display = "grid";
	RightMenu.style.position = "absolute";
});
document.addEventListener('click',function(e){
	if(e.target.id != "dropDownMenuRoot" && e.target.id != "dropDownImg"){
	    RightMenu.style.display = "none";
	}
});
SearchForm.addEventListener('click',function(){
	
});
var DefaultSelectedItem = Selected[0];
DefaultSelectedItem.style.backgroundColor="rgba(50, 77, 77, 1)";
DefaultSelectedItem.style.borderColor="rgba(50, 77, 77, 1)";

for(let i=0;i<Selected.length;i++){
	Selected[i].addEventListener('click',function(){
		this.style.backgroundColor="rgba(50, 77, 77, 1)";
		this.style.borderColor="rgba(50, 77, 77, 1)";
		for(let j=0;j<Selected.length;j++){
			if(j!=i){
			Selected[j].style.backgroundColor="#EFEFEF";
			Selected[j].style.borderColor="#EFEFEF";}
		}
	});
}
