const systemSelect = document.getElementById('system');
const subSystemSelect = document.getElementById('subSystem');

window.addEventListener('load', () => {
    getSystems(0, systemSelect);
})

//////////////////////////////////////////////////////////////////////////

function getSystems(parentId, domElement) {
    fetch('../data.json')
    .then(res => res.json())
    .then(res => {
        let responseArray = res.systems;

        let newArray = responseArray.filter((e) => {
            return e.parentID === parentId;
        })
        
        populateDD(newArray, domElement);
    })
    .catch(error => console.log(error))
}

//////////////////////////////////////////////////////////////////////////

function populateDD(array, domElement) {

    let option = document.createElement('option');
    option.textContent = 'Select an Item';
    option.value = '';
    option.setAttribute = 'selected';
    domElement.appendChild(option);

    for (let i = 0; i < array.length; i++) {
        let nextOption = document.createElement('option');
        let txt = document.createTextNode(array[i].sysName);
        nextOption.appendChild(txt);
        domElement.appendChild(nextOption);
    }
}

//////////////////////////////////////////////////////////////////////////

document.querySelector('#system').addEventListener('change', () => {

    if (document.querySelector('#system').value == 'Sales') {
        for (let i = 0; i < subSystemSelect.length; i++) {
            subSystemSelect.innerHTML = '';
        }
        getSystems(1, subSystemSelect);
    } else if (document.querySelector('#system').value == 'Operations') {
        for (let i = 0; i < subSystemSelect.length; i++) {
            subSystemSelect.innerHTML = '';
        }
        getSystems(2, subSystemSelect);
    } else if (document.querySelector('#system').value == 'Customer Support') {
        for (let i = 0; i < subSystemSelect.length; i++) {
            subSystemSelect.innerHTML = '';
        }
        getSystems(3, subSystemSelect);
    } 
})