let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Function to handle form submission
function submitForm() {
    // Get form data
    const name = document.getElementsByName("name")[0].value;
    const number = document.getElementsByName("number")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const date = document.getElementsByName("date")[0].value;

    


    alert(`Appointment Details:\nName: ${name}\nNumber: ${number}\nEmail: ${email}\nDate: ${date}`);

    
    document.getElementById("appointmentForm").reset();
}
