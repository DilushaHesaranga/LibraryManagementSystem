let questions = document.querySelectorAll(".faqcontent");
let answers = document.querySelectorAll(".answer");
let q = document.querySelectorAll('.question');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
        if (answers[i].style.display === "none" || answers[i].style.display === "") {
            answers[i].style.display = "block";
            q[i].style.borderBottom = "1px solid black";
        } else {
            answers[i].style.display = "none";
            q[i].style.borderBottom = "0";
        }
    });
} 
let fname =document.getElementById("fname");
let lname =document.getElementById("lname");
let email =document.getElementById("email");
let msg = document.getElementById("mgs");
let button = document.getElementById("btn")
function adddata(e){
    e.preventDefault();
    userdata = {
        userfname:fname.value,
        userlname:lname.value,
        useremail:email.value,
        usermsg:msg.value,
    }
    localStorage.setItem("data",JSON.stringify(userdata))
}


button.addEventListener("click",adddata);
