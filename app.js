// const ALLCARD = document.querySelectorAll('.carte')

// let Cardflip = false
// let firstCard , secondCard 
// let lockCard =  false

// ALLCARD.forEach(card => {
//     card.addEventListener('click' , flipedCard )
// })


// function flipedCard (){

//     if (!Cardflip) {
//         Cardflip = true
//         this.childNodes[1].classList.toggle('active')
//         firstCard = this.childNodes[1]
//         // secondCard = this.childNodes[1]
//     }
//     Cardflip = true
//     this.childNodes[1].classList.toggle('active')
//     secondCard = this.childNodes[1]

//     checkinCard()

// }


// function checkinCard(){

//     if (firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')) {
//         firstCard.removeEventListener('click' , flipedCard)
//         secondCard.removeEventListener('click' , flipedCard)
//     }else{

//     }
// }




























// const cartes = document.querySelectorAll('.carte')

// let carteRetournee =  false
// let premiereCarte , secondeCarte
// let verouillage = false 

// cartes.forEach(carte => {
//     carte.addEventListener('click', retourneCarte)
// })

// function retourneCarte(){

//     if(verouillage) return;

//     this.childNodes[1].classList.toggle('active')

//     if (!carteRetournee) {
//         carteRetournee = true
//         premiereCarte = this
//         return
//     }

//     carteRetournee = false
//     secondeCarte = this

//     correspondance()
// }


// function correspondance(){

//     if(premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')){
//         premiereCarte.removeEventListener('click', retourneCarte)
//         secondeCarte.removeEventListener('click', retourneCarte)
//     }else{
//         verouillage = true
//         setTimeout(() => {
//             premiereCarte.childNodes[1].classList.remove('active')
//             secondeCarte.childNodes[1].classList.remove('active')
//             verouillage =  false
//         }, 1000);
//     }
    
// }





























// const tabImg = {
//     0: 'ressources/banana.svg',
//     1: 'ressources/apple.svg',
//     2: 'ressources/brocoli.svg',
//     3: 'ressources/cherry.svg',
//     4: 'ressources/pepper.svg',
//     5: 'ressources/straw.svg',
//     6: 'ressources/banana.svg',
//     7: 'ressources/pepper.svg',
//     8: 'ressources/cherry.svg',
//     9: 'ressources/apple.svg',
//     10: 'ressources/brocoli.svg',
//     11: 'ressources/straw.svg'
// }
// mixingCards()

// function randomNumber(){
//     const tabValue = []
//     let val = 0
//     for (let i = 0; i < 12; i++) {
//          val = Math.trunc(Math.random() * 12)
//          if (i === 0) {
//             tabValue[i] =  val
//          }else{
//            let values =  tabValue.find(nb => nb === val)
//            while (values === val) {
//             val = Math.trunc(Math.random() * 12)
//             values =  tabValue.find(nb => nb === val)
//            }
//             tabValue[i] =  val
//          }
//     }
//     return tabValue
// }

// function mixingCards(){
//     const allImg = document.querySelectorAll('img')
//     let i = 0
//     let images = randomNumber()
//     allImg.forEach(img => {
//         img.src = `${tabImg[images[i]]}`
//         i++
//         if (i === 12) {
//             return
//         }
//     })
// }

// const cards =  document.querySelectorAll('.card')
// let  i = 0
// let tabcompare = []
// cards.forEach(card => {
//     card.addEventListener('click', e => {
       
//         e.currentTarget.classList.add('cardR')
//         tabcompare[i] = e.currentTarget
//         i++
//         if (tabcompare.length === 2) {
//             if(tabcompare[0].querySelector('img').src !== tabcompare[1].querySelector('img').src ){
//                 setTimeout(() => {
//                     tabcompare[0].classList.remove('cardR')
//                     tabcompare[1].classList.remove('cardR')
//                     tabcompare = []
//                     i = 0
//                 }, 500);
//             }else{
//                 tabcompare[0].style.pointerevents = "none"
//                 tabcompare[1].style.pointerevents = "none"
//                 tabcompare = []
//                     i = 0
//             }
//         }
        
//     })
// });