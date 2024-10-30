const options = { method: 'GET', headers: { accept: 'application/json' } };
const PortoAlegre = { lat: -30.0277, lon: -51.2287 };

fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${PortoAlegre.lat},${PortoAlegre.lon}&apikey=KWRks1B7WhQbOvakyzSBgJFd1eSkEdD7`, options)
  .then(res => res.json())
  .then(({ data: { values: { temperature } } }) => {
    console.log('Temperatura:', temperature);
  })
  .catch(err => console.error(err));
