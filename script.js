var contenido = document.querySelector("#api");
fetch("https://api.github.com/users/anyela09")
  .then(function (response) {
    return response.json();
  })

function validateForm() {
  var x =
    document.forms["formulario"][("form-name", "form-email", "form-asunto")].value;
  if (x == "") {
    alert("insera dados!");
    console.log(x);
    return false;
  }
}
.then(function (data) {
    console.log(data.length);
    var cont = 0;
    for (cont = 0; cont < data.length; cont++) {
      contenido.innerHTML += `
			 <div class="card">
				<a href="${data[cont].html_url}" target="blank_"> ${data[cont].name} </a>
			 </div>
			 `;
    }
  });

