let l = document.getElementById("l");
let s = document.getElementById("s");
function sig() {
  document.getElementById("b").classList.toggle("flip");
}
document.getElementById("login").onclick = function() {
  let user = document.getElementById("int1").value;
  let pass = document.getElementById("int2").value;
  function log() {
    l.innerHTML = `Don't have an account? <span id="ll" onclick="sig()">Sign up</span>`;
  }
  if(user === "" || pass === ""){
    l.textContent = "All fields are require 😳 "
    setTimeout( log, 3000)
  }else if (user.length < 3){
    l.textContent = "Username must be 3+"
    return
  }else if (pass.length < 4){
    l.textContent = "Password must be 4+"
    return
  }else{
    l.textContent = "Checking"
    l.classList.add("m")
      fetch("https://backend-js1e.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
      })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        l.classList.remove("m")
        l.textContent = "Login success ✔️"
        setTimeout( log, 1300)
        setTimeout(() => {
        window.location.href = "https://www.google.com"
          }, 1500)
        }else{
          l.classList.remove("m")
          l.textContent = data.message;
          setTimeout(log , 1300)
        }
      })
      .catch(err => {
        l.classList.remove("m")
        console.error(err);
        l.textContent = "Server error 😵";
        setTimeout( log, 1300)
      })  
  }
}
document.getElementById("sign").onclick = function() {
  function siggg() {
    s.innerHTML = `Already have an account? <span onclick="sig()">Login</span>`;
  }
  let userr = document.getElementById("int3").value;
  let passs = document.getElementById("int4").value;
  if(userr === "" || passs === ""){
    s.textContent = "All fields are require 😳 "
    setTimeout(siggg, 3000)
  }else if (userr.length < 3){
    s.textContent = "Username must be 3+"
    return
  }else if (passs.length < 4){
    s.textContent = "Password must be 4+"
    return
  }else{
    s.textContent = "Creating account"
    s.classList.add("n")
      fetch("https://backend-js1e.onrender.com/sign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: userr,
        password: passs
      })
      })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        s.classList.remove("n")
        s.textContent = "Sign Up success ✔️"
        setTimeout( siggg, 1300)
        setTimeout(() => {
        window.location.href = "https://www.google.com"
          }, 1500)
        }else{
          s.classList.remove("n")
          s.textContent = data.message;
          setTimeout(siggg,1300)
        }
      })
      .catch(err => {
        s.classList.remove("n")
        console.error(err);
        document.getElementById("s").textContent = "Server error😵";
        setTimeout(siggg, 1300)
      })  
  }
}
