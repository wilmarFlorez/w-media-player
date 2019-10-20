import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const button = document.querySelector('button')
const toggleMute = document.querySelector('#toggleMute')

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
})

button.onclick = () => player.togglePlay()
toggleMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(error => {
    console.log('Error', error.message)
  })
}
