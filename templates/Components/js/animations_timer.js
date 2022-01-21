//*Variables
const userName = document.querySelector("#username")
const btnUser = document.querySelector(".icon-down");
const div = document.querySelector(".timer--opacity");
const firstDiv = document.querySelector(".no--opacity");
const container1 = document.querySelector("#container-1");
const container2 = document.querySelector("#container-2");
const firstNumber = document.querySelector("#first-number"); 
const lastNumber = document.querySelector("#last-number");
const btnPauseFirst = document.querySelector("#btnPauseFirst");
const btnPlay1 = document.querySelector("#btnPlay1");
const btnPause2 = document.querySelector("#btnPause2");
const btnPlay2 = document.querySelector("#btnPlay2");

const tomatos = document.querySelectorAll(".pomodoro-icon--task");
//EVENTLISTENERS//
eventListener()
function eventListener(){
    
    btnPlay1.addEventListener("click" , ()=>{
        btnPlay1.style.display = "none";
        btnPauseFirst.style.display = "block";
        analiza_estado(2);
    }); 

    btnPauseFirst.addEventListener("click",  ()=>{
        btnPlay1.style.display = "block";
        btnPauseFirst.style.display = "none";
        btnPause2.style.display = "block";
        btnPlay2.style.display = "none";
        setAnimation();    
        analiza_estado(3);
    });

    btnPlay2.addEventListener("click" , ()=>{
        btnPlay2.style.display = "block";
    });

    btnPause2.addEventListener("click", ()=>{
        btnPause2.style.display = "none"; 
        btnPlay2.style.display = "block"; 
        btnPlay1.style.display = "none";
        btnPauseFirst.style.display = "block";
        setAnimation();
        analiza_estado(4);
    });

    /*ANIMACION USUARIO*/
    userName.addEventListener("click" , e=>{
        e.preventDefault();
        if(btnUser.classList.contains("icon-down")){
            btnUser.classList.remove("icon-down")
            btnUser.classList.add("icon-transform");
        }else{
            btnUser.classList.remove("icon-transform")
            btnUser.classList.add("icon-down");
        }    
    })

    //*NIVELES TOMATES//
    tomatos.forEach((tomate , index)=>{
        tomate.addEventListener("click", ()=>{
            let nuevoIndex = index + 1;
            let position = 0;

            if(tomate.classList.contains("pomodoro-icon--nogray")){
                for( nuevoIndex; nuevoIndex < tomatos.length; nuevoIndex++){
                    tomatos[nuevoIndex].classList.remove("pomodoro-icon--nogray");
                }
                return; 
            } 
            else{
                while(position <= index){
                    tomatos[position].classList.add("pomodoro-icon--nogray");
                    position++;
                }
            }
        })    
    })

    document.querySelector("#icon-yellow").addEventListener("click", e=>{
        e.preventDefault()
        document.querySelector("#formulario").classList.toggle("form--active")
    })

}

//fUNCION ANIMATION CON CLASES CSS--timer//
function setAnimation(){
    if(container1.classList.contains("disabled")){
        container1.classList.remove("disabled");
        container1.classList.remove("timer-container--max-width");
        lastNumber.classList.remove("first-time");
        container1.classList.remove("order1");
        container2.classList.add("disabled");
        firstNumber.classList.add("first-time");
        container2.classList.add("timer-container--max-width");
    }else{
        firstNumber.classList.remove("first-time");
        container2.classList.remove("disabled")
        container2.classList.remove("timer-container--max-width");
        container1.classList.add("disabled");
        container1.classList.add("timer-container--max-width");
        lastNumber.classList.add("first-time");
        container1.classList.add("order1");
    }
}