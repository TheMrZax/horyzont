const footer = document.querySelector('.ui-menu');
const przyciskKontakt = document.querySelector('.kontakt-menu-przycisk');
const przyciskPodstrony = document.querySelector('.podstrony-menu-przycisk');
const menuKontakt = document.querySelector('.kontakt-menu');
const menuPodstrony = document.querySelector('.podstrony-menu');
const zamknijMenuKontakt = document.querySelector('.zamknij-kontakt');
const zamknijMenuPodstrony = document.querySelector('.zamknij-podstrony');

let wysokoscStrony = window.innerHeight; //nie używać bo jest nadpisywana
let szerokoscStrony = window.innerWidth;

window.addEventListener('scroll', () => {
    if (szerokoscStrony < 540){
    const aktualnaWysokoscNaStronie = window.pageYOffset;
    if (wysokoscStrony > aktualnaWysokoscNaStronie) {
         footer.style = "bottom: 0";
    } else if (aktualnaWysokoscNaStronie == window.innerHeight) {
         footer.style = "bottom: 0";
    } else {
         footer.style = "bottom: -120%";
    }
    wysokoscStrony = aktualnaWysokoscNaStronie
    }
})
    
    przyciskKontakt.addEventListener('click', () => {
        menuKontakt.classList.add('widoczne')
    })

    przyciskPodstrony.addEventListener('click', () => {
        menuPodstrony.classList.add('widoczne')
    })
    
    zamknijMenuKontakt.addEventListener('click', () => {
        menuKontakt.classList.remove('widoczne');
    })
    
    zamknijMenuPodstrony.addEventListener('click', () => {
        menuPodstrony.classList.remove('widoczne');
    })

    document.querySelector('li.hamburger').addEventListener('click', () => {
            document.querySelector('.slide-menu').classList.add('active');
    })

    document.querySelector('li.zamknij-slide-menu').addEventListener('click', ()=> {
        document.querySelector('.slide-menu').classList.remove('active');
    })

//Kopiowanie tekstu do schowka
function lastSingleLetterToNewLine(el){
    let result;
    el.forEach((element, i)=>{   
        if(!element.innerHTML.match(/[{}]|<script|^\n$/gi)){
        result = element.innerHTML.replace(/ (.) /gi, " "+'\$1'+"&nbsp");
       }
        element.innerHTML = result;
    });
}
let el = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, .text");
lastSingleLetterToNewLine(el);