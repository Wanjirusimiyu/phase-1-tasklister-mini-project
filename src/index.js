document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');


  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const taskDescriptionInput = document.getElementById('new-task-description');
      const taskDescription = taskDescriptionInput.value.trim();


      const listItem = document.createElement('li');
      listItem.textContent = taskDescription;


      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.addEventListener('click', function() {
          listItem.remove();
      });

      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);

      taskDescriptionInput.value = '';

    });
  });
