const formName = document.querySelector(".nameInput");
const mailAdress = document.querySelector(".mailInput");
const message = document.querySelector(".message");

function sendEmail(){
    Email.send({
        SecureToken : "86fd51c3-f21d-4c63-9bf6-c95bbe1d4e66",
        To : 'take32.nao@gmail.com',
        From : `${mailAdress.value}`,
        Subject : "New Contact Form Enquiry",
        Body : `name: ${formName.value}
        + <br/> email: ${mailAdress.value}
        + <br/> message: ${message.value}`
    }).then(
         message => alert("Message sent successfully")
    );
}