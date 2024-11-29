
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

function obterTarefas() {
    global $conn; 

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
}

// Função para buscar tarefas do banco de dados
function buscarTarefas() {
    global $conn; // Acessa a variável $conn do escopo global


    $sql = "SELECT * FROM atividades"; // Seleciona todas as tarefas
    $result = $conn->query($sql); // Executa a consulta

    if ($result->num_rows > 0) {
        return $result->fetch_all(MYSQLI_ASSOC);
    } else {
        return []; 
    }
}
?>
