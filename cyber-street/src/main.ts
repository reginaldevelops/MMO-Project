import { Game } from './game'

const container = document.getElementById('app')
const hint = document.getElementById('hint')
const status = document.getElementById('status')
if (!container || !hint || !status) {
  throw new Error('Missing #app, #hint, or #status')
}

new Game(container, hint, status)
