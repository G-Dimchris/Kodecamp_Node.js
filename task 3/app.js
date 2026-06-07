// QUESTION 1
// Function to get GitHub user details

async function GitUser() {
  try {
    const response = await fetch("https://api.github.com/users/G-Dimchris");
    if (!response.ok) {
      throw new Error("Username not found");
    }

    const user = await response.json();

    return user;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

GitUser("G-Dimchris")
  .then(user => console.log(user));




// QUESTION 2
//Program for a class named KCStore that has "products" as it's property.

class KCStore {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log("{product.name} added successfully");
  }

  viewProducts() {
    console.log(this.products);
  }

  updateProduct(id, updatedData) {
    const product = this.products.find(
      (item) => item.id === id
    );

    if (!product) {
      console.log("Product not found");
      return;
    }

    Object.assign(product, updatedData);

    console.log("Product updated successfully");
  }

  deleteProduct(id) {
    this.products = this.products.filter(
      (item) => item.id !== id
    );

    console.log("Product deleted successfully");
  }
}


const store = new KCStore();

store.addProduct({
  id: 1,
  name: "Hp Laptop",
  price: 500000
});

store.addProduct({
  id: 2,
  name: "iPhone",
  price: 2000000
});

store.addProduct({
  id: 3,
  name: "Tablet",
  price: 1000000
});

store.viewProducts();

store.updateProduct(1, {
  price: 550000
});

store.deleteProduct(2);

store.viewProducts();