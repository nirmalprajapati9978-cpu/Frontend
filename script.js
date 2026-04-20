function sig() {
  document.getElementById("b").classList.toggle("flip");
}
document.getElementById("login").onclick = function() {
  let user = document.getElementById("int1").value;
  let pass = document.getElementById("int2").value;
  if(user === "" || pass === ""){
    document.getElementById("l").textContent = "All fields are require 😳 "
    setTimeout(() => {
    document.getElementById("l").innerHTML = `Don't have an account? <span id="ll" onclick="sig()">Sign up</span>`;
    }, 3000)
  }else if (user.length < 3){
    document.getElementById("l").textContent = "Username must be 3+"
    return
  }else if (pass.length < 4){
    document.getElementById("l").textContent = "Password must be 4+"
    return
  }else{
    document.getElementById("l").textContent = "Checking..."
    fetch("https://backend.onrender.com/login", {
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
        document.getElementById("l").textContent = "Login success ✔️"
        setTimeout(() => {
        document.getElementById("l").innerHTML = `Don't have an account? <span id="ll" onclick="sig()">Sign up</span>`;
          }, 1300)
        setTimeout(() => {
        window.location.href = "https://www.google.com"
          }, 1500)
        }else{
          document.getElementById("l").textContent = data.message;
          setTimeout(() => {
          document.getElementById("l").innerHTML = `Don't have an account? <span id="ll" onclick="sig()">Sign up</span>`;
          }, 1300)
        }
      })
      .catch(err => {
        console.error(err);
        document.getElementById("l").textContent = "Server error 😵";
        setTimeout(() => {
            document.getElementById("l").innerHTML = `Don't have an account? <span id="ll" onclick="sig()">Sign up</span>`;
        }, 1300)
      })  
  }
}
document.getElementById("sign").onclick = function() {
  let userr = document.getElementById("int3").value;
  let passs = document.getElementById("int4").value;
  if(userr === "" || passs === ""){
    document.getElementById("s").textContent = "All fields are require 😳 "
    setTimeout(() => {
    document.getElementById("s").innerHTML = `Already have an account? <span onclick="sig()">Login</span>`;
    }, 3000)
  }else if (userr.length < 3){
    document.getElementById("s").textContent = "Username must be 3+"
    return
  }else if (passs.length < 4){
    document.getElementById("s").textContent = "Password must be 4+"
    return
  }else{
    document.getElementById("s").textContent = "Creating account..."
    fetch("https://backend.onrender.com/sign", {
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
        document.getElementById("s").textContent = "Sign Up success ✔️"
        setTimeout(() => {
        document.getElementById("s").innerHTML = `Already have an account? <span onclick="sig()">Login</span>`;
          }, 1300)
        setTimeout(() => {
        window.location.href = "https://www.google.com"
          }, 1500)
        }else{
          document.getElementById("s").textContent = data.message;
          setTimeout(() => {
          document.getElementById("s").innerHTML = `Already have an account? <span onclick="sig()">Login</span>`;
            },1300)
        }
      })
      .catch(err => {
        console.error(err);
        document.getElementById("s").textContent = "Server error😵";
        setTimeout(() => {
            document.getElementById("s").innerHTML = `Already have an account? <span onclick="sig()">Login</span>`;
        }, 1300)
      })  
  }
}
