$('#login-btn').on('click', () => {
    let email = $('#loginEmail').val()
    let password = $('#loginPass').val()

    const adminEmail = 'sample@gmail.com'
    const adminPassword = 'password'

    if (email === adminEmail && password === adminPassword) {
        Swal.fire({
            title: "Good job!",
            text: "Welcome Back To Admin",
            icon: "success"
          });
          
      let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop1'));
      modal.hide();
      email = $('#loginEmail').val('')
      password = $('#loginPass').val('')
      console.log('emal : '+email+" and password : "+password);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email Address or Password!"
          });
    }

});