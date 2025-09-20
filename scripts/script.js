const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

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