export function obterDiaDaSemanaEDiaDoMes(dia = 0) {
    const diasDaSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const dataAtual = new Date(); // Data atual
    const novaData = new Date(dataAtual); // Cria uma cópia para manipular
    novaData.setDate(dataAtual.getDate() + dia); // Ajusta o dia (respeita o limite do mês)

    const diaDaSemana = novaData.getDay(); // Obtém o dia da semana (0 a 6)
    const diaDoMes = novaData.getDate(); // Obtém o dia do mês (1 a 31)

    return `${diasDaSemana[diaDaSemana]} | Dia ${diaDoMes}`;
}
