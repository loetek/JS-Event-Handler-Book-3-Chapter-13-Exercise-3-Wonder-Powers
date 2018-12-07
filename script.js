// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

const flightHandlerFunction = () => {
    let reClass = document.getElementById('flight');
    reClass.classList.remove('disabled');
    reClass.classList.add('enabled')
    console.log (reClass);  
    return (reClass);  

}
const mindreaderHandlerFunction = () => {
    let reClass2 = document.getElementById('mindreading');
    reClass2.classList.remove('disabled');
    reClass2.classList.add('enabled')
    console.log (reClass2);  
    return (reClass2);  

}
const xrayHandlerFunction = () => {
    let reClass3 = document.getElementById('xray');
    reClass3.classList.remove('disabled');
    reClass3.classList.add('enabled')
    console.log (reClass3);  
    return (reClass3);  

}


// I wanted to select all of these using the powerlist class but I had a tough time so I just did it manually.

const enableAll = () => {
    let reClass = document.getElementById('flight');
    reClass.classList.remove('disabled');
    reClass.classList.add('enabled');
    let reClass2 = document.getElementById('mindreading');
    reClass2.classList.remove('disabled');
    reClass2.classList.add('enabled');
    let reClass3 = document.getElementById('xray');
    reClass3.classList.remove('disabled');
    reClass3.classList.add('enabled');

}

//Reversed the enableAll function.

const disableAll = () => {

    let reClass = document.getElementById('flight');
    reClass.classList.remove('enabled');
    reClass.classList.add('disabled');
    let reClass2 = document.getElementById('mindreading');
    reClass2.classList.remove('enabled');
    reClass2.classList.add('disabled');
    let reClass3 = document.getElementById('xray');
    reClass3.classList.remove('enabled');
    reClass3.classList.add('disabled');

}






// Add the correct string as the first argument to addEventListener()


document.querySelector("#activate-flight").addEventListener("click",flightHandlerFunction)
document.querySelector("#activate-mindreading").addEventListener("click",mindreaderHandlerFunction)
document.querySelector("#activate-xray").addEventListener("click",xrayHandlerFunction)
document.querySelector("#activate-all").addEventListener("click",enableAll)
document.querySelector("#deactivate-all").addEventListener("click", disableAll)






// Have your developer tools open. When you click the button, the following element...