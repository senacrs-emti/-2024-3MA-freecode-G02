const options = {method: 'GET', headers: {accept: 'application/json'}};
const PortoAlegre = { lat: -30.0277, lon: -51.2287 };

const dados = fetch('./data.json').then((response) => response.json())
    .then((json) => {
      let temperatura = json.data.values.temperature;
      let raiosUV = json.data.values.uvIndex;
      let umidade = json.data.values.humidity;
      let ventos = json.data.values.windSpeed;
      let prevChuva = json.data.values.precipitationProbability;

      //teste var
      console.log('Raios UV: ', raiosUV);//nível de UV: 0-2(baixo); 3-5(moderado); 6-7(alto!!); 8-10(muito alto!!)
      console.log('Temperatura:', temperatura);//em C°
      console.log('Umidade: ', umidade);//em porcentagem
      console.log('Ventos: ', ventos *3.6);//está em m/s deve ser convertido para k/m
      console.log('Previsão tempo: ', prevChuva);//em porcentagem

      document.getElementById("Raios-UV").innerHTML = `${raiosUV}`;
      document.getElementById("temperatura").innerHTML = ` ${temperatura} °C`;
      document.getElementById("Umidade").innerHTML = `${umidade}%`;
      document.getElementById("Velocidade-vento").innerHTML = `${ventos*3.6}Km/h`;
      document.getElementById("Prev-Chuva").innerHTML =`${prevChuva}%`; 
    });

// Função para obter o dia da semana e o dia do mês
function obterDiaDaSemanaEDiaDoMes(dia = 0, mes = 0) {
  const diasDaSemana = [
      "Domingo", "Segunda-feira", "Terça-feira", 
      "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];
  
  const dataAtual = new Date();
  const diaDaSemana = dataAtual.getDay()+dia;  // Retorna um número de 0 a 6
  const diaDoMes = dataAtual.getDate()+mes;    // Retorna o dia do mês (1 a 31)
  
  return `${diasDaSemana[diaDaSemana]} | Dia ${diaDoMes}`;
}


document.getElementById("Dia").innerHTML = `${obterDiaDaSemanaEDiaDoMes()}`;
for(i=0;i<7;i++){
  document.getElementById("Data-"+i).innerHTML = `${obterDiaDaSemanaEDiaDoMes()}`;
}
// Exibe o dia da semana atual




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

