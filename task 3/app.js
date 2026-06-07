// QUESTION 1
// Function to get GitHub user details

async function getGitHubUser(GDimchris) {
  try {
    const response = await fetch("https://api.github.com/users/GDimchris");

    // Check if user exists
    if (!response.ok) {
      throw new Error("GitHub user not found");
    }

    // Convert response to JSON
    const user = await response.json();

    return user;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

/* // Example usage
getGitHubUser("octocat")
  .then(user => console.log(user)); */




async function getGitHubUser(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();

    console.log("User Details:");
    console.log("Name:", user.name);
    console.log("Username:", user.login);
    console.log("Followers:", user.followers);
    console.log("Following:", user.following);
    console.log("Public Repos:", user.public_repos);
    console.log("Profile URL:", user.html_url);

    return user;
  } catch (error) {
    console.error(error.message);
  }
}

getGitHubUser("octocat");


// QUESTION 2

class KCStore {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(`${product.name} added successfully`);
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

// Testing

const store = new KCStore();

store.addProduct({
  id: 1,
  name: "Laptop",
  price: 500000
});

store.addProduct({
  id: 2,
  name: "Phone",
  price: 200000
});

store.viewProducts();

store.updateProduct(1, {
  price: 550000
});

store.deleteProduct(2);

store.viewProducts();