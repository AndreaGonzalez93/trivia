    let name = '';
    let respuestasCorrectas=0;
    let respuestasIncorrectas=0;
    // Lista de respuestas para cada idioma
    let respuestasIngles=['house', 'dog', 'window'];
    let respuestasFrances=['maison', 'chien', 'chat'];

    // Funcion para simplificar la llamada de los IDs
    // Recibe un nombre de id
    function _id(id){
        return document.getElementById(id);
    }

    // Funcion para mostrar u ocultar elementos
    // Recibe un estado (none, block) y una lista de IDs a trabajar
    function showHide(state, list){
        list.forEach(element => {
            _id(element).style.display=state;
        });
    }

    // Reinicia la trivia del idioma seleccionado
    function showTrivia(idioma){
        respuestasCorrectas=0;
        respuestasIncorrectas=0;
        showHide('none',['bienvenida']);
        if(idioma === 'ingles'){
            showHide('block',['trivia-ingles', 'pregunta-ingles-1']);
        }else{
            showHide('block',['trivia-frances', 'pregunta-frances-1']);
        }
    }

    // Muestra el bloque de resultado
    function resultado() {
        showHide('none',['pregunta-ingles-3', 'pregunta-frances-3']);
        showHide('block',['resultado']);
        _id('resultado-correctas').innerHTML=`Correctas ${respuestasCorrectas}`;
        _id('resultado-incorrectas').innerHTML=`Incorrectas ${respuestasIncorrectas}`;
    }

    // Verifica si el checkbox esta seleccionado
    function checked(item){
        return document.querySelector(`input[name=pregunta${item}]:checked`) ? document.querySelector(`input[name=pregunta${item}]:checked`).value : null;
    }

    // Oculta todos los bloques que no son necesarios en un principio
    showHide('none',[
        'bienvenida', 'resultado', 'alert-name', 'alert-null',
        'trivia-ingles', 'pregunta-ingles-1', 'pregunta-ingles-2', 'pregunta-ingles-3',
        'trivia-frances', 'pregunta-frances-1', 'pregunta-frances-2', 'pregunta-frances-3'
    ]);

    // Evalua si se ingreso el nombre
    function sub() {
        name = _id('nombre').value;
        if (name === '') {
            showHide('block', ['alert-name']);
        } else {
            showHide('none', ['inicio']);
            showHide('block', ['bienvenida']);
            _id('saludo').innerHTML = `Hola ${name}!`;
        }
    }

    // Verifica si la respuesta es correcta
    // Rcibe el idioma y el checkbox
    function evaluateQuestion(idioma, item){
        if(checked(item) === null){
            showHide('block', ['alert-null']);
        }else{
            switch(idioma){
                case 'ingles':
                    if(checked(item) === respuestasIngles[item-1]){
                        respuestasCorrectas++;
                    }else{
                        respuestasIncorrectas++;
                    }
                case 'frances':
                    if(checked(item) === respuestasFrances[item-1]){
                        respuestasCorrectas++;
                    }else{
                        respuestasIncorrectas++;
                    }
                default:
                    break;
            }
            if(item<3){
                showHide('none', [`pregunta-${idioma}-${item}`]);
                showHide('block', [`pregunta-${idioma}-${item+1}`]);
            }else{
                resultado();
            }
        }
    }
    
    window.onload = function() {
    // EJEMPLO EVENLISTENER
    _id('guardar-nombre').addEventListener('click', sub);

    _id('btn-trivia-ingles').addEventListener('click', showTrivia('ingles'));
    _id('btn-trivia-frances').addEventListener('click', showTrivia('frances'));

    _id('btn-reset-ingles').addEventListener('click', showTrivia('ingles'));
    _id('btn-reset-frances').addEventListener('click', showTrivia('frances'));

    _id('btn-pregunta-ingles-1').addEventListener('click', evaluateQuestion('ingles', 1));
    _id('btn-pregunta-ingles-2').addEventListener('click', evaluateQuestion('ingles', 2));
    _id('btn-pregunta-ingles-3').addEventListener('click', evaluateQuestion('ingles', 3));

    _id('btn-pregunta-frances-1').addEventListener('click', evaluateQuestion('frances', 1));
    _id('btn-pregunta-frances-2').addEventListener('click', evaluateQuestion('frances', 2));
    _id('btn-pregunta-frances-3').addEventListener('click', evaluateQuestion('frances', 3));
}