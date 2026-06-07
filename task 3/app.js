// QUESTION 1
// Function to get GitHub user details

async function getGitHubUser() {
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

getGitHubUser("G-Dimchris")
  .then(user => console.log(user));