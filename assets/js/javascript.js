let url = "https://dummyjson.com/products/categories";
let categories = [];

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        categories = data;
        createButtons(data);
    })
    .catch((error) => console.error(error));

function createButtons(categories) {
    const categoriesElement = document.getElementById("categories");
    let myHTML = "";

    categories.forEach((category, index) => {
        myHTML += `
            <button onclick="callback(${index})">${category.name}</button>
        `;
    });

    categoriesElement.innerHTML = myHTML;
}

function callback(index) {
    let url = categories[index].url;
    console.log(url);
}