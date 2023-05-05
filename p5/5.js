const surname = document.getElementById("surname");
const name = document.getElementById("name");
const old = document.getElementById("old");
const tel = document.getElementById("tel");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (surname.value && name.value && old.value && tel.value) {
    alert(
      `Surname: ${surname.value},\nName: ${name.value},\nOld: ${old.value},\nPhone number: ${tel.value}`
    );
  }
});
