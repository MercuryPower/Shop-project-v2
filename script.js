window.onload = () =>{
    let search = document.querySelector('.search')
    search.oninput = function(){
        let value = this.value.trim();
        let list = document.querySelectorAll('.ul li');

        if(value != ''){

            list.forEach(element => {
                if(element.innerText.search(value) == -1){
                    element.classList.add('hide')
                    
                }
                console.log(123);
            });
        }
            else{
                list.forEach(element => {
                    element.classList.remove('hide')
                })
            }
        }
    }
let deleteList = document.querySelectorAll('.delete')
    deleteList.forEach(element =>{
        element.addEventListener('click',()=>{
            element.parentElement.remove()
        })
    })

let cartPrice = document.querySelectorAll('.price')
let cartName = document.querySelectorAll('.product-details')
let cartTable = document.querySelector('.cart-table')
let buyButton = document.querySelectorAll('.fa-cart-shopping')
    buyButton.forEach(element =>{
        element.addEventListener('click',()=>{
            cartTable.innerHTML +=
                `<tr>
                <td><img src="images/GPU/gpu.jpg" alt=""></td>
                <td><a href="#">${element.value}</a></td>
                <td>${cartPrice}<i class="fa-solid fa-ruble-sign"></i></td>
                <td>1</td>
                <td class="delete"><a href="#">Удалить<i class="fa-solid fa-x text-danger"></i></a></td>
                </tr>`
                
        })
    })
