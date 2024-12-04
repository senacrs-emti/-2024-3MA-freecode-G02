// Script para abrir o popup
document.querySelectorAll('.add-task-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dia = this.getAttribute('data-dia'); // Captura o dia do botão clicado
        document.getElementById('diaSelecionado').value = dia; // Define o valor no campo oculto
        document.getElementById('popup').style.display = 'flex'; // Exibe o popup
    });
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Fecha o popup
});

// Enviar o formulário para o servidor usando AJAX
document.getElementById('formAddTask').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const titulo = document.getElementById('titulo').value;
    const horario = document.getElementById('horario').value;
    const descricao = document.getElementById('descricao').value;
    const dia = document.getElementById('diaSelecionado').value;

    // Enviar os dados para o backend usando AJAX
    fetch('adicionar_tarefa.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `titulo=${titulo}&horario=${horario}&descricao=${descricao}&dia=${dia}`
    })
    .then(response => response.text())
    .then(data => {
        alert('Tarefa adicionada com sucesso!');
        document.getElementById('popup').style.display = 'none'; // Fecha o popup
        location.reload(); // Recarrega a página para mostrar as tarefas atualizadas
    })
    .catch(error => console.error('Erro ao adicionar tarefa:', error));
});
