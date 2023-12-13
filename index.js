//  one image only to be clicked
// const imageClick = document.querySelector("#img1");
// imageClick.addEventListener("click", function(){
//  document.querySelector("#modalImage").src = this.src;

//     console.log("image is click")

// })

// FOR RANDON IMAGES TO CLICKED

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("#img").forEach((element) =>{
        element.addEventListener("click", function() {
            document.querySelector("#modalImage").src = this.src;
            modalImage.className = "d-block mx-auto w-50"
        })
    })
})

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".btn").forEach((orderBtn) => {
       orderBtn.addEventListener("click", function (){
       let parentContainer = orderBtn.closest(".col-lg-3");
       let imagePro = parentContainer.querySelector("#img").src;
       let itemPrice = parentContainer.querySelector("#priceModal").textContent;
       document.querySelector("#productImage").src = imagePro;
       document.querySelector("#priceModal1").textContent = itemPrice
    
     productImage.className = "d-block mx-auto w-35";
     priceModal1.className = "text-center text-dark"

        });
    });
});

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".btnCheckOut").forEach((checkOutBtn) =>{
        checkOutBtn.addEventListener ("click", function (){
            let parentContainer1 = checkOutBtn.closest(".mb-3");
            console.log(parentContainer1);
            let fullNameInput = document.querySelector(".fullname").value;
            let mobileNumber = document.querySelector("mobileNumber").value;
            let address = document.querySelector('address').value;
            let quantityInput = parentContainer1.querySelector(".quantity").value;
            let priceInput = document.querySelector(".price").value;

            // document.querySelector(".fullname1").value = fullNameInput;
      
            
            // document.querySelector(".quantity").value = quantityInput;
            // console.log(fullNameInput);

        })
    })
})

