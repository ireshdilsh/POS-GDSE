import {users} from '../db/db.js'
import UserModel from '../model/UserModel.js'

$('#signup-btn').on('click',()=>{
    let name = $('#exampleInputName').val()
    let email = $('#exampleInputEmail1').val()
    let password = $('#exampleInputPassword1').val()

    let data = new UserModel(name,email,password)
    users.push(data)
    Swal.fire({
        title: "Good job!",
        text: "Account Created !",
        icon: "success"
      });
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
        // alert('Login successful! Welcome ' + user.name);
        Swal.fire({
            title: "Good job!",
            text: "Welcome Back To "+user.name,
            icon: "success"
          });
        console.log('Authenticated user:', user);
        // Optionally redirect or show dashboard
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email Address or Password!"
          });
    }
});