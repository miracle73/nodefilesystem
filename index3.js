const fs = require("fs");
const fetch = require("node-fetch");
function getPosts() {
    return fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => JSON.stringify(posts, null, 2))
    .then((response) => {
        fs.writeFile("./result/posts.json", response, () => {
            console.log("File has been created successfully");
        });
    });
}
getPosts();