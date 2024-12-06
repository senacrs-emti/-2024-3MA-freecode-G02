const options = { method: 'GET', headers: { accept: 'application/json' } };

// A latitude e longitude de Porto Alegre
const PortoAlegre = { lat: -30.0277, lon: -51.2287 };

import { obterDiaDaSemanaEDiaDoMes } from './calendario.js';

document.getElementById(`Dia`).innerHTML = `${obterDiaDaSemanaEDiaDoMes(0)}`;
console.log(obterDiaDaSemanaEDiaDoMes(0));


const dados = fetch('./data.json')  
  .then((response) => response.json())
  .then((json) => {
    function atualizarPainel(diaIndex) {
      const diaSelecionado = json.data.timelines[0].intervals[diaIndex];
      let temperatura = diaSelecionado.values.temperature;
      let umidade = diaSelecionado.values.humidity;
      let ventos = diaSelecionado.values.windSpeed;
      let prevChuva = diaSelecionado.values.precipitationProbability;;


      document.getElementById('Dia').innerHTML = `${obterDiaDaSemanaEDiaDoMes(diaIndex)}`;

      // Exibindo os dados no console
      console.log('Temperatura:', temperatura);  // Temperatura em °C
      console.log('Umidade: ', umidade);  // Umidade em %
      console.log('Ventos: ', ventos * 3.6);  // Convertendo de m/s para km/h
      console.log('Previsão de chuva: ', prevChuva);  // Probabilidade de precipitação


      document.getElementById("temperatura").innerHTML = ` ${temperatura} °C`;
      document.getElementById("Umidade").innerHTML = `${umidade}%`;
      document.getElementById("Velocidade-vento").innerHTML = `${ventos * 3.6} Km/h`;
      document.getElementById("Prev-Chuva").innerHTML = `${prevChuva}%`; 

     const weatherImage = document.getElementById('icone-prev');

     if (prevChuva > 80) {
       weatherImage.src = './chuva.png'; 
       weatherImage.alt = 'Tempo chuvoso';
       console.log('chuva')
       document.getElementById('info-tempo2').querySelector('p').innerText = 'Tempo chuvoso';
     } else if (prevChuva < 80 && prevChuva > 40) {
       weatherImage.src = './nublado.png';  
       weatherImage.alt = 'Tempo nublado';
       console.log('nublado')
       document.getElementById('info-tempo2').querySelector('p').innerText = 'Tempo nublado';
     } else if(prevChuva < 30){
       weatherImage.src = './ensolarado.png';  
       weatherImage.alt = 'Tempo ensolarado';
       console.log('sol')
       document.getElementById('info-tempo2').querySelector('p').innerText = 'Tempo ensolarado';
     };
    }


    atualizarPainel(0);


    document.getElementById("dia-0").addEventListener("click", () => atualizarPainel(0));  // Segunda-feira
    document.getElementById("dia-1").addEventListener("click", () => atualizarPainel(1));  // Terça-feira
    document.getElementById("dia-2").addEventListener("click", () => atualizarPainel(2)); 
    document.getElementById("dia-3").addEventListener("click", () => atualizarPainel(3));  
    document.getElementById("dia-4").addEventListener("click", () => atualizarPainel(4));  
    document.getElementById("dia-5").addEventListener("click", () => atualizarPainel(5)); 

  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo JSON:", error);
  });
