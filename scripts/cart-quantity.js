let cartQuantity = 0;
   function showQuantity(){
    displayQuantity();
   } 

   function updateCartQuantity(quantity){
    if(cartQuantity + quantity > 10){
        alert('Cart is full');
        return;
   } 
   
   if(cartQuantity + quantity < 0){
        alert('Not enough items in the Cart');
        return;
   }

    cartQuantity += quantity;
    displayQuantity();
   }

   function resetCart(){
    cartQuantity = 0;
    console.log('The Cart was reset');
    displayQuantity();
   }

   function displayQuantity() {
    document.querySelector('.displayQuantity').innerHTML= `Cart Quantity: ${cartQuantity}`;
   }