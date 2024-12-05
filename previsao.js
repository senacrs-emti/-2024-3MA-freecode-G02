const options = { method: 'GET', headers: { accept: 'application/json' } };

// A latitude e longitude de Porto Alegre
const PortoAlegre = { lat: -30.0277, lon: -51.2287 };

import { obterDiaDaSemanaEDiaDoMes } from './calendario.js';

// Atualizar o dia no painel com a data atual
document.getElementById(`Dia`).innerHTML = `${obterDiaDaSemanaEDiaDoMes(0)}`;
console.log(obterDiaDaSemanaEDiaDoMes(0));

// Fetch do arquivo JSON contendo os dados de previsão do tempo
const dados = fetch('./data.json')  // Aqui você faz o fetch do seu arquivo JSON
  .then((response) => response.json())
  .then((json) => {
    // Função para atualizar os dados do painel com base no índice do dia
    function atualizarPainel(diaIndex) {
      const diaSelecionado = json.data.timelines[0].intervals[diaIndex];
      let temperatura = diaSelecionado.values.temperature;
      let raiosUV = 'Alto';  // Exemplo fixo, pois você não tem esse dado no seu JSON atual
      let umidade = diaSelecionado.values.humidity;
      let ventos = diaSelecionado.values.windSpeed;
      let prevChuva = diaSelecionado.values.precipitationProbability;

      // Atualizando o título do dia no painel usando a função do calendário
      document.getElementById('Dia').innerHTML = `${obterDiaDaSemanaEDiaDoMes(diaIndex)}`;

      // Exibindo os dados no console
      console.log('Raios UV: ', raiosUV);  // Para o nível de UV, você precisará ter esses dados ou determinar um valor
      console.log('Temperatura:', temperatura);  // Temperatura em °C
      console.log('Umidade: ', umidade);  // Umidade em %
      console.log('Ventos: ', ventos * 3.6);  // Convertendo de m/s para km/h
      console.log('Previsão de chuva: ', prevChuva);  // Probabilidade de precipitação

      // Atualizando o painel com os dados do dia selecionado
      document.getElementById("Raios-UV").innerHTML = `${raiosUV}`;
      document.getElementById("temperatura").innerHTML = ` ${temperatura} °C`;
      document.getElementById("Umidade").innerHTML = `${umidade}%`;
      document.getElementById("Velocidade-vento").innerHTML = `${ventos * 3.6} Km/h`;
      document.getElementById("Prev-Chuva").innerHTML = `${prevChuva}%`; 
    }

    // Inicializando com o primeiro dia (Segunda-feira)
    atualizarPainel(0);

    // Adicionando eventos de clique nos botões dos dias
    document.getElementById("dia-0").addEventListener("click", () => atualizarPainel(0));  // Segunda-feira
    document.getElementById("dia-1").addEventListener("click", () => atualizarPainel(1));  // Terça-feira
    document.getElementById("dia-2").addEventListener("click", () => atualizarPainel(2));  // Quarta-feira
    document.getElementById("dia-3").addEventListener("click", () => atualizarPainel(3));  // Quinta-feira
    document.getElementById("dia-4").addEventListener("click", () => atualizarPainel(4));  // Sexta-feira
    document.getElementById("dia-5").addEventListener("click", () => atualizarPainel(5));  // Sábado
    document.getElementById("dia-6").addEventListener("click", () => atualizarPainel(6));  // Domingo
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo JSON:", error);
  });
