const bodyElement = document.querySelector('body')

bodyElement.addEventListener('mousemove' , (event)=>{
    const xPosition = event.offsetX
    const yPosition = event.offsetY
    const spanElement = document.createElement('span')
    spanElement.style.left = xPosition + 'px'
    spanElement.style.top = yPosition + 'px'
    bodyElement.appendChild(spanElement)
    const randomSize = Math.random() * 100
    spanElement.style.width = randomSize + 'px'
    spanElement.style.height = randomSize + 'px'
    setTimeout(() => {
        spanElement.remove()
    }, 3000);
})