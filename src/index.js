function saveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var newData = {
        name: name,
        email: email
    };

    var storedData = localStorage.getItem("userData");
    var userData = storedData ? JSON.parse(storedData) : [];

    userData.push(newData);

    localStorage.setItem("userData", JSON.stringify(userData));
    
    alert("Dados enviados com sucesso!");

    displayData();
}

function displayData() {
    //alert("função iniciando..");
    var storedData = localStorage.getItem("userData");
    var userData = storedData ? JSON.parse(storedData) : []

    var displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = "";

    userData.forEach(function(data) {
        displayDiv.innerHTML += `Nome: ${data.name}; Email: ${data.email} <br>`
    });

    document.getElementById("name").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            saveData();
        }
    });

    document.getElementById("email").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            saveData();
        }
    });

    clearFields();
}

function showDatas() {
    let getData = document.getElementById('displayData');
    let btnHide = document.getElementById('btnHide');
    
    let display = getData.style.display = 'block';
    let btn = btnHide.style.display = 'block';
    return display, btn;
}

function hideDatas() {
    let hideData = document.getElementById('displayData');
    return hideData.style.display = 'none';
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("removeEmail").value = "";
    document.getElementById("editEmail").value = "";
    document.getElementById("editName").value = "";
    document.getElementById("editNewEmail").value = "";
}

function removeData() {
    var emailToRemove = document.getElementById("removeEmail").value;
    var storedData = localStorage.getItem("userData");
    var userData = storedData ? JSON.parse(storedData) : [];

    var indexToRemove = userData.findIndex((data) => {
        return data.email === emailToRemove;
    });

    if (indexToRemove !== -1) {
        userData.splice(indexToRemove, 1);
        localStorage.setItem("userData", JSON.stringify(userData));
        alert(" Dados removidos com sucesso");
        displayData();
        clearFields();
    } else {
        alert("Email não encontrado");
        clearFields();
    }
}   

function editData() {
    var editEmail = document.getElementById("editEmail").value;
    var editName = document.getElementById("editName").value;
    var editNewEmail = document.getElementById("editNewEmail").value;

    var storedData = localStorage.getItem("userData");
    var userData = storedData ? JSON.parse(storedData) : [];

    var indexToEdit = userData.findIndex((data) => {
        return data.email === editEmail;
    });

    if (indexToEdit !== -1) {
        userData[indexToEdit].name = editName;
        userData[indexToEdit].email = editNewEmail;
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Cadastro editado com sucesso!");
        displayData();
        clearFields();
    } else {
        alert("Email não encontrado");
        clearFields();
    }
}

displayData();
