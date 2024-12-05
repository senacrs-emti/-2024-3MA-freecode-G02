
<?php include_once('functions.php');
obterTarefas();
$tarefas = buscarTarefas();
$tarefasPorDia = [];
foreach ($tarefas as $tarefa) {
    $tarefasPorDia[$tarefa['dia']][] = $tarefa;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CliMinder</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <button class="btn_header"><a href="./index.php">AGENDA</a></button>
        <button class="btn_header"><a href="./previsao.html">PREVISÃO</a></button>
    </header>
    <main>
    <div id="popup" class="popup">
        <div class="popup-content">
            <span id="closePopupBtn" class="close">&times;</span>
            <h2>Adicionar Atividade</h2>
            <form action="" method="post">
                <input type="hidden" name=data-dia id="diaSelecionado">
                <label for="titulo">Título</label>
                <input type="text" name="titulo" required>
                <label for="horario">Horário</label>
                <input type="time" name="horario" required>
                <label for="descricao">Descrição</label>
                <input type="text" name="descricao">
                <input type="submit" value="Adicionar Tarefa">
            </form>
        </div>
    </div>
        <h1>Semana</h1>
        <?php for ($i = 1; $i <= 7; $i++): ?>
    <div class="conteiner-semana">
        <div class="nav-semana">
            <h2 id="Data-<?php echo $i; ?>"></h2>
            <button class="add-task-btn" data-dia="<?php echo $i; ?>"></button>
        </div>
        <div class="conteudo-dia-semana">
            <ul class="evento">
                <?php 
                    if (isset($tarefasPorDia[$i])) {
                        foreach ($tarefasPorDia[$i] as $tarefa) {
                            echo "<li class='li-task-block'>
                                    <div class='task_block'>
                                        <p class='text-task-block'><strong>{$tarefa['titulo']}</strong> <br> 
                                        {$tarefa['descricao']} <br></p>
                                    </div>
                                </li>";
                        }
                    } else {
                        echo "<li class='li-task-bloc'>Adicione uma tarefa</li>";
                    }
                ?>
            </ul>
        </div>
    </div>
<?php endfor; ?>


    </main>
    <footer>
    <p class="footer-text">Baseado na API Tomorrow.io</p>
</footer>
    <script type="module" src="calendario.js"></script>
    <script type="module" src="app.js"></script>
</body>
</html>