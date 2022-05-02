document.getElementById("login").addEventListener("click", submitData);

function submitData() {
  const user = new XMLHttpRequest();

  user.open("post", "api/users");

  user.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  user.onload = () => console.log(user.responseText);

  let data = $("form").serialize();

  user.send(data);

  user.addEventListener("load", function (event) {
    const test = JSON.stringify(event.target.responseText);
    console.log(test);
    if (test.length > 300) {
      alert("Error: Enter a valid email address.");
    }
    else {
      alert("Account Successfully Created!");
    }

  });