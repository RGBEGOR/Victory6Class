
let banderas = ["Неа.jpg", "Па.jpg", "Неол.jpg", "Мезо.jpg", "Альта.jpg","Теш.jpg","Соб.jpg","Патр.jpg","Археолог.jpg","Антроп.jpg",
"Кром.png","Медь.png","Прис.jpg","Оогонь.jpg","Собак.jpg","Хомо.jpg"];

let correcta = [0,2,1,1,0,0,2,1,0,0,1,2,0,1,0,0,0,1,2,0,1,2,0,1];

let opciones = [];

opciones.push(["Неандрталец", "Питекантроп", "Кроманьонец"]);
opciones.push(["Медный век", "Неолит", "Палеолит"]);
opciones.push(["Палеолит", "Энеолит", "Неолит "]);
opciones.push(["Палеолит", "Мезолит", "Неолит"]);
opciones.push(["Альтамира", "Ласко", "Капова пещера"]);
opciones.push(["Тешик-таш", "Олдувай", "Капова пещера"]);
opciones.push(["Охота", "Поедание яблок", "Собирательство"]);
opciones.push(["Матрирхат", "Патриархат", "Аристократ"]);
opciones.push(["Археология", "Антропология", "Этнология"]);
opciones.push(["Антропологи", "Археологи", "Сфрагистики"]);
opciones.push(["Зинджантроп", "Кроманьонец", "Австралопитек"]);
opciones.push(["Мезолит", "Железный век", "Энеолит"]);
opciones.push(["присваивающее хозяйство ", "Охота", " Пикник"]);
opciones.push(["Ранний палеолит", "Средний палеолит", "Мезозойская эра"]);
opciones.push(["Верно", "Неверно", "не знаю"]);
opciones.push(["Хомасапиенс", "хомохубилис", "глупый чел"]);


let posActual = 0;
let cantidadAcertadas = 0;
function comenzarJuego(){

    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

function cargarBandera(){

    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){

    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

