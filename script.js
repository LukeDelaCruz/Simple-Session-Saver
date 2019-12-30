var button = document.querySelector("button");
var preClickLock = document.getElementById("preClickLock");
var postClickLock = document.getElementById("postClickLock");

// The function relies on the fact that the message was hidden from the outset.
//A removeEventListener was used on a handler because {once:true} is not
//yet supported by some browsers.
button.addEventListener("click", function handler(e){
  e.currentTarget.removeEventListener(e.type, handler);
  document.getElementById('message').classList.remove('messageConcealer');
  document.getElementById('message').classList.add('messageDisp');
  document.querySelectorAll('button')[0].classList.remove('unsafe')
  document.querySelectorAll('button')[0].classList.add('safe');
  button.removeChild(preClickLock);
  document.querySelector("span").classList.remove('unlocked');
  button.appendChild(postClickLock);
});

window.onbeforeunload = confirmExit;
function confirmExit() {
    return "Is your session over?";
}
