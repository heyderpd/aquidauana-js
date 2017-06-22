import { Howl } from 'howler'

(()=>{
  if (document) {
    const guitarra = {}

    const start = () => {
      /* https://www.npmjs.com/package/howler */
      guitarra.sound = new Howl({ src: ['./guitarra.mp3'], html5: true })
    }

    const createTimeout = () => {
      clearTimeout(guitarra.timeout)
      guitarra.timeout = setTimeout(() => {
        guitarra.sound.pause()
        clearTimeout(guitarra.timeout)
      }, 1200)
    }

    const keyDown = e => {
      if (guitarra.sound && !guitarra.sound.playing()){
        guitarra.sound.play()
        createTimeout()
      }
    }

    document.addEventListener('keydown', keyDown, false)

    start()
  } else {
    throw 'add this in document html'
  }
})()