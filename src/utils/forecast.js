// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=bf41a64659793e40ad072f4f5b42df7b&query=' + latitude + ',' + longitude + '&units=f'

// request({ url, json: true }, (error, { body }) => {
//     if (error) {
//         callback('Unable to connect to weather service!', undefined)
//     } else if (body.error) {
//         callback('Unable to find location', undefined)
//     } else {
//         callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.current.temperature + ' degress out.')
//     }
// })
// }

// module.exports = forecast

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bf41a64659793e40ad072f4f5b42df7b&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast