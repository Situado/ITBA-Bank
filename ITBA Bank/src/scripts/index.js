document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  let formDataObj = {};

  formData.forEach((value, index) => {
    formDataObj[index] = value;
  });

  let formJson = JSON.stringify(formDataObj);

  localStorage.setItem("formTransfer", formJson);

  document.getElementById(form).reset(); //resetear el formulario
});
