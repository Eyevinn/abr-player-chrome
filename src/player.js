function setControllerHeight() {
  var videoElement = document.getElementsByClassName('eyevinn-player')[0];
  var style = window.getComputedStyle(videoElement, null);
  var videoHeight = style.getPropertyValue('height').split('px')[0];
  var controller = document.getElementsByClassName('player-controller')[0];
  controller.style.height = (videoHeight * 0.15) + 'px';
}

document.addEventListener('DOMContentLoaded', function(event) {  
  var url = window.location.href.split("#")[1];
  setupEyevinnPlayer('player-wrapper', url).then(function(player) {
    window.addEventListener('resize', function(event) {
      setControllerHeight();
    });
    setControllerHeight();
    muteOnStart = false;
    player.play(muteOnStart);    
  });
});