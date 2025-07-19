const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", function(){
   const item = document.createElement("li");
   item.innerText = input.value;


   const delBtn = document.createElement("button");
   delBtn.innerText = "Delete";
   delBtn.classList.add("Delete");
   
   delBtn.addEventListener("click", function(){
    item.remove();
   });
   item.appendChild(delBtn);
   ul.appendChild(item);
   input.value = "";
   
})