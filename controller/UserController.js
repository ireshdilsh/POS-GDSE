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
  let email = $('#loginEmail').val()
  let password = $('#loginPass').val()

  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!"
    });
    return;
  }

  let user = users.find(user => user.email === email && user.password === password);
  if (user) {
    Swal.fire({
      title: "Good job!",
      text: "Welcome Back To " + user.name,
      icon: "success"
    });

    email = $('#loginEmail').val('')
    password = $('#loginPass').val('')

    const username = document.getElementById('username')
    const useremail = document.getElementById('useremail')
    username.innerHTML = user.name
    useremail.innerHTML = user.email
    // Hide Account create Modal
    let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop1'));
    modal.hide();
    console.log('Authenticated user:', user);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Email Address or Password!"
    });
  }
});

