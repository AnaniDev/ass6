var data = "";
var money = ["USD", "JOD", "NIS"];
for (var i = 0; i < money.length; i++) {
    data += `<option> ${money[i]}</option>`;
}
document.querySelector("select").innerHTML = data;

var form = document.querySelector(".registerForm");
var para = document.querySelector("p");
form.onsubmit = function (e) {
    e.preventDefault();
    var element = e.target.elements;
    var price = {
        moneyamount: element["amount"].value,
        curtype: element["exchange"].value,
    };
    var exchangeRate;
    switch (price.curtype) {
        case "USD":
            exchangeRate = 0.27;
            break;
        case "JOD":
            exchangeRate = 0.19;
            break;
        case "NIS":
            exchangeRate = 1;
            break;
        default:
            para.textContent = "Invalid currency";
            return;
    }
    var result = price.moneyamount * exchangeRate;
    para.textContent = `===> ${result} <===`;
};
