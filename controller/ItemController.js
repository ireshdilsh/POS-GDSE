import { items, orders, users } from '../db/db.js';
import { cartdetails } from '../db/db.js';
import ItemModel from '../model/ItemModel.js'
import OrdersModel from '../model/OrdersModel.js';

$('#add-item-btn').on('click', () => {
    let name = $('#item-name').val()
    let discription = $('#item-discription').val()
    let imageFile = $('#item-image')[0].files[0]
    let price = $('#item-price').val()

    if (name == '' || discription == '' || !imageFile || price == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all fields!"
        });
        return;
    }

    const reader = new FileReader()
    reader.onload = () => {
        const data = new ItemModel(name, discription, reader.result, price)
        items.push(data)
        console.log(data)

        getAllItems()

        Swal.fire({
            title: "Good job!",
            text: "Item Added!",
            icon: "success"
        })

        $('#item-name').val('')
        $('#item-discription').val('')
        $('#item-image').val('')
        $('#item-price').val('')
    }

    reader.readAsDataURL(imageFile)
});


const getAllItems = () => {
  // Get column containers
  const columns = [
    document.getElementById('column-1'),
    document.getElementById('column-2'),
    document.getElementById('column-3')
  ];

  // Clear old content
  columns.forEach(col => col.innerHTML = '');

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h5');
    title.textContent = item.name;

    const img = document.createElement('img');
    img.src = item.image;

    const description = document.createElement('p');
    description.textContent = item.discription;

    const price = document.createElement('p');
    price.textContent = `Price: ${item.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add To Cart';

    button.onclick = () => {
  
      const row = document.createElement('tr');

       const nameCell = document.createElement('td');
       nameCell.textContent = item.name;

       const priceCell = document.createElement('td');
       priceCell.textContent = item.price;

       //let email = $('#useremail').val()
       
       let email = $('#useremail').getText()
       console.log(email);
       
       
       const data = new OrdersModel(email,item.name,item.price)
       orders.push(data)
       console.log(orders);
       
       row.appendChild(nameCell);
       row.appendChild(priceCell);

       document.getElementById('tBody').appendChild(row);
  
    };

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(button);

    columns[index % 3].appendChild(card);
    window.onload = getAllItems;
  });
};

$('#addOrder').on('click',()=>{
  if (orders.length === 0) {
     Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all fields!"
        });
        return;
  }
  Swal.fire({
      title: "Success!",
      text: "You have successfully Place Order.",
      icon: "success"
    });
  $('#tBody').empty()
})
