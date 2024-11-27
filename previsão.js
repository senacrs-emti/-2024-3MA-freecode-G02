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