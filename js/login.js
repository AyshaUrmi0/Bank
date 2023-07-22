document.getElementById("submitBtn").addEventListener("click", function() {
    const emailField = document.getElementById('emailid');
    const email = emailField.value;
    console.log(email);
    const PassField = document.getElementById('pass-word');
    const password = PassField.value;
    console.log(password);

    if (email==="aysha@gmail.com"  & password==="urmi")
    window.location.href='bank.html'
    else

   alert("Invalid user")



});

