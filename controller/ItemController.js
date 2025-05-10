import { items } from '../db/db.js';
import ItemModel from '../model/ItemModel.js'

$('#add-item-btn').on('click', () => {
    let name = $('#item-name').val()
    let discription = $('#item-discription').val()
    let image = $('#item-image').val()
    let price = $('#item-price').val()

    if (name == '' || discription == '' || image == '' || price == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
        });
        return;
    }

    let data = new ItemModel(name, discription, image, price)
    items.push(data)
    console.log(data)

    getAllItems()

    Swal.fire({
        title: "Good job!",
        text: "Item Added !",
        icon: "success"
    });

    name = $('#item-name').val('')
    discription = $('#item-discription').val('')
    image = $('#item-image').val('')
    price = $('#item-price').val('')
});

const getAllItems = () => {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; // Clear previous cards if any

    items.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h5');
        title.textContent = item.name;

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const description = document.createElement('p');
        description.textContent = item.discription;

        const price = document.createElement('p');
        price.textContent = `Price: ${item.price}`;

        const button = document.createElement('button');
        button.textContent = 'Add To Cart';
        button.onclick = () => {
            // handle add to cart here
            console.log(`${item.name} added to cart`);
        };

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(button);

        cardsContainer.appendChild(card);
    });
};
