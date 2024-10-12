const containerElement = document.querySelector('.container')

const items = ["Amirhosein Imani" , "Web Developer" , "Programmer" , "Freelancer"]

let itemIndex = 0 
let characterIndex = 0 

updateText();

function updateText(){
    characterIndex++
    
    if (itemIndex === 0) {
        containerElement.innerHTML = `<h1>I am ${items[itemIndex].slice(0,characterIndex)}</h1>`
    }
    else{
        containerElement.innerHTML = `<h1>I am a ${items[itemIndex].slice(0,characterIndex)}</h1>`
    }

    if (characterIndex === items[itemIndex].length) {
        itemIndex++
        characterIndex = 0
    }
    
    if (itemIndex === items.length) {
        itemIndex = 0
    }

    setTimeout(updateText , 200);
}