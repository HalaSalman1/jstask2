
var formreg=document.querySelector(".registerForm");
var para =document.querySelector("p");
formreg.onsubmit =function(e) {
 e.preventDefault();
var element=e.target.elements;
 var price= {
    mony: element['amount'].value,
 }
 

}
formreg.onsubmit = function (e) {
  e.preventDefault();
  var element = e.target.elements;

  var price = {
    
    moneyType: element['amount'].value,
    seltype: element['exchange'].value,
  };
  var exchangeRate;
  switch (price.seltype) {
    case 'dollar':
      exchangeRate = 0.27; // الدولار
      break;
    case'dinar':
      exchangeRate = 0.19; // الدينار
      break;
    case'nis':
      exchangeRate = 1; // الشيكل
      break;
    default:
      para.textContent = "Invalid currency type";
      return;
  }
  //  النتيجة
  var result = price.moneyType * exchangeRate;
  para.textContent = `Converted amount: ${result} `;
}