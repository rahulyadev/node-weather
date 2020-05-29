const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&APPID=807ef8d5532bbcac7d082fdad8f2cfbd&units=metric'
    // 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&APPID=807ef8d5532bbcac7d082fdad8f2cfbd&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.list[0].weather.description)
            callback(undefined, body.list[0].weather[0].description + '. It is currently ' + body.list[0].main.temp + ' degress out. Humidity is ' + body.list[0].main.humidity + '.')
        }
    })
}

module.exports = forecast