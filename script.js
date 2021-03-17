//The following code translates whatever the user writes in the text box into an alert.
document.getElementById('button').addEventListener('click', submit)

function submit () {
  alert(document.getElementById('text-box').value)
}

//This code shows two alerts. One saying hello and the next with whatever the user put in the text box.
document.getElementById('button2').addEventListener('click', welcome)

function welcome () {
  alert('Hello,')
  alert(document.getElementById('username').value)
}
