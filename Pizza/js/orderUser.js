const renderFood=()=>{
    let listFood= document.getElementById('listFood');
    const food= JSON.parse(localStorage.getItem('listfood'));
    let contentBody=""
    food.forEach((item)=>{
     contentBody+= `
     <div onclick="renderModal("${item.id}")" class="col-md-6" id="listFood" data-toggle="modal" data-target="#exampleModal">
     <div class="gallery-wrapper">
         <img  src="${item.imgUrl}"
                 class="img-responsive gallery-img" alt="Pizza 1">
         <div class="gallery-des">
             <h3>${item.name} </h3>
             <h4>${item.price}VND</h4>
         </div>
     </div>
 </div>
     `
    })
 
    listFood.innerHTML=contentBody
     
 }
 
 renderFood()

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

const logOut = () => {
    localStorage.removeItem('adminLogin')
    window.location = "index.html"
}

const responseMessage = () => {
    alert('Gửi phản hồi thành công')
}

const renderModal=(id)=>{
    let contentModal= document.getElementById("modalBody");
    const food= JSON.parse(localStorage.getItem('listfood'));
    let modalBody=""
    food.forEach(item=>{
        if(item.id==id){
            modalBody +=`
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"
                style="text-align: center;font-size: 20px;">Thông tin đặt
                hàng
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="container">
                <div class="row">
                    <div style="width: 50%;">
                        <label>Họ và tên</label>
                        <input type="email" class="form-control" id="name">
                    </div><br>
                    <div style="width: 50%;">
                        <label>Email</label>
                        <input type="text" class="form-control" id="email">
                    </div>
                </div><br>
                <div class="form-group" style="width: 50%;">
                    <label>Địa chỉ giao hàng</label>
                    <input type="text" class="form-control" id="address">
                </div>
                <div class="form-group" style="width: 50%;">
                    <label>Số điện thoại</label>
                    <input type="text" class="form-control" id="phone">
                </div>
                <div class="form-group" style="width: 50%;">
                    <label>Ghi chú</label>
                    <input type=" text" class="form-control" id="note">
                </div>
                <div style="font-size:20px">
                    Giá tiền: ${item.price}đ
                </div>
                <div style="font-size:20px">
                    Tiền ship (>3km)= 15000đ          
                    </div>
                <div style="font-size:20px">
                    Tổng tiền phải thanh toán: ${item.price + 15000}
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onclick="orderInfo()">Save
                changes</button>
        </div>
            `  
        }  
      })
      contentModal.innerHTML=modalBody
}

