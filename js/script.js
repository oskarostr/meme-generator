const image = document.querySelector('img')
const input1 = document.querySelector('.input-one')
const input2 = document.querySelector('.input-two')
const captionTop = document.querySelector('.caption-one')
const captionBottom = document.querySelector('.caption-two')
const btn = document.querySelector('.roll-btn')

btn.addEventListener('click', () => {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            const random = Math.floor(Math.random() * (100 - 0) + 0)
            image.setAttribute('src', data.data.memes[random].url)
        })
        .catch(error => console.error(error))

    input1.value = ''
    input2.value = ''
    captionTop.textContent = ''
    captionBottom.textContent = ''
})

const changeTextOne = () => {
    captionTop.textContent = input1.value
}

const changeTextTwo = () => {
    captionBottom.textContent = input2.value
}

input1.addEventListener('input', changeTextOne)
input2.addEventListener('input', changeTextTwo)