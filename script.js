const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", function(){
   const item = document.createElement("li");
   item.innerText = input.value;

   const delBtn = document.createElement("button");
   delBtn.innerText = "delete";
   delBtn.classList.add("delete");

   item.appendChild(delBtn);
   ul.appendChild(item);
   input.value="";
});

//Event Delegation
ul.addEventListener("click", function(event){
   if(event.target.nodeName == "BUTTON"){
      const listitem = event.target.parentElement;
      listitem.remove();
      console.log("Deleted");
   }
})