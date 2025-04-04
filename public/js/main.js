import { datauser } from "./dbuser.js"

document.addEventListener("submit", submit);

var a = document.getElementById("contai");

var user;
var pass;
var id;

document.addEventListener("input", function () {
    id = document.getElementById("exampleInputIduser").value;
    user = document.getElementById("exampleInputEmail1").value;
    pass = document.getElementById("exampleInputPassword1").value;
})




async function submit(e) {
    e.preventDefault();
    const response = await $.ajax({
        method: "GET",
        url: "http://localhost:8080/getDatauser",
        data: {
            userid: id,
            username: user,
            password: pass
        }
    })
    const url = response.url;
    const u_id = response.u_id;
    const u_name = response.u_name;
    const p_word = response.p_word;
    localStorage.setItem("userID", u_id);
    alert("Đăng nhập thành công và đã lưu biến vào local");
}


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
    console.log("iwdhfidsf", response.user);
})

