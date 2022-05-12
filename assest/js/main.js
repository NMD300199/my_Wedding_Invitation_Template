var myBtn = document.querySelector('.rsvp-btn');
var myBox = document.querySelector('.come');
var myExit = document.querySelectorAll('.box-btn')
myBtn.onclick = function() {
    myBox.classList.remove('close')
}

for (var i = 0; i < myExit.length; i++) {
    myExit[i].onclick = function() {
        myBox.classList.add('close')
    }
}