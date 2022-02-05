var TodoListVariable = (function(){

    var tasks = [];
    const taskList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');
    
    
    
    async function fetchTodos(){
    
        // fetch('https://jsonplaceholder.typicode.com/todos/').then(function(response){
    
        //     return response.json().then(function(data){
    
        //        tasks = data.slice(0,10);
        //        renderList();
    
        //     });
    
        // }).catch(function(error){
    
        //     console.log(error);
        // })
    
        try{
    
            const response = await  fetch('https://jsonplaceholder.typicode.com/todos/');
            const data = await response.json();
            tasks = data.slice(0,10);
            renderList();
    
        }catch(error){
    
            console.log(error);
    
        }
        
    
    };
    
    
    function addTaskToDOM(task){
    
        const li = document.createElement('li');
    
        li.innerHTML = `
                <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''}  class="custom-checkbox">
                <label for="${task.id}">${task.title}</label> 
                <img src="cross.jpg" class="delete" data-id="${task.id}" />
                `
            ;
    
            
        taskList.append(li);
    }
    
    function renderList () {
    
    
        taskList.innerHTML = '';
    
        for(let i =0;i< tasks.length;i++){
    
            addTaskToDOM(tasks[i]);
        }
    
    
        tasksCounter.innerHTML = tasks.length;
    }
    
    function toggleTask (taskId) {
    
        const task = tasks.filter(function(task){
    
            return task.id == Number(taskId);
        });
    
        if(task.length > 0){
    
            const currentTask = task[0];
    
            currentTask.completed = !currentTask.completed;
            renderList();
            showNotification("Task Toggled Successfully");
            return;
        }
    
    
        showNotification("ERROR!");
    
        
    }   
    
    function deleteTask (taskId) {
    
        const newTasks = tasks.filter(function(task){
    
            return task.id !== Number(taskId);
        })
    
        tasks = newTasks;
        renderList();
        showNotification('Task Deleted Successfully');
    }
    
    function addTask (task) {
    
        if(task){
    
    
            // fetch('https://jsonplaceholder.typicode.com/todos/',{
            //     method:'POST',
            //     headers:{
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(task),
    
            // }).then(function(response){
    
            //  return response.json();
            
            // }).then(function(data){
    
            //     tasks.push(task);
            //     renderList();
            //     showNotification("Task Added Successfully");
            //     return;
    
                
    
            // }).catch(function(error){
    
            //     console.log(error);
            // })
    
        
    
            tasks.push(task);
            renderList();
            showNotification("Task Added Successfully");
            return;
        }
    
        showNotification("Task cannot be Added");
    }
    
    function showNotification(text) {
    
        alert(text);
    }
    
    function handleInputKeyPress(e){
    
        if(e.key == 'Enter'){
    
            const text = e.target.value;
        
    
        if(!text){
    
            showNotification('Task text cannot be empty');
            return;
        }
    
        const task = {
    
            title:text,
            id: Date.now(),
            completed:false
        }
    
        e.target.value = '';
        addTask(task);
    
    }
    }
    
    function handleClickListener(e){
    
        const target = e.target;
        console.log(target);
        if(target.className == 'delete'){
    
            const taskId = target.dataset.id;
            deleteTask(taskId);
            return;
        }
    
        else if(target.className == 'custom-checkbox'){
    
            const taskId = target.id;
            toggleTask(taskId);
            return;
        }
    }
    
    
    function initializeApp(){
    
        fetchTodos();
        addTaskInput.addEventListener('keyup',handleInputKeyPress);
        document.addEventListener('click',handleClickListener);
    }
    
    
    
    return{

        initialize: initializeApp(),
        a: a
    }

})();
