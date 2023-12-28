'use strict';

const Input = document.querySelector('.input');
const btnSubmit = document.querySelector('.btn-submit');
const listContainer = document.querySelector('.list-cont');

// Function to add a new task
function addTask() {
  const taskText = Input.value.trim();

  // Check if the input field is not empty
  if (taskText !== '') {
    // Create a new list item
    const newTask = document.createElement('li');
    const Grocery = document.createElement('p');

    // newTask.textContent = taskText;
    newTask.classList.add('list-box');
    Grocery.classList.add('list-item-1');
    Grocery.textContent = taskText;

    const div = document.createElement('div');
    div.classList.add('list-item-2'); // Add the class 'list-item-2' to the div

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'edit'); // Add classes to the edit icon
    div.appendChild(editIcon); // Append the edit icon to the div

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash-can', 'delete'); // Add classes to the delete icon
    div.appendChild(deleteIcon); // Append the delete icon to the div

    // Append the new task to the task list

    listContainer.appendChild(newTask);
    newTask.appendChild(Grocery);
    newTask.appendChild(div);

    editIcon.addEventListener('click', function () {
      console.log('Button clicked');

      const editedItem = Grocery.textContent.trim(); // Get the input value and trim any extra spaces
      console.log(editedItem);
      Input.value = editedItem;
      Grocery.textContent = '';
      div.textContent = '';
    });
    deleteIcon.addEventListener('click', function () {
      Grocery.textContent = '';
      div.textContent = '';
    });

    // Clear the input field
    Input.value = '';
  } else {
    alert('Please enter a task!');
  }
}
btnSubmit.addEventListener('click', function () {
  addTask();
});
