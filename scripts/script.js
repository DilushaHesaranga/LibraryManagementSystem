const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

let tipblack = document.getElementById("tip1");
let date  = Date().trim().split(" ")[0].toLowerCase();
switch (date) {
  case "mon":
    tipblack.innerHTML = `“Start where you are. Use what you have. <span class="section2green tip2">Do what you can.</span>”`;
    break;
  case "tue":
    tipblack.innerHTML = `“Small steps every day build into <span class="section2green tip2">big changes.</span>”`;
    break;
  case "wed":
    tipblack.innerHTML = `“Your mind is a garden—your thoughts are the seeds. <span class="section2green tip2">Choose wisely.</span>”`;
    break;
  case "thu":
    tipblack.innerHTML = `“Breathe deeply. Peace begins with a single <span class="section2green tip2">inhalation.</span>”`;
    break;
  case "fri":
    tipblack.innerHTML = `“Energy flows where <span class="section2green tip2">attention</span> goes.”`;
    break;
  case "sat":
    tipblack.innerHTML = `“Rest is not wasted time; it’s how you <span class="section2green tip2">recharge.</span>”`;
    break;
  case "sun":
    tipblack.innerHTML = `“Gratitude turns what we have into <span class="section2green tip2">enough.</span>”`;
    break;
  default:
    tipblack.innerHTML = `“Take one small action today to support your <span class="section2green tip2">well-being.</span>”`;
    break;
}
    



burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

let emailadd = document.getElementById("footer-email");
let bnt = document.getElementById("sub");
function newsletter() {
   let msg = document.getElementById("newsletter-msg");
   msg.innerHTML = "Newsletter subscribed!!";
   emaildata={
    email:emailadd.value
   }
   localStorage.setItem("email",JSON.stringify(emaildata)); 
   alert("Thank you for subscribing to our newsletter!");
}
bnt.addEventListener("click",newsletter)