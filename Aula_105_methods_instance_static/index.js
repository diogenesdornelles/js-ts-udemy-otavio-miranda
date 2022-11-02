class RemoteControl {
  
  constructor(device){
    this.device = device;
    this.volume = 10;
    this.channel = 15;
  }

  turnUpVolume(){
    this.volume += 2;
  }

  turnDownVolume(){
    this.volume -= 2;
  }

  static changeBatery(){ // Only acessible by class.
    return 'Changed...';
  }

  static getData(){
    const time = new Date();
    return time.toLocaleDateString()
  }
}

const control1 = new RemoteControl('LGTV');
control1.turnUpVolume();
console.log(control1);
console.log(RemoteControl.changeBatery());
console.log(RemoteControl.getData());
