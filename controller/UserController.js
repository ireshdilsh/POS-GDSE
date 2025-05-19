import { users } from '../db/db.js'
import UserModel from '../model/UserModel.js'

$('#signup-btn').on('click', () => {
  let name = $('#exampleInputName').val()
  let email = $('#exampleInputEmail1').val()
  let password = $('#exampleInputPassword1').val()

  if (email == '' || password == '' || name == '') {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!"
    });
    return;
  }

  let user = users.find(u => u.email === email);
  if (user) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This Email Address Alredy Used !"
    });
    return;
  }

  let data = new UserModel(name, email, password)
  users.push(data)
  Swal.fire({
    title: "Good job!",
    text: "Account Created !",
    icon: "success"
  });
  // Hide Account create Modal
  let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
  modal.hide();

  name = $('#exampleInputName').val('')
  email = $('#exampleInputEmail1').val('')
  password = $('#exampleInputPassword1').val('')

  console.log(users);
})

// Login Authetication
$('#login-btn').on('click', () => {
  let email = $('#loginEmail').val().trim();
  let password = $('#loginPass').val().trim();

  const adminEmail = 'sample@gmail.com';
  const adminPassword = 'password';

  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email and password are required!"
    });
    return;
  }

  if (email === adminEmail && password === adminPassword) {
    Swal.fire({
      title: "Welcome Admin!",
      text: "You have successfully logged in as Admin.",
      icon: "success"
    });
    resetModal()
    document.getElementById('username').innerText = "Admin";
    document.getElementById('useremail').innerText = adminEmail;

        $('#landing-page').css('display', 'none')
        $('#pos-body').css('display','block')
        $('#right-side-form').css('display','block')

  } else {
    // Check if user exists in users array
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
      Swal.fire({
        title: "Welcome!",
        text: `Hello ${user.name}, you have successfully logged in.`,
        icon: "success"
      });
      resetModal()
      document.getElementById('username').innerText = user.name;
      document.getElementById('useremail').innerText = user.email;

      $('#landing-page').css('display', 'none')
      $('#pos-body').css('display', 'block')
      $('#right-side-form').css('display','none')

    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid Email or Password."
      });
      return;
    }
  }
});

const resetModal = () => {
  $('#loginEmail').val('');
  $('#loginPass').val('');
  let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop1'));
  modal.hide();
}

 $('#logout-btn').on('click',()=>{
            $('#pos-body').css('display','none')
            $('#landing-page').css('display','block')
            $('#tBody').empty()
  })