document.getElementById("card-form").addEventListener('submit',
    function (e) {
        e.preventDefault();
        document.getElementById("card-form").style.display = 'none';
        document.getElementById("success-screen").style.display = 'flex';
    }
)

function updateData(fieldName, inputElement) {
    document.getElementById(fieldName).innerHTML = inputElement.value;
}

