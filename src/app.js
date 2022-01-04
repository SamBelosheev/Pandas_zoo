// Animals

const tinyImages = ["./src/img/panda_tiny.webp", "./src/img/eagle_tiny.webp", "./src/img/gorila_tiny.webp", "./src/img/aligator_tiny.webp"]
const largeImages = ["","./src/img/Main_Eagles.jpg", "./src/img/Main_gorillas.jpg", "./src/img/Main_alligators.jpg"]
const imageTitles = ["The Giant Pandas", "Eagles", "Gorillas", "Aligators"]
const isVideo = [true, false, false, false]



for (let i = 0; i <= 3 ; i++){
    document.querySelector(".vert_foto").innerHTML += `<div class=\"tiny_foto\">\n` +
        `                <img class=\"tiny_fotos\" src= \"${tinyImages[i]}\"  onclick = \"setActiveButton(${i})\">\n` +
        `            </div>\n` +
        `            <p class=\"animal_name\">${imageTitles[i]}</p>`

}
const fotoList = document.querySelectorAll('.tiny_fotos')

for (let i = 0; i <= 3 ; i++){
    fotoList[i].onclick = () => {
        setActiveButton(i)
    }
}


const animalList = document.querySelectorAll(".animal_name")


const mainText = document.querySelector('.main_text')

const mainScreen = document.querySelector('.main_foto')

const mainVideos = document.querySelector('.main_videos')

const forPadding = document.querySelector('.for_padding')

setTimeout(() => {
    addStylesTo(fotoList[0])
},  10)


function addStylesTo (){
    fotoList[0].style.backgroundColor = '#2A8086'
}

function setActiveButton (activePhotoIndex) {
    for (var i = 0; i <= fotoList.length - 1; i++)
        fotoList[i].style.backgroundColor = '#E5E5E5'
    fotoList[activePhotoIndex].style.backgroundColor = '#2A8086'
    mainScreen.src = largeImages[activePhotoIndex]
    mainText.textContent = imageTitles[activePhotoIndex]
    if (isVideo [activePhotoIndex]){
        mainVideos.style.display = 'block'
        mainScreen.style.display = 'none'
    }
    else {
        mainVideos.style.display = 'none'
        mainScreen.style.display = 'block'
    }
}



const navigationList = document.querySelectorAll(".navigation__links")

const about = navigationList[0]
const map = navigationList[1]
const zoos = navigationList[2]
const contactUS = navigationList[3]
const design = navigationList[4]



contactUS.onclick = () => {
    window.prompt()
}

const SingList = document.querySelectorAll('.buttons')

const LogIn = SingList[0]
const SingUp = SingList[1]

console.log(LogIn)
console.log(SingUp)


