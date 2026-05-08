// your JS code here

function getFormvalue() {
  event.preventDefault();

  let fname = document.querySelector('input[name="fname"]').value.trim();
  let lname = document.querySelector('input[name="lname"]').value.trim();

  alert(fname + " " + lname);
}