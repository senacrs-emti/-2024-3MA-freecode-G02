<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tarefasCalendario";
 
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $dia = $_POST['dia'];
    $titulo = $_POST['titulo'];
    $horario = $_POST['horario'];
    $descricao = $_POST['descricao'];

    // Prepara a consulta SQL para inserção
    $sql = "INSERT INTO atividades (dia, titulo, horario, descricao) 
            VALUES ('$dia', '$titulo', '$horario', '$descricao')";

    // Executa a consulta SQL
    if ($conn->query($sql) === TRUE) {
        echo "Tarefa adicionada com sucesso!";
    } else {
        echo "Erro ao adicionar tarefa: " . $conn->error;
    }
}

// Fecha a conexão
$conn->close();
?>