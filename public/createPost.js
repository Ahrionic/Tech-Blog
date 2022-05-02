document.getElementById("submitPost").addEventListener("click", submitPost);

function submitPost() {
  const post = new XMLHttpRequest();

  post.open("post", "api/posts");

  post.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  post.onload = () => console.log(post.responseText);

  let dataPost = $("form").serialize();

  console.log(dataPost);
  post.send(dataPost);

  post.addEventListener("load", function (event) {
    const test = JSON.stringify(event.target.responseText);
    console.log(test);
    if (test.length > 2000) {
      // alert("Error: Enter a valid email address.");
    }
    else {
      alert("Post Successfully Submitted!");
    }

  });
}