console.log("hello there, welcome to Soumyas online store. ");

const order= {
    products:[]
}
const allButtons= document.querySelectorAll(".addToOrderBtn")


allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.srcElement.id
      order.products.push(productId)
    });
  });




const submit = document.querySelector("#submit")

console.log(submit);