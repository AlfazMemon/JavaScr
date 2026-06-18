

        const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        description: "High-quality wireless headphones with noise cancellation and deep bass.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaKMFaKZF9lVz-hemCSsvvImG0HfDURjuQg6oKtolZQ&s=10",
        price: 2499
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        description: "Lightweight and comfortable running shoes designed for daily workouts.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3ZzR04Uhjlz9oSVm-a5HmeyUPtd74R-eVNSfVxfcIg&s=10",
        price: 1999
    },
    {
        id: 3,
        name: "Smart Watch",
        category: "Accessories",
        description: "Track fitness, monitor heart rate, and receive notifications on the go.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n1sO-hdkbKLRIGZTC_EutGDyJLpDJNONbboENr3MUg&s=10",
        price: 3499
    },
    {
        id: 4,
        name: "Laptop Backpack",
        category: "Bags",
        description: "Durable backpack with multiple compartments for laptops and accessories.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUfuwGrPj3KEd37CLrnQexxO7xd6ADMb-whdpne5xvA&s=10",
        price: 1499
    },
    {
        id: 5,
        name: "Gaming Mouse",
        category: "Gaming",
        description: "Ergonomic gaming mouse with customizable RGB lighting and DPI settings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHf_7TNUk1FR2qs4nQTNmqqC5pCtP4iLRHD-NzlQdSA&s=10",
        price: 999
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        category: "Electronics",
        description: "Portable Bluetooth speaker with powerful sound and long battery life.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4MAFv14aYIuGjYAEpdbSu17ri84zmlHQWRYb17Cc0w&s=10",
        price: 1799
    },
    {
        id: 7,
        name: "Mechanical Keyboard",
        category: "Gaming",
        description: "RGB mechanical keyboard with tactile switches for fast and accurate typing.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyvji6BfTlF1WOkmNe96BysuYniMMYUHfUllgsDlW-Q&s=10",
        price: 2999
    }
];
        const dispalyproducts = () => {

            let productTable = document.getElementById('productTable');
            productTable.innerHTML = "";

            products.forEach((product) =>{
                productTable.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td><img src="${product.image}" alt=""></td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.category}</td>
                    <td>${product.price}</td>
                    <td><button onclick="EditProduct(${product.id})">Edit</button>
                    <button class="btn2" onclick="Deleteproduct(${product.id})">Delete</button>
                    </tr>`;  
            });

        }

        let editId = "";
        let addproduct = () =>{
            let name = document.getElementById('name').value;
            let image = document.getElementById('image').value;
            let description = document.getElementById('description').value;
            let category = document.getElementById('category').value;
            let price = document.getElementById('price').value;

            if(editId){

            const product = products.find((p) => p.id === editId);

            product.name = name;
            product.category = category;
            product.description = description;
            product.price = price;
            product.image = image;

            alert("Update successfully")
            editId = null;
            dispalyproducts();
            clear();




            }
            else{
                const newproducts = {
                id : products.length+1,
                name,
                image,
                description,
                category,
                price,

            }
        }

        
            products.push(newproducts);

            dispalyproducts();
        }

        const EditProduct = (id) =>{

            const product =products.find((p) => p.id === id);

            editId = product.id;

            document.getElementById('name').value = product.name;
            document.getElementById('image').value = product.image;
            document.getElementById('description').value = product.description;
            document.getElementById('category').value = product.category;
            document.getElementById('price').value = product.price;
            document.getElementById('editbtn').innerText = "Update product";
        }

        const Deleteproduct = (id) =>{
            const index = products.findIndex((idx) => idx.id === id);

            products.splice(index,1);
            confirm("Are you sure ? you want to delete");
            dispalyproducts();
        }

        const clear = () =>{
            
            document.getElementById('name').value = "";
            document.getElementById('image').value = "";
            document.getElementById('description').value = "";
            document.getElementById('category').value = "";
            document.getElementById('price').value = "";
            document.getElementById('editbtn').innerText = "Add product";
        }

             dispalyproducts();

