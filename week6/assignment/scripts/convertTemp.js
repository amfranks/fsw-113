export default function convertTemp(country, temperature) { // Converts temperature provided by weather API
    if (country == 'US') {
        temperature = parseInt((Number(temperature) - 273.15) * 9/5 + 32) + 'F';
    } else {
        temperature = parseInt(Number(temperature) - 273.15) + 'C';
    }
    
    return temperature;
}