document.getElementById('getWeather').addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    const apiKey = 'KWRks1B7WhQbOvakyzSBgJFd1eSkEdD7'; // Substitua por sua chave da API Tomorrow.io
    const url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature,precipitationType,weatherCode&timesteps=1h&units=metric&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.data && data.data.timelines.length > 0) {
            const weatherData = data.data.timelines[0].intervals[0].values;
            document.getElementById('weatherResult').innerHTML = `
                <h2>Tempo em ${location}</h2>
                <p>Temperatura: ${weatherData.temperature}°C</p>
                <p>Precipitação: ${weatherData.precipitationType || 'Nenhuma'}</p>
            `;
        } else {
            document.getElementById('weatherResult').innerText = 'Cidade não encontrada.';
        }
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('weatherResult').innerText = 'Erro ao buscar dados do tempo.';
    }
});
