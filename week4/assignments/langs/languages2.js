const lang = 'JavaScript';

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.getElementById('submit').addEventListener('click', function() {
    const allInputs = document.querySelectorAll('input');
    const arrayOfInputs = [...allInputs];

    chkLang(arrayOfInputs);
});

function chkLang(langs) {
    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    langs.forEach((language) => {
        if (language.value === lang) {
            result = true;
        }
    });

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}