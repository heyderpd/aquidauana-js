import { Howl } from 'howler'

const aquidauana = (sound = './guitarra.mp3') => {
  if (document) {
    let timeoutId
    let howl

    const start = () => {
      /* https://www.npmjs.com/package/howler */
      howl = new Howl({ src: [sound], html5: true })
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

    document.addEventListener('keydown', keyDown, false)

    start()
  } else {
    throw 'add this in document html'
  }
}

window.aquidauana = aquidauana
aquidauana()
