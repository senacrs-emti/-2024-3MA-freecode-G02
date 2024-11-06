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
      console.log('Ventos: ', ventos);//está em m/s deve ser convertido para k/m
      console.log('Previsão tempo: ', prevChuva);//em porcentagem

      document.getElementById("Raios-UV").innerHTML = `Raios UV: ${raiosUV}`;
      document.getElementById("temperatura").innerHTML = `Temperatura: ${temperatura} °C`;
      document.getElementById("Umidade").innerHTML = `Umidade: ${umidade}`;
      document.getElementById("Velocidade-vento").innerHTML = `Ventos: ${ventos}`;
      document.getElementById("Prev-chuva").innerHTML = `Precipitação: ${prevChuva}`;
    });



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

