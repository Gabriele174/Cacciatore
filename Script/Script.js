document.getElementById("loginButton").addEventListener("click", function() {
  var username = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  if(username === "" || password === "") {
    alert("Username and password are required.");
  }
});
