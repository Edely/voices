$(function(){
    
    var ctx = new AudioContext();

    var vol = ctx.createGain();
    vol.connect(ctx.destination);
    vol.gain.value = 0.001;

    var osc = ctx.createOscillator();
    osc.type = 'square';
    osc.connect(vol);
    osc.start();

});