const exercises= [
{ "type": "arms", "title": "bicep curls", "wtype": "with-equipment" },
{ "type": "arms", "title": "hammer curls (dumbbells)", "wtype": "with-equipment" },
{ "type": "arms", "title": "tricep rope pushdowns", "wtype": "with-equipment" },
{ "type": "arms", "title": "skull crushers (EZ bar)", "wtype": "with-equipment" },

{ "type": "arms", "title": "diamond push-ups", "wtype": "without-equipment" },
{ "type": "arms", "title": "close-grip push-ups", "wtype": "without-equipment" },
{ "type": "arms", "title": "pike push-ups", "wtype": "without-equipment" },
{ "type": "arms", "title": "isometric bicep hold (palms press)", "wtype": "without-equipment" },

{ "type": "legs", "title": "goblet squats (dumbbell/kettlebell)", "wtype": "with-equipment" },
{ "type": "legs", "title": "Romanian deadlifts (barbell)", "wtype": "with-equipment" },
{ "type": "legs", "title": "walking lunges (dumbbells)", "wtype": "with-equipment" },
{ "type": "legs", "title": "leg press (machine)", "wtype": "with-equipment" },

{ "type": "legs", "title": "bodyweight squats", "wtype": "without-equipment" },
{ "type": "legs", "title": "reverse lunges", "wtype": "without-equipment" },
{ "type": "legs", "title": "glute bridges", "wtype": "without-equipment" },
{ "type": "legs", "title": "wall sit", "wtype": "without-equipment" },

{ "type": "fullbody", "title": "kettlebell swings", "wtype": "with-equipment" },
{ "type": "fullbody", "title": "dumbbell thrusters", "wtype": "with-equipment" },
{ "type": "fullbody", "title": "barbell deadlift", "wtype": "with-equipment" },
{ "type": "fullbody", "title": "renegade rows (dumbbells)", "wtype": "with-equipment" },

{ "type": "fullbody", "title": "burpees", "wtype": "without-equipment" },
{ "type": "fullbody", "title": "mountain climbers", "wtype": "without-equipment" },
{ "type": "fullbody", "title": "jump squats + push-up combo", "wtype": "without-equipment" },
{ "type": "fullbody", "title": "bear crawl", "wtype": "without-equipment" }
];
let wtype = document.getElementById("wtype");
let weight = document.getElementById("weight");
let generate = document.getElementById("generate");
let w;
let bodypart;
let workoutlist=[];
function workout(){
    if(wtype.value=="arms"){
        bodypart = "arms";
        if(weight.value=="with-equipment"){
             w = "with-equipment";
            for (let index = 0; index < exercises.length; index++) {
                let data = exercises[index];
                if (data.type==bodypart && data.wtype==w) {
                    workoutlist.push(data.title)
                }
                
            }
        }
        else if(weight.value=="without-equipment"){
             w = "without-equipment";
            for (let index = 0; index < exercises.length; index++) {
                 data = exercises[index];
                if (data.type==bodypart && data.wtype==w) {
                    workoutlist.push(data.title)
                }
            }
        }
    }
    else if(wtype.value=="legs"){
        bodypart = "legs";
        if(weight.value=="with-equipment"){
             w = "with-equipment";
            for (let index = 0; index < exercises.length; index++) {
                let data = exercises[index];
                if (data.type==bodypart && data.wtype==w) {
                    workoutlist.push(data.title)
                }
                
            }
        }
        else if(weight.value=="without-equipment"){
             w = "without-equipment";
            for (let index = 0; index < exercises.length; index++) {
                 data = exercises[index];
                if (data.type==bodypart && data.wtype==w) {
                   workoutlist.push(data.title)
                }
            }
        }
    }
    else if(wtype.value=="fullbody"){
        bodypart = "fullbody";
        if(weight.value=="with-equipment"){
             w = "with-equipment";
            for (let index = 0; index < exercises.length; index++) {
                let data = exercises[index];
                if (data.type==bodypart && data.wtype==w) {
                    console.log(data.title);
                }
                
            }
        }
        else if(weight.value=="without-equipment"){
             w = "without-equipment";
            for (let index = 0; index < exercises.length; index++) {
                 data = exercises[index];
                if (data.type==bodypart && data.wtype==w) {
                    console.log(data.title);
                }
            }
        }
    }

    const container = document.getElementById("wresult");
    if (!container) return;

    container.style.display = "block";
    

    const card = document.createElement("div");
    card.className = "workout";


    for (let i = 0; i < workoutlist.length; i++) {
        card.innerHTML += `<p>${workoutlist[i]}</p>`;
    }

    container.appendChild(card); 
    
}

generate.addEventListener("click",workout);