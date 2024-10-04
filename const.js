// Muestra el formulario seleccionado y oculta los demás
function showForm(formNumber) {
    // Oculta todos los formularios
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.style.display = 'none';
    });

    // Muestra el formulario seleccionado
    const selectedForm = document.getElementById(`form-${formNumber}`);
    selectedForm.style.display = 'block';
}

