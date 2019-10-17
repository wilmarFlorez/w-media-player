import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const button = document.querySelector('button')
const toggleMute = document.querySelector('#toggleMute')

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()],
})

button.onclick = () => player.togglePlay()
toggleMute.onclick = () => player.toggleMute()
