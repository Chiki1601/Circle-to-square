//Video tute here https://www.instagram.com/p/CZtzuQmgl4n/
let animationWindow = document.querySelector('#animationWindow');
let anim = lottie.loadAnimation({
  container: animationWindow, 
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/dragger_test.json' 
});

anim.addEventListener('DOMLoaded', onDOMLoaded);

function onDOMLoaded () {
 let maxDrag = 520;
 let draggerPos = gsap.getProperty('.dragger');
 let maxFrames = anim.totalFrames;
 Draggable.create('.dragger', {
  type: 'x',
  bounds: { minX: 0, maxX: maxDrag},
  onDrag: () => {
   let currentFrame = Math.round((draggerPos('x') / maxDrag) * maxFrames);
   anim.goToAndStop(currentFrame, true);
  }
 })
}