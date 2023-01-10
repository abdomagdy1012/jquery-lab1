let btn = $("#btnAdd");
let tasksBox = $(".tasksBox");
let input = $("#taskInput");
let container = $("#container");


btn.click(function (){
  let myNewElement = $(`<div class="task">
  <input type="text" value = "${input.val()}" readonly/>
  <button class="done">Done</button>
  <button class = "delete"">Delete</button>
  </div>`);

    tasksBox.append(myNewElement);

    let Delete = $(".delete").last();
    let done = $(".done").last();
    
    done.click(function(){
        $(this).parent().toggleClass("TaskDone");
    })

    Delete.click(function(){
        $(this).parent().remove();
    })
})


