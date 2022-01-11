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
const buttonSend = document.querySelector(".contactUs_button")
const shieldFon = document.querySelector(".shield_fon")
const contactFon = document.querySelector(".contactUs_container")
const LogIn = document.querySelector('.button__log')
const SingUp = document.querySelector('.button__sing')
const singInConteyner = document.querySelector('.window_singIn_container')
const singUpConteyner = document.querySelector('.window_singUp_container')
const chooseSing = document.querySelectorAll('.window_sing_choose')
const donateButton = document.querySelector('.bot_button')
const donateMenu = document.querySelector('.donate_container')


LogIn.onclick = () =>{
    shieldFon.style.display = 'block'
    singUpConteyner.style.display = 'flex'
}

 SingUp.onclick = () =>{
    shieldFon.style.display = 'block'
    singInConteyner.style.display = 'flex'
}

contactUS.onclick = () => {
    shieldFon.style.display = 'block'
    contactFon.style.display = 'flex'
}

shieldFon.onclick = () => {
    contactFon.style.display = 'none'
    shieldFon.style.display = 'none'
    singInConteyner.style.display = 'none'
    singUpConteyner.style.display = 'none'
    donateMenu.style.display = 'none'
}

buttonSend.onclick = () => {
    contactFon.style.display = 'none'
    shieldFon.style.display = 'none'
}

chooseSing[0].onclick = () => {
    singUpConteyner.style.display = 'flex'
    singInConteyner.style.display = 'none'
}

chooseSing[1].onclick = () => {
    singUpConteyner.style.display = 'none'
    singInConteyner.style.display = 'flex'
}

donateButton.onclick = () => {
    donateMenu.style.display = 'block'
    shieldFon.style.display = 'block'
}


//document.addEventListener("click", documentActions);

//function documentActions(e) {
//    const  targetElement = e.target;
//   if (targetElement.closest('[data-parent]')){
//        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
//        const subMenu = document.querySelector('[data-submenu="${subMenuId}"]');
//        if (subMenu) {
//            targetElement.classList.add('_sub-menu-active');
//            subMenu.classList.add('_sub-menu-open');
//       }
//        else {
//            console.log( 'вай вай вай, нету такого меню')
//        }
//        e.preventDefault();
//    }
//}

const donateChange = document.querySelectorAll('.donate_moneyTag')

function setDonateButton (activeTagIndex) {
    for (var i = 0; i <= fotoList.length - 1; i++)
        donateChange[i].style.backgroundColor = '#E5E5E5'
    donateChange[activeTagIndex].style.backgroundColor = '#2A8086'

    }
}



