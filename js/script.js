//Container Box for letters 

const playerAnimation = {
    targets: '#boxContainer',
    rotate: '360deg',
    duration: 20000,
    scale: 2,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    loop: 1,
    autoplay:false,

}


//Every letter in Box

const pl1Animation = {
    targets: '#pl1',
    loop: 3,
    borderRadius: ['0%', '50%'],
    delay: anime.stagger(1000, { start: 2000 }),
    easing: 'easeInOutQuad',
duration: 4000,
autoplay:false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: ' hsl(271, 76%, 53%)' },
        { translateY: '200px', translateX: '50px', backgroundColor: ' hsl(171, 76%, 53%)' },
        { translateY: '0px', translateX: '0px', backgroundColor: ' hsl(184, 100%, 50%)' },
    ],
   



}
const pl2Animation = {
    targets: '#pl2',
    loop: 2,
    borderRadius: ['0%', '50%'],
    delay: anime.stagger(4000, { start: 6000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay:false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: ' hsl(271, 76%, 53%)' },
        { translateY: '200px', translateX: '50px', backgroundColor: ' hsl(171, 76%, 53%)' },
        { translateY: '0px', translateX: '0px', backgroundColor: ' hsl(242, 100%, 78%)' }
    ],

}
const pl3Animation = {
    targets: '#pl3',
    loop: 1,
    borderRadius: ['0%', '50%'],
    delay: anime.stagger(8000, { start: 10000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay:false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: ' hsl(271, 76%, 53%)' },
        { translateY: '200px', translateX: '50px', backgroundColor: ' hsl(171, 76%, 53%)' },
        { translateY: '0px', translateX: '0px', backgroundColor: ' hsl(154, 100%, 78%)' }
    ],

}
const pl4Animation = {
    targets: '#pl4',
    loop: 1,
    borderRadius: ['0%', '50%'],
    delay: anime.stagger(12000, { start: 14000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay:false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: ' hsl(271, 76%, 53%)' },
        { translateY: '200px', translateX: '50px', backgroundColor: ' hsl(171, 76%, 53%)' },
        { translateY: '0px', translateX: '0px', backgroundColor: ' hsl(15, 100%, 78%)' }
    ],

}
const pl5Animation = {
    targets: '#pl5',
    loop: 1,
    borderRadius: ['0%', '50%'],
    delay: anime.stagger(14000, { start: 16000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay:false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: ' hsl(271, 76%, 53%)' },
        { translateY: '200px', translateX: '50px', backgroundColor: ' hsl(171, 76%, 53%)' },
        { translateY: '0px', translateX: '0px', backgroundColor: ' hsl(78, 100%, 76%)' }
    ],
    
    

}


//Show animation

anime(pl1Animation)
anime(pl2Animation)
anime(pl3Animation)
anime(pl4Animation)
anime(pl5Animation)



//Button function for all letters

const btnForAnimation = anime(playerAnimation)

const playBtn = document.querySelector('#play')
const pauseBtn = document.querySelector('#pause')
const stopBtn = document.querySelector('#stop')

playBtn.addEventListener('click', btnForAnimation.play)
pauseBtn.addEventListener('click', btnForAnimation.pause)
stopBtn.addEventListener('click', function () {

    btnForAnimation.restart()
    btnForAnimation.pause()


})
const btnForAnimationPl1 =anime(pl1Animation)

playBtn.addEventListener('click', btnForAnimationPl1.play)
pauseBtn.addEventListener('click', btnForAnimationPl1.pause)
stopBtn.addEventListener('click', function () {

    btnForAnimation.restart()
    btnForAnimation.pause()


})

const btnForAnimationPl2 =anime(pl2Animation)

playBtn.addEventListener('click', btnForAnimationPl2.play)
pauseBtn.addEventListener('click', btnForAnimationPl2.pause)
stopBtn.addEventListener('click', function () {

    btnForAnimation.restart()
    btnForAnimation.pause()


})

const btnForAnimationPl3 =anime(pl3Animation)

playBtn.addEventListener('click', btnForAnimationPl3.play)
pauseBtn.addEventListener('click', btnForAnimationPl3.pause)
stopBtn.addEventListener('click', function () {

    btnForAnimation.restart()
    btnForAnimation.pause()


})

const btnForAnimationPl4 =anime(pl4Animation)

playBtn.addEventListener('click', btnForAnimationPl4.play)
pauseBtn.addEventListener('click', btnForAnimationPl4.pause)
stopBtn.addEventListener('click', function () {

    btnForAnimation.restart()
    btnForAnimation.pause()


})

const btnForAnimationPl5 =anime(pl5Animation)

playBtn.addEventListener('click', btnForAnimationPl5.play)
pauseBtn.addEventListener('click', btnForAnimationPl5.pause)
stopBtn.addEventListener('click', function () {

    btnForAnimation.restart()
    btnForAnimation.pause()


})






