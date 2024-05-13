document.getElementById('mouth').addEventListener('input', function(){
    if (parseInt(this.value) > 12){
        this.value = 12;
    }
})

document.getElementById('week').addEventListener('input', function(){
    if (parseInt(this.value) > 4){
        this.value = 4;
    }
})

document.getElementById('number').addEventListener('input', function(){
    if (parseInt(this.value) < 5){
        this.value = 5;
    }
    else if (parseInt(this.value) > 10){
        this.value = 10;
    }
})

const boxColor = document.getElementById('boxColor');

document.getElementById('color').addEventListener('input', function(){
    document.body.style.backgroundColor = this.value;
    boxColor.style.backgroundColor = this.value;
});

