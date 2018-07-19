import { Howl } from 'howler';

let timeoutId;
let howl;
let lastEvents;

const start = (Sound, Events) => {
  /* https://www.npmjs.com/package/howler */
  howl = new Howl({ src: [Sound], html5: true });
  Events.map(event => document.addEventListener(event, keyDown, false));
  lastEvents = Events;
};

const timeoutToPause = _ => {
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

const clear = _ => {
  if (Array.isArray(lastEvents)) lastEvents.map(event => document.removeEventListener(event, keyDown));
  lastEvents = null;
};

const aquidauana = (Sound = './guitarra.mp3', Events = ['keydown', 'mousemove', 'scroll', 'click']) => {
  if (!document) {
    throw 'add this in document html';
  }
  clear();
  start(Sound, Events);
};

aquidauana.clear = clear;

window.aquidauana = aquidauana;