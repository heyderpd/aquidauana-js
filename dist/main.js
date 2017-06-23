import { Howl } from 'howler';

(() => {
  if (document) {
    let timeoutId;
    let howl;

    const start = () => {
      /* https://www.npmjs.com/package/howler */
      howl = new Howl({ src: ['./guitarra.mp3'], html5: true });
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

    document.addEventListener('keydown', keyDown, false);

    start();
  } else {
    throw 'add this in document html';
  }
})();