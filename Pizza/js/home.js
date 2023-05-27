
//Render câu chào
const responseMessage = () => {
    alert('Gửi phản hồi thành công')
}

//Render list đồ ăn lên DOM
const renderFood=()=>{
    let listFood= document.getElementById('listFood');
    const food= JSON.parse(localStorage.getItem('listfood'));
    let contentBody=""
    food.forEach((item)=>{
     contentBody+= `
     <div class="col-md-6" id="listFood" data-toggle="modal" data-target="#exampleModal">
     <div class="gallery-wrapper">
         <a href="../User/LoginUser.html"><img src="${item.imgUrl}"
                 class="img-responsive gallery-img" alt="Pizza 1"></a>
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