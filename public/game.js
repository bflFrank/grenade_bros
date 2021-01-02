/* exported Game */
class Game{
  constructor(options){
    this.start_time;
    this.frame = 0;
    this.id = options.id;
    this.keys_held = [];
    this.socket = options.socket;
    this.valid_codes = [87, 65, 68, 38, 37, 39];
  }
  keydown(event){
    if(!this.valid_codes.includes(event.keyCode)) return;
    if(this.keys_held.includes(event.keyCode)) return;
    const direction = this.keytranslate(event.keyCode);
    this.keys_held.push(direction);
    this.socket.emit("keydown", {direction: direction, id: this.id});
  }
  keyup(event){
    if(!this.valid_codes.includes(event.keyCode)) return;
    const direction = this.keytranslate(event.keyCode);
    this.keys_held = this.keys_held.filter(element => element != direction);
    this.socket.emit("keyup", {direction: direction, id: this.id});
  }
  keytranslate(keyCode){
    switch(keyCode){
      case 65:
      case 37:
        return "left";
      case 68:
      case 39:
        return "right";
      case 32:
      case 87:
      case 38:
        return "jump";
    }
  }
}