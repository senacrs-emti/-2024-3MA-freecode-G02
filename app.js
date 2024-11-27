//popup:
// Função para abrir o popup ao clicar no botão de adicionar tarefa
document.querySelectorAll('.add-task-btn').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
  });
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});
import { obterDiaDaSemanaEDiaDoMes } from './calendário.js'
  // Atualizar as datas nos cabeçalhos dos dias da semana
  for (let i = 1; i <= 7; i++) {
    document.getElementById(`Data-${i}`).innerHTML = obterDiaDaSemanaEDiaDoMes(i - 1, 0);
  }


/* COLOCAR EM UM BOTÂo
fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${PortoAlegre.lat},${PortoAlegre.lon}&apikey=KWRks1B7WhQbOvakyzSBgJFd1eSkEdD7`, options)
  .then(res => res.json())
  .then(res => {
    //variaveis
    let temperatura = res.data.values.temperature;
    let raiosUV = res.data.values.uvIndex;
    //let umidade = res.data.values.humidity;
    //let ventos = res.data.values.windSpeed;
    //let prevChuva = res.data.values.precipitationProbability;

    //teste var
    console.log('Raios UV: ', raiosUV);
    console.log('Temperatura:', temperatura);
    console.log('Umidade: ', umidade);
    console.log('Ventos: ', ventos);
    console.log('Previsão tempo: ', prevChuva);

    document.getElementById("Raios-UV").innerHTML = `Raios UV: ${raiosUV}`;
    document.getElementById("temperatura").innerHTML = `Temperatura: ${temperatura} °C`;
    document.getElementById("Umidade").innerHTML = `Umidade: ${umidade}`;
    document.getElementById("Velocidade-vento").innerHTML = `Ventos: ${ventos}`;
    document.getElementById("Prev-chuva").innerHTML = `Precipitação: ${prevChuva}`;
  })
  .catch(err => console.error(err));
*/ 

