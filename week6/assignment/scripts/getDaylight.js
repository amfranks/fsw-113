export default function getDaylight(sunrise, sunset, d) {
    const dt = new Date(); // Creates a date object for current time and date
    let backgroundColor = 'blue';

    // If the date object is after sunset or before sunrise, then the background color will be black
    // If the date object is before sunset or after sunrise, the the background color will be blue
    if (d > sunset || d < sunrise) {
        backgroundColor = 'black';
    }

    return backgroundColor;
}