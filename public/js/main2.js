

document.addEventListener("DOMContentLoaded", async function () {
    const user_idv = localStorage.getItem("userID") || ""
    console.log(user_idv);
    const response = await $.ajax({
        url: "http://localhost:8080/userdata",
        method: "GET",
        data: {
            user_id: user_idv
        }
    })
    renderdata();
    console.log("iwdhfidsf", response.user);
})




async function renderdata() {


    const id_us = localStorage.getItem("userID")
    const response = await $.ajax({
        url: "http://localhost:8080/getInfo",
        method: "GET",
        data: {
            user_id: id_us
        }
    })

    const id = response.us_id;
    const name = response.us_name;
    const price = response.balance;


    const a = `<th scope="row">${id}</th>
         <td>${name}</td>
        <td>${price}</td>`

    const container = document.querySelector("tbody");
    container.innerHTML = a;
}


