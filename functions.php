<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tarefasCalendario";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se a conexão foi bem-sucedida
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Função para adicionar tarefas ao banco de dados
function obterTarefas() {
    global $conn;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $dia = $_POST['data-dia']; // Recebe o valor do dia do campo oculto
        $titulo = $_POST['titulo'];
        $horario = $_POST['horario'];
        $descricao = $_POST['descricao'];

        $sql = "INSERT INTO atividades (dia, titulo, horario, descricao) 
                VALUES ('$dia', '$titulo', '$horario', '$descricao')";


        if ($conn->query($sql) === TRUE) {
            // Redireciona para a mesma página após a inserção
            header("Location: " . $_SERVER['PHP_SELF']); 
            exit();
        } else {
            echo "Erro ao adicionar tarefa: " . $conn->error;
        }
    }
}

// Função para buscar tarefas do banco de dados
function buscarTarefas() {
    global $conn; 
    $sql = "SELECT * FROM atividades"; 
    $result = $conn->query($sql); 

    if ($result->num_rows > 0) {
        // Retorna os resultados como um array 
        return $result->fetch_all(MYSQLI_ASSOC);
    } else {
        return []; 
    }
}
// Função para deletar uma tarefa
function deletarTarefa() {
    global $conn;
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['deletar'])) {
        $tarefa_id = $_POST['tarefa_id'];  // O ID da tarefa a ser excluída

        $sql = "DELETE FROM atividades WHERE id = $tarefa_id";

        if ($conn->query($sql) === TRUE) {
            // Redireciona para a mesma página após a exclusão
            header("Location: " . $_SERVER['PHP_SELF']); 
            exit();
        } else {
            echo "Erro ao excluir tarefa: " . $conn->error;
        }
    }
}

// Chama a função de deletar tarefa
deletarTarefa();


?>
