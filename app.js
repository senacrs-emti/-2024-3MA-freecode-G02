const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.tomorrow.io/v4/weather/realtime?location=PortoAlegre&apikey=KWRks1B7WhQbOvakyzSBgJFd1eSkEdD7', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));