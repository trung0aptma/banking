
document.addEventListener("submit", submit);

var a = document.getElementById("contai");

var user;
var pass;

document.addEventListener("input", function () {
    user = document.getElementById("exampleInputEmail1").value;
    pass = document.getElementById("exampleInputPassword1").value;
})



async function submit(e) {
    e.preventDefault();
    const response = await $.ajax({
        method: "GET",
        url: "http://localhost:8080/getDatauser",
        data: {
            username: user,
            password: pass
        }
    })
    const id = response.u_id
    const url = response.url
    window.location.href = url
    localStorage.setItem("userID", id);
    alert("Đăng nhập thành công và đã lưu biến vào local");
}




