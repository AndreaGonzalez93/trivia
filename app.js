let name = '';
let respuestasCorrectas=0;
let respuestasIncorrectas=0;

// Mensaje de bienvenida
document.getElementById('bienvenida').style.display = 'none';
document.getElementById("resultado").style.display = 'none';
document.getElementById("alert-name").style.display = 'none';

// Ocultar bloque preguntas en ingles
document.getElementById('trivia-ingles').style.display = 'none';
document.getElementById('question-one-i').style.display = 'none';
document.getElementById('question-two-i').style.display = 'none';
document.getElementById('question-three-i').style.display = 'none';
document.getElementById('question1inglish').style.display = 'none';
document.getElementById('question2inglish').style.display = 'none';
document.getElementById('question3inglish').style.display = 'none';
// Ocultar bloque preguntas en frances
document.getElementById('trivia-frances').style.display = 'none';
document.getElementById('question-one-p').style.display = 'none';
document.getElementById('question-two-p').style.display = 'none';
document.getElementById('question-three-p').style.display = 'none';
document.getElementById('question1frances').style.display = 'none';
document.getElementById('question2frances').style.display = 'none';
document.getElementById('question3frances').style.display = 'none';


// Evaluar si se ingreso el nombre
function sub() {
    name = document.getElementById("nombre").value;
    if (name === '') {
     document.getElementById('alert-name').style.display = 'block';
    } else {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('bienvenida').style.display = 'block';
        document.getElementById('saludo').innerHTML = `Hola ${name}!`;
    }
}

//preguntas de Ingles
function triviaInglish() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('trivia-ingles').style.display = 'block';
    document.getElementById('question-one-i').style.display = 'block';
}

function evaluarPreguntaUnoI() {
    let respuestaPreguntaUnoISeleccionada = document.querySelector('input[name=pregunta1]:checked');
    
    if(respuestaPreguntaUnoISeleccionada === null){
        document.getElementById('question1inglish').style.display = 'block';
    }else{
        let respuestaPreguntaUnoIValor = document.querySelector('input[name=pregunta1]:checked').value;

        if(respuestaPreguntaUnoIValor === 'house'){
            respuestasCorrectas = respuestasCorrectas + 1;
        }else{
            respuestasIncorrectas = respuestasIncorrectas + 1;
        }

        document.getElementById('question-one-i').style.display = 'none';
        document.getElementById('question-two-i').style.display = 'block';
    }
}

function evaluarPreguntaDosI() {
    let respuestaPreguntaDosISeleccionada = document.querySelector('input[name=pregunta2]:checked');
    
    if(respuestaPreguntaDosISeleccionada === null){
        document.getElementById('question2inglish').style.display = 'block';
    }else{
        let respuestaPreguntaDosIValor = document.querySelector('input[name=pregunta2]:checked').value;

        if(respuestaPreguntaDosIValor === 'dog'){
            respuestasCorrectas = respuestasCorrectas + 1;
        }else{
            respuestasIncorrectas = respuestasIncorrectas + 1;
        }
        document.getElementById('question-two-i').style.display = 'none';
        document.getElementById('question-three-i').style.display = 'block';
    }
}

function evaluarPreguntaTresI() {
    let respuestaPreguntaTresISeleccionada = document.querySelector('input[name=pregunta3]:checked');
    
    if(respuestaPreguntaTresISeleccionada === null){
        document.getElementById('question3inglish').style.display = 'block';
    }else{
        let respuestaPreguntaTresIValor = document.querySelector('input[name=pregunta3]:checked').value;

        if(respuestaPreguntaTresIValor === 'window'){
            respuestasCorrectas = respuestasCorrectas + 1;
        }else{
            respuestasIncorrectas = respuestasIncorrectas + 1;
        }

        resultado();
    }
}

//preguntas de frances
function triviaFrances() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('trivia-frances').style.display = 'block';
    document.getElementById('question-one-p').style.display = 'block';
}

function evaluarPreguntaUnoP() {
    let respuestaPreguntaUnoPSeleccionada = document.querySelector('input[name=pregunta1]:checked');
    
    if(respuestaPreguntaUnoPSeleccionada === null){
        document.getElementById('question1frances').style.display = 'block';
    }else{
        let respuestaPreguntaUnoPValor = document.querySelector('input[name=pregunta1]:checked').value;

        if(respuestaPreguntaUnoPValor === 'maison'){
            respuestasCorrectas = respuestasCorrectas + 1;
        }else{
            respuestasIncorrectas = respuestasIncorrectas + 1;
        }

        document.getElementById('question-one-p').style.display = 'none';
        document.getElementById('question-two-p').style.display = 'block';
    }
}

function evaluarPreguntaDosP() {
    let respuestaPreguntaDosPSeleccionada = document.querySelector('input[name=pregunta2]:checked');
    
    if(respuestaPreguntaDosPSeleccionada === null){
        document.getElementById('question2frances').style.display = 'block';
    }else{
        let respuestaPreguntaDosPValor = document.querySelector('input[name=pregunta2]:checked').value;

        if(respuestaPreguntaDosPValor === 'chien'){
            respuestasCorrectas = respuestasCorrectas + 1;
        }else{
            respuestasIncorrectas = respuestasIncorrectas + 1;
        }

        document.getElementById('question-two-p').style.display = 'none';
        document.getElementById('question-three-p').style.display = 'block';
    }
}

function evaluarPreguntaTresP() {
    let respuestaPreguntaTresPSeleccionada = document.querySelector('input[name=pregunta3]:checked');
    
    if(respuestaPreguntaTresPSeleccionada === null){
        document.getElementById('question3frances').style.display = 'block';
    }else{
        let respuestaPreguntaTresPValor = document.querySelector('input[name=pregunta3]:checked').value;

        if(respuestaPreguntaTresPValor === 'chat'){
            respuestasCorrectas = respuestasCorrectas + 1;
        }else{
            respuestasIncorrectas = respuestasIncorrectas + 1;
        }

        resultado();
    }
}

// Mostar resultado de trivia
function resultado() {
    document.getElementById('question-three-i').style.display = 'none';
    document.getElementById('question-three-p').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado-correctas').innerHTML=`Correctas ${respuestasCorrectas}`;
    document.getElementById('resultado-incorrectas').innerHTML=`Incorrectas ${respuestasIncorrectas}`;
}

// botones para volver a empezar trivia
function goToIngles() {
    respuestasCorrectas=0;
    respuestasIncorrectas=0;
    document.getElementById('resultado').style.display = 'none';
    triviaInglish();
}

function goToFrances() {
    respuestasCorrectas=0;
    respuestasIncorrectas=0;
    document.getElementById('resultado').style.display = 'none';
    triviaFrances()
}