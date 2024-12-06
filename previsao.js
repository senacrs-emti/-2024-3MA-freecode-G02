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
      let umidade = diaSelecionado.values.humidity;
      let ventos = diaSelecionado.values.windSpeed;
      let prevChuva = diaSelecionado.values.precipitationProbability;

      // Atualizando o título do dia no painel usando a função do calendário
      document.getElementById('Dia').innerHTML = `${obterDiaDaSemanaEDiaDoMes(diaIndex)}`;

      // Exibindo os dados no console
      console.log('Temperatura:', temperatura);  // Temperatura em °C
      console.log('Umidade: ', umidade);  // Umidade em %
      console.log('Ventos: ', ventos * 3.6);  // Convertendo de m/s para km/h
      console.log('Previsão de chuva: ', prevChuva);  // Probabilidade de precipitação

      // Atualizando o painel com os dados do dia selecionado
      document.getElementById("temperatura").innerHTML = ` ${temperatura} °C`;
      document.getElementById("Umidade").innerHTML = `${umidade}%`;
      document.getElementById("Velocidade-vento").innerHTML = `${ventos * 3.6} Km/h`;
      document.getElementById("Prev-Chuva").innerHTML = `${prevChuva}%`; 

           // Atualizando a imagem com base no tipo de precipitação
     const weatherImage = document.getElementById('icone-prev');

     // Condicional para escolher a imagem de acordo com o tipo de precipitação
     if (prevChuva > 80) {
       weatherImage.src = './chuva.png';  // Imagem de chuva
       weatherImage.alt = 'Tempo chuvoso';
       document.getElementById('info-tempo2').querySelector('p').innerText = 'Tempo chuvoso';
     } else if (prevChuva >= 40 && prevChuva <= 80) {
      weatherImage.src = './nublado.png';
      weatherImage.alt = 'Tempo nublado';
      document.getElementById('info-tempo2').querySelector('p').innerText = 'Tempo nublado';
    }
     else{
       weatherImage.src = './ensolarado.png';  // Imagem de sol
       weatherImage.alt = 'Tempo ensolarado';
       document.getElementById('info-tempo2').querySelector('p').innerText = 'Tempo ensolarado';
     };
    }

    // Inicializando com o primeiro dia (Segunda-feira)
    atualizarPainel(0);

    // Adicionando eventos de clique nos botões dos dias
    document.getElementById("dia-0").addEventListener("click", () => atualizarPainel(0));  // Segunda-feira
    document.getElementById("dia-1").addEventListener("click", () => atualizarPainel(1)); 
    document.getElementById("dia-2").addEventListener("click", () => atualizarPainel(2)); 
    document.getElementById("dia-3").addEventListener("click", () => atualizarPainel(3));  
    document.getElementById("dia-4").addEventListener("click", () => atualizarPainel(4));  
    document.getElementById("dia-5").addEventListener("click", () => atualizarPainel(5)); 

  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo JSON:", error);
  });
