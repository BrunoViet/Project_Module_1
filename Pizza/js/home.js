const getUser = JSON.parse(localStorage.getItem('adminLogin'));
const welcome = document.getElementById('welcome');
welcome.innerHTML = "Hello " + getUser.email + " !";

const responseMessage = () => {
    alert('Gửi phản hồi thành công')
}

const logOut = () => {
    localStorage.removeItem('adminLogin')
    window.location = "index.html"
}

const orderInfo = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let note = document.getElementById('note').value;
    let phone = document.getElementById('phone').value;
    let isExist = false;
    const getOrder = JSON.parse(localStorage.getItem('order')) ?? [];
    getOrder.forEach(element => {
        if (element.name === name) {
            isExist = true;
        }
    });
    let order = {
        id: `${getOrder.length+1}`,
        name: name,
        email: email,
        address: address,
        note: note,
        phone: phone,
        status: "Đã xác nhận"
    }
    if (!isExist) {
        getOrder.push(order)
        localStorage.setItem('order', JSON.stringify(getOrder))
        alert('Đặt hàng thành công. Pizza sẽ được giao tới bạn ngay thôi!!!!')
        window.location="HomeLogin.html"
    } else {
        alert('Vui lòng đợi hoàn thành đơn hiện tại')
    }
}