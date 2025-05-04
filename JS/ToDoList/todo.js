let input = prompt('What would you like to do');

let list = ['boxes of food', 'marijuana', 'aradugbo'];

while (input !== 'quit' && input !== 'q') {
  
  if (input === 'list') {
  console.log('************');
  for (let i = 0; i < list.length; i++) {
    console.log(`${i}: ${list[i]}`)
  }
  console.log('************');
}

  else if (input === 'new') {
      const newTodo = prompt('Enter new todo');
      list.push(newTodo);
      console.log(`${newTodo} added to list`)
  }
  
  else if (input === 'delete') {
    const index = prompt('Enter index of todo to delete');
    
    if (!isNaN(parseInt(index))) {
      const deleted = list.splice(parseInt(index), 1);
      console.log('valid')
      console.log(`${deleted} was deleted`);
     
    } else {
      console.log('Unknown Index');
    }
  }
input = prompt('What would you like to do');
}

console.log ('YOU QUIT THE APP')