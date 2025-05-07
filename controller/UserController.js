import {users} from '../db/db.js'
import UserModel from '../model/UserModel.js'

$('#signup-btn').on('click',()=>{
    let name = $('#exampleInputName').val()
    let email = $('#exampleInputEmail1').val()
    let password = $('#exampleInputPassword1').val()

    let data = new UserModel(name,email,password)
    users.push(data)
    console.log(users);
    
})

// Login Authetication
$('#login-btn').on('click', () => {
    let email = $('#loginEmail').val()
    let password = $('#loginPass').val()

    if (!email || !password) {
        alert('Email and password are required');
        return;
    }

    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login successful! Welcome ' + user.name);
        console.log('Authenticated user:', user);
        // Optionally redirect or show dashboard
    } else {
        alert('Invalid email or password');
    }
});