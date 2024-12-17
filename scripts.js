const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/120))
  );
};

const displayScrollElement = (element) => {
  element.style.opacity = 1;
  ;}

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  })
}

//Función throttle para optimizar rendimiento
//initialize throttleTimer as false
let throttleTimer = false;
const throttle = (callback, time) => {

    //don't run the function while throttle timer is true
    if (throttleTimer) return;

    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;
    setTimeout(() => {

        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
        callback();
        throttleTimer = false;
	}, time);

}

window.addEventListener('scroll', () => {
  throttle(handleScrollAnimation, 250);
})

const avatar = document.getElementById("bio__avatar");
const heart = document.getElementById("bio__heart");


function showAvatar(elem) {
  elem.classList.add("bio__foto--tilted");
  avatar.classList.add("moveUp");
  heart.classList.add("moveUp");

  avatar.style.opacity = 1;
  heart.style.opacity = 1
  avatar.style.zIndex = "10";
  heart.style.zIndex = "10";
}

function throwHeart() {;
  heart.style.fontSize = "200px";
  setTimeout(() => {
    heart.style.fontSize = "40px"
  }, 100);
}