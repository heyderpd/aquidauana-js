import { Howl } from 'howler';

let timeoutId;
let howl;

const start = (Sound, Events) => {
  /* https://www.npmjs.com/package/howler */
  howl = new Howl({ src: [Sound], html5: true });
  Events.map(event => document.addEventListener(event, keyDown, false));
};

const timeoutToPause = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    howl.pause();
  }, 450);
};

const keyDown = e => {
  if (howl) {
    !howl.playing() && howl.play();
    timeoutToPause();
  }
};

const aquidauana = (Sound = './guitarra.mp3', Events = ['keydown', 'mousemove', 'scroll', 'click']) => {
  if (!document) {
    throw 'add this in document html';
  }
  start(Sound, Events);
};

window.aquidauana = aquidauana;