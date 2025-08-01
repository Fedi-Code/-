window.onload = function () {
    const btn = document.getElementById('aa');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('rainbow');
        localStorage.setItem('rainbowMode', document.body.classList.contains('rainbow'));
    });

    if (localStorage.getItem('rainbowMode') === 'false') {
        document.body.classList.add('rainbow');
    }
    const audio = new Audio();
    audio.src = "";

    const submitAudio = new Audio();    
    audio.src = "";

    const sub = document.getElementById("submit-button");
    sub.onclick = function () {
        window.alert('Registration Succeed !')
    }
    let fruit = "Ananas"
    console.log(fruit)
    if (fruit === "Ananas"){
    console.log("its the right fruit");
    }

    else {
    console.log("wtf?");
    }

};

