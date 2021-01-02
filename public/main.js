/* globals io, id, Game */
const socket = io();
let keys_held = [];
const game = new Game({id: id, socket: socket});

window.onkeydown = event => game.keydown(event);
window.onkeyup = event => game.keyup(event);