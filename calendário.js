// Função para obter o dia da semana e o dia do mês
export function obterDiaDaSemanaEDiaDoMes(dia = 0, mes = 0) {
    const diasDaSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    
    const dataAtual = new Date();
    const diaDaSemana = (dataAtual.getDay() + dia) % 7;  // % 7 faz a contagem reiniciar após Sábado
    const diaDoMes = dataAtual.getDate() + mes;    // Retorna o dia do mês (1 a 31)
    
    return `${diasDaSemana[diaDaSemana]} | Dia ${diaDoMes}`;
}
