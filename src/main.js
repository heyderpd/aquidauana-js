import { Howl } from 'howler'

let aquidauana
let timeoutId
let howl

const start = (sound) => {
  /* https://www.npmjs.com/package/howler */
  howl = new Howl({ src: [sound], html5: true })
  document.addEventListener('keydown', keyDown, false)
}

const timeoutToPause = () => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    howl.pause()
  }, 450)
}

const keyDown = e => {
  if (howl) {
    !howl.playing() && howl.play()
    timeoutToPause()
  }
}

(aquidauana = (sound = './guitarra.mp3') => {
  if (!document) {
    throw 'add this in document html'
  }
  start(sound)
})()

window.aquidauana = aquidauana
