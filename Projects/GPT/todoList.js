const todoList = ['Lets see', 'anothe4 one']

function addTask(task) {
  return todoList.push(`${task} : [✖]`)
}

function del(index) {
  const deleted = todoList.splice(index-1,1)
  return `Task:'${deleted}' has been deleted`;
}

markComplete = index => {
  const completed = todoList.splice(index-1,1, `${todoList[index-1]} : [✓]`)
  return `Task #${index} has been completed`
}



listTasks = () => {
//  for (i = 0 ; i < todoList.length ; i++) {
  //  console.log(`#${i+1}: ${todoList[i]}`)
//  }
  
  todoList.forEach((task, i) => {
    console.log(`${i + 1}. ${task}`);
  });
  
//  for (let task of todoList) {
//    console.log(task)
//  }
}