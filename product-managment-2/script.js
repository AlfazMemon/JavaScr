const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        name: "iPhone 15",
        category: "Electronics",
        price: 79999,
        description: "Apple iPhone 15 with A16 Bionic chip, 128GB storage, and advanced dual-camera system."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        name: "Nike Air Max",
        category: "Footwear",
        price: 4999,
        description: "Comfortable and stylish running shoes with Air Max cushioning technology."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        name: "Sony WH-1000XM5",
        category: "Electronics",
        price: 24999,
        description: "Premium wireless headphones featuring industry-leading noise cancellation."
    }
];

const DisplayProduct = () =>{

    let productTable = document.getElementById('productTable');
    productTable.innerHTML = "";

    products.forEach((product) =>{

        productTable.innerHTML += 
        `<tr>
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="" width ="100px"></td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>
            <button onclick="EditProduct(${product.id})">Edit</button>
            <button onclick="DeleteProduct(${product.id})">Delete</button>
            </td>
        </tr>`;

            

    });
    
}

    let editid = "";
const addProduct = () =>{

    let name = document.getElementById('Name').value;
    let description = document.getElementById('Description').value;
    let category = document.getElementById('Category').value;
    let price = document.getElementById('Price').value;
    let image = document.getElementById('Image').value;
    document.getElementById('editbtn').innerText = "Update Product";

    if(editid){
    const product = products.find((p) => p.id === editid);

    product.name = name;
    product.description = description;
    product.category = category;
    product.price = price;
    product.image = image;

    alert("Product Updated Succefully");

    editid = "";

    DisplayProduct();

    clear();
    
    
        
    }

    else{
        let NewProduct = {
        id:products.length+1,
        name,
        description,
        category,
        price,
        image
    } 

    products.push(NewProduct);

    DisplayProduct();
    clear();
    }

}

const EditProduct = (id) =>{
    const product = products.find((p) => p.id === id);

    editid = product.id;

     document.getElementById('Name').value = product.name;
    document.getElementById('Description').value = product.description;
    document.getElementById('Category').value = product.category;
    document.getElementById('Price').value = product.price;
    document.getElementById('Image').value = product.image;
    document.getElementById('editbtn').innerText = "Update Product";
    


}

    const DeleteProduct = (id) =>{
        const index = products.findIndex((idx) => idx.id === id);

        products.splice(index,1);
        confirm("Are you sure ? you wanted to delete this product");
        DisplayProduct();
    }

const clear = () =>{
    let name = document.getElementById('Name').value = "";
    let description = document.getElementById('Description').value = "";
    let category = document.getElementById('Category').value = "";
    let price = document.getElementById('Price').value = "";
    let image = document.getElementById('Image').value = "";
    document.getElementById('editbtn').innerText = "Add Product";

}

DisplayProduct();

