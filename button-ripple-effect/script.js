const btnElement = document.querySelector('.btn')

btnElement.addEventListener('mouseover' , (event)=>{
    const x = (event.pageX - btnElement.offsetLeft)
    const y = (event.pageY - btnElement.offsetTop)

    btnElement.style.setProperty('--xPosition' , x + 'px')
    btnElement.style.setProperty('--yPosition' , y + 'px')
})