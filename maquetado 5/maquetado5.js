//Para Vencimiento

document.getElementById('diaVencimiento').addEventListener('input', function() {
    if (parseInt(this.value) > 31) {
        this.value = 31;
    }
});


document.getElementById('añoVencimiento').addEventListener('input', function() {
    if (parseInt(this.value) > new Date().getFullYear()) {
        this.value = new Date().getFullYear();
    }
});

// Para Emision

document.getElementById('diaEmision').addEventListener('input', function() {
    if (parseInt(this.value) > 31) {
        this.value = 31;
    }
});


document.getElementById('añoEmision').addEventListener('input', function() {
    if (parseInt(this.value) > new Date().getFullYear()) {
        this.value = new Date().getFullYear();
    }
});

// Para Nacimiento

document.getElementById('diaNacimiento').addEventListener('input', function() {
    if (parseInt(this.value) > 31) {
        this.value = 31;
    }
});


document.getElementById('añoNacimiento').addEventListener('input', function() {
    if (parseInt(this.value) > new Date().getFullYear()) {
        this.value = new Date().getFullYear();
    }
});