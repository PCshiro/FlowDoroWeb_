//Enfoque
let minutos_enfoque = 120;
let segundos_enfoque = 0;
let bandera_enfoque =1;
let count_enfoque =0;
let identificador_temporizador_enfoque;

//Descanso
let minutos_descanso = 60;
let segundos_descanso = 0;
let bandera_descanso =1;
let count_descanso =0;
let identificador_temporizador_descanso;

let estado=1;

const correEnfoque = ()=>{
    segundos_enfoque--;

    if(segundos_enfoque<=0){
        segundos_enfoque = 0;
        if(minutos_enfoque===0){
            clearInterval(identificador_temporizador_enfoque);
            // un timbrecito
        }else{
            segundos_enfoque=59;       
            minutos_enfoque--; 
        }  
    }
    if(minutos_enfoque===0){
        bandera_enfoque=0;
    }
    // como hacer que desaparesca un valor
    document.getElementById('first-number').innerHTML = `${formatoHora(minutos_enfoque)}:${formatoHora(segundos_enfoque)}`;
}

const correDescanso = ()=>{
    segundos_descanso--;

    if(segundos_descanso<=0){
        segundos_descanso=0;
        if(minutos_descanso===0){
            bandera_descanso=0;
            clearInterval(identificador_temporizador_descanso);
        }else{
            segundos_descanso=59;
            minutos_descanso--;
        }
    }

    if(minutos_descanso===0){
        bandera_descanso=0;
    }
    // como hacer que desaparesca un valor
    document.getElementById('last-number').innerHTML = `${formatoHora(minutos_descanso)}:${formatoHora(segundos_descanso)}`;
}

const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;    
}
/*
document.getElementById('play_focus').addEventListener('click',play_focus);
function play_focus(event){
    estado++;
    console.log(estado);
    analiza_estado(estado);
}

document.getElementById('play_break').addEventListener('click',play_break);
function play_break(event){
    estado=3;
    console.log(estado);
    analiza_estado(estado);
}*/

const analiza_estado = (estado)=>{
    //pause
    console.log(estado);
    if(estado===1){
        
    }
    //focus_play
    if(estado===2 ){
        //cambiar a pause icon
            
            identificador_temporizador_enfoque = setInterval(correEnfoque, 1000);
        
    }
    //pause
    if(estado===3 ){

            clearInterval(identificador_temporizador_enfoque);
            identificador_temporizador_descanso = setInterval(correDescanso, 1000);
        
    }
    if(estado===4){
        clearInterval(identificador_temporizador_descanso);
        analiza_estado(2);
    }
}
