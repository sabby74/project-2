console.log("hello there, welcome to Soumyas online store. ");

let order= {
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

submit.addEventListener("click", async (e) => {
    let res = await fetch("/product/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    let response = await res.json()
    if (response) {
        order = {
          products: [],
        };
        window.location = `/product/order/${response._id}`;
      }


})