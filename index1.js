let taskList = document.querySelector('ul')
let taskInput = document.querySelector('input')
let addButton = document.querySelector('button')

addButton.onclick = function () {
    let taskItem = taskInput.value;
    taskInput.value = '';

    if (!taskItem) alert("Nothing to add, please input a task")
    else {
        let listItem = document.createElement('li')
        let checkBox = document.createElement('input')
        checkBox.type = "checkbox"
        let taskName = document.createElement('span')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')

        listItem.appendChild(checkBox)
        listItem.appendChild(taskName)
        taskName.textContent = taskItem
        listItem.appendChild(deleteButton)
        deleteButton.textContent = 'Delete Task'
        listItem.appendChild(editButton)
        editButton.textContent = 'Edit Task'
        taskList.appendChild(listItem)


        deleteButton.onclick = function (e) {
            taskList.removeChild(listItem)
        }

        editButton.onclick = function () {
            let editlistItem = document.createElement('li')
            let editInput = document.createElement('input')
            editInput.value = taskItem
            let saveButton = document.createElement('button')
            let cancelButton = document.createElement('button')

            editListItem.appendChild(editInput)
            editListItem.appendChild(saveButton)
            saveButton.textContent = 'Save'
            editListItem.appendChild(cancelButton)
            cancelButton.textContent = 'Cancel'
            taskList.appendChild(editlistItem)
            taskList.replaceChild(editlistItem, listItem)


            saveButton.onclick = function (e) {
                let newInput = editInput.value
                listItem.replaceChild(checkBox, editInput)
                listItem.replaceChild(taskName, saveButton)
                taskName.textContent = newInput
                taskItem = newInput
                listItem.replaceChild(deleteButton, cancelButton)
                deleteButton.textContent = 'Delete Task'
                listItem.appendChild(editButton)
                editButton.textContent = 'Edit Task'
                taskList.appendChild(listItem)
            }
        }
        taskInput.focus();
    }
}