// Animals

function getJsonSync(url){
    var req = new XMLHttpRequest();
    var json
    req.open('GET', url, false)
    req.onload = function (){
        json = JSON.parse(req.response);
    }
    req.send(null)
    return json
}

const animals = getJsonSync("./src/animals.json")


for (let i = 0; i <= animals.length - 1 ; i++)
    document.querySelector(".vert_foto").innerHTML += `<div class=\"tiny_foto\">\n` +
        `                <img class=\"tiny_fotos\" src= \"${animals[i].tinyImage}\"  onclick = \"setActiveButton(${i})\">\n` +
        `            </div>\n` +
        `            <p class=\"animal_name\">${animals[i].imageTitle}</p>`

const fotoList = document.querySelectorAll('.tiny_fotos')


const mainText = document.querySelector('.main_text')

const mainScreen = document.querySelector('.main_foto')

const mainVideos = document.querySelector('.main_videos')

function setActiveButton (activePhotoIndex) {
    for (var i = 0; i <= fotoList.length - 1; i++)
        fotoList[i].style.backgroundColor = '#E5E5E5'
    fotoList[activePhotoIndex].style.backgroundColor = '#2A8086'

    mainText.textContent = animals[activePhotoIndex].imageTitle
    if (animals[activePhotoIndex].isVideo){
        mainVideos.data = animals[activePhotoIndex].largeImage
        mainVideos.style.display = 'block'
        mainScreen.style.display = 'none'
    }
    else {
        mainScreen.src = animals[activePhotoIndex].largeImage
        mainVideos.style.display = 'none'
        mainScreen.style.display = 'block'
    }
}

setActiveButton(0)



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


