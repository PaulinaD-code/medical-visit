const clock = document.querySelector('.clock-js');

setInterval(function(){
  let shield = new Date();


let htmlElement = `
${shield.getHours()}:
${shield.getMinutes()}:
${shield.getSeconds()}
`
clock.innerHTML = htmlElement;
}, 1000)





