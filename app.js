const options = {method: 'GET', headers: {accept: 'application/json'}};
const PortoAlegre = { lat: -30.0277, lon: -51.2287 };

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

/* USO COM ARRAY, chamando todos de uma vez
const options = { method: 'GET', headers: { accept: 'application/json' } };
const PortoAlegre = { lat: -30.0277, lon: -51.2287 };

fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${PortoAlegre.lat},${PortoAlegre.lon}&apikey=KWRks1B7WhQbOvakyzSBgJFd1eSkEdD7`, options)
  .then(res => res.json())
  .then(res => {
    // Array com as propriedades que queremos extrair
    const propriedades = [
      { key: 'temperature', elementId: 'temperatura' },
      { key: 'uvIndex', elementId: 'Raios-UV' },
      { key: 'humidity', elementId: 'Umidade' },
      { key: 'windSpeed', elementId: 'Velocidade-vento' },
      { key: 'precipitationProbability', elementId: 'Pre-chuva' }
    ];

    // Itera sobre o array de propriedades
    propriedades.forEach(prop => {
      const value = res.data.values[prop.key];
      console.log(`${prop.key}:`, value); // Loga o valor
      document.getElementById(prop.elementId).innerHTML = `${prop.key.charAt(0).toUpperCase() + prop.key.slice(1)}: ${value}`; // Atualiza o HTML
    });
  })
  .catch(err => console.error(err));
*/ 
  
