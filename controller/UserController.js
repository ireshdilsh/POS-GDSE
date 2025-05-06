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