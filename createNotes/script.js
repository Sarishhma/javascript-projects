const input =document.querySelector(".input-container");
const btn= document.querySelector(".button");
const container = document.querySelector(".container")
function add(){
    const inputBox = document.createElement("p");
    inputBox.setAttribute("contenteditable","true");
       
        inputBox.className="inputBox";

        const delbtn = document.createElement("button");
        delbtn.className="delBtn";
        delbtn.textContent="❌";

    container.appendChild(inputBox);
     container.appendChild(delbtn);

delbtn.addEventListener("click",()=>{
    inputBox.remove();
     delbtn.remove();

})
}