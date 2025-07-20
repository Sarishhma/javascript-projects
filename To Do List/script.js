function add(){
   const tasks= document.getElementById("task").value.trim();
    if (tasks===""){
        alert("Add yor task")
        return;
    }
    const li = document.createElement("li");
    li.textContent = tasks
    const delBtn = document.createElement("button");
    delBtn.textContent ="❌"
    delBtn.onclick=function(){
        li.remove();
    }
    li.appendChild(delBtn)
        document.getElementById("task-list").appendChild(li)
        document.getElementById("task").value="";
    
}

