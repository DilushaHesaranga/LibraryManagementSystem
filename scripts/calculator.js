let btn = document.getElementById("calcBtn");

function calculate(){
    document.getElementById("right").style.display = "block";
    let age = document.getElementById("age");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let select = document.getElementById("activity");
    let gender;
    let bmr;
    let tdee;
    let calories;
    let factor;

    if (male.checked==true) {
        gender="male";
    }
    else{
        gender="female";
    }


    //BMR calculation
    if (gender=="male") {
        bmr=10 * weight.value + 6.25 * height.value - 5 * age.value + 5
        document.getElementById("out-bmr").innerHTML=bmr;
    }
    else{
        bmr=10 * weight.value + 6.25 * height.value - 5 * age.value -161
        document.getElementById("out-bmr").innerHTML=bmr;
    }

    //TDEE calculation
    if(select.value=="sedentary"){
        factor=1.2;
        tdee=bmr*factor;
        document.getElementById("out-tdee").innerHTML=tdee;
    }
    else if(select.value=="light"){
        factor=1.375;
        tdee=bmr*factor;
        document.getElementById("out-tdee").innerHTML=tdee;
    }
    else if(select.value=="moderate"){
        factor=1.55;
        tdee=bmr*factor;
        document.getElementById("out-tdee").innerHTML=tdee;
    }
    else if(select.value=="very"){
        factor=1.725;
        tdee=bmr*factor;
        document.getElementById("out-tdee").innerHTML=tdee;
    }
    else if(select.value=="athlete"){
        factor=1.725;
        tdee=bmr*factor;
        document.getElementById("out-tdee").innerHTML=tdee;
    }
    else {
        factor=0;
        tdee=bmr*factor;
        document.getElementById("out-tdee").innerHTML=tdee;
    }
    
    //calorie calculation
    let carbs = (tdee*0.5)/4;
    let protein = (tdee*0.3)/4;
    let fats = (tdee*0.2)/9;
    document.getElementById("out-protein").innerHTML=parseInt(protein);
    document.getElementById("out-carbs").innerHTML=parseInt(carbs);
    document.getElementById("out-fat").innerHTML=parseInt(fats);
    document.getElementById("out-calories").innerHTML=parseInt((protein*4)+(carbs*4)+(fats*9));

    let totalCalories = (protein*4) + (carbs*4) + (fats*9);
    let proteinPct = ((protein*4) / totalCalories) * 100;
    let carbsPct   = ((carbs*4) / totalCalories) * 100;
    let fatPct     = ((fats*9) / totalCalories) * 100;

    document.getElementById("out-calories").innerHTML = parseInt(totalCalories);

    document.getElementById("bar-protein").style.width = proteinPct + "%";
    document.getElementById("bar-carbs").style.width = carbsPct + "%";
    document.getElementById("bar-fat").style.width = fatPct + "%";
}
btn.addEventListener("click",calculate);