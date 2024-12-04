<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CliMinder</title>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript">
        // Função para adicionar uma tarefa no banco de dados
        function addTaskToDB(title, time, description, day) {
            if (window.Android) {
                // Chama o método addTask da interface Java
                window.Android.addTask(title, time, description, day);
            }
        }

        // Função para exibir as tarefas de um dia específico
        function loadTasks(day) {
            if (window.Android) {
                // Chama o método getTasks da interface Java
                const tasks = window.Android.getTasks(day);
                const tasksArray = JSON.parse(tasks); // Converte o JSON retornado em um array
                let tasksHtml = '';
                tasksArray.forEach(task => {
                    tasksHtml += `<li><strong>${task.title}</strong> - ${task.time}<br>${task.description}</li>`;
                });
                document.getElementById("tasksList").innerHTML = tasksHtml;
            }
        }
    </script>
</head>
<body>
    <header>
        <button class="btn_header"><a href="./index.html">AGENDA</a></button>
        <button class="btn_header"><a href="./previsao.html">PREVISÃO</a></button>
    </header>
    <main>
        <h1>Semana</h1>
        <div>
            <button onclick="addTaskToDB('Tarefa 1', '12:00', 'Descrição da tarefa', 1)">Adicionar Tarefa</button>
        </div>
        <ul id="tasksList"></ul>
        <button onclick="loadTasks(1)">Carregar Tarefas para o Dia 1</button>
    </main>
</body>
</html>
