let sum  = 0;

function getOrder(pizzaName, pizzaSize, crust , toppingSelected){
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.crust = crust;
  this.toppingSelected = toppingSelected;

}

getOrder.prototype.totalBill = function(){
    return this.pizzaSize + this.crust + this.toppingSelected
}

$(document).ready(function(){

  $(".submit").click(function(){
    
    let pname = $(".name").val();
    let psize =$("#size").val();
    let crust =$("#crust").val()
    let pnameValue =Number(psize);
    let crustValue = Number(crust);


    // getting the selected pizza size tex and crust
   let pizzaText = $("#size option:selected").text()
   let crustText = $("#crust option:selected").text()

   // getting the toppings and pushing  them in the array
   let topingText;
    let tops = [] // empty array to push the toppings to
    $.each($("input[name='toppings']:checked"), function(){
      tops.push($(this).val());
      topingText    = $(this).next("label").text()
  });

  // getting the sum of the seleceted toppings
  let topsNum = tops.map((i) => Number(i));
  for(items  of topsNum){
    sum += items

  }
  
  //new order object from the constructor
  let newOrder = new getOrder( pname, pnameValue,crustValue,sum)//arguments are the users input
    alert(newOrder.totalBill());  
  });
})