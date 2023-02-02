function talk() {
  var know = {
    "hi": "hello",
    "how are you?" : "good",
    "bye": "ok bye"
  };

  var user = document.getElementById('userBox').value;
  document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  } else {
    document.getElementById('chatLog').innerHTML = "dont understand"
  }
}