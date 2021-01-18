var products = [];
var lastProduct;
var units;
var strQuantity = "";
var shoppingCart = [];
var shoppinCartLength = 0;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function addingItem() {
    var item = document.getElementById("productName").value;
    var product = { name: item, price: 0 };
    document.getElementById("productName").value = "";
    if (item != "") {
        products.unshift(product);
        var menuList = document.getElementById("firstSelect");
        var myOption = document.createElement("option");
        myOption.text = product.name;
        menuList.prepend(myOption);
        menuList.value = menuList.firstChild.value;
    }
}
function addPriceOfProduct() {
    var item = document.getElementById("firstSelect").value;
    var priceOfProduct = document.getElementById("price").value;
    if (!parseFloat(priceOfProduct)) {
		document.getElementById('price').focus();
        document.getElementById('msg').innerText = 'Please Enter the Price';
    }
    else{
        document.getElementById('msg').innerText = '';  
        document.getElementById("price").value = "";
    var i;
    if (priceOfProduct != "") {
        for (i = 0; i < products.length; i++) {
            if (products[i].name == item) {
                products[i].price = priceOfProduct;
                var unitMenuList = document.getElementById("secondSelect");
                var myOption = document.createElement("option");
                myOption.text = products[i].name + "$" + priceOfProduct + "/unit";
                unitMenuList.add(myOption);
                unitMenuList.value = myOption.text;
            }
        }
     }

    }
}

function addUnitsToProduct0() {
    strQuantity += "0";
}
function addUnitsToProduct1() {
    strQuantity += "1";
}
function addUnitsToProduct2() {
    strQuantity += "2";
}
function addUnitsToProduct3() {
    strQuantity += "3";
}
function addUnitsToProduct4() {
    strQuantity += "4";
}
function addUnitsToProduct5() {
    strQuantity += "5";
}
function addUnitsToProduct6() {
    strQuantity += "6";
}
function addUnitsToProduct7() {
    strQuantity += "7";
}
function addUnitsToProduct8() {
    strQuantity += "8";
}
function addUnitsToProduct9() {
    strQuantity += "9";
}
function addToCart() {
    var totalUnits = parseInt(strQuantity, 10);
    strQuantity = "";
    var item = document.getElementById("secondSelect").value;
    var i;
    var price;
    for (i = 0; i < products.length; i++) {
        if (item.search(products[i].name) >= 0) {
            var productWithQuantity = {
                product: products[i],
                untis: totalUnits,
                totalPrice: products[i].price * totalUnits
             };      
            display.innerHTML = productWithQuantity.product.name + " : " + totalUnits;
            shoppingCart.push(productWithQuantity);
            shoppinCartLength++;
        }    
    }
}
//we are not using this function
function reset() {
    var i;
    var rowStart = 3;
    var table = document.getElementById("thisTable");
    for (i = 0; i < shoppinCartLength; i++) {
        table.deleteRow(rowStart);
    }
    shoppinCartLength = 0;
    shoppingCart = [];
    document.getElementById("totalPrice").innerHTML = "Total Price: ";
    document.getElementById("totalTax").innerHTML = "Taxes: ";
    document.getElementById("totalAmt").innerHTML = "Amount Due: ";
}
    var rowStart = 0;
    var grandTotal = 0;
function amtDue() {
    var i;
    var tax;
    var table = document.getElementById("thisTable");
    for (i = 0; i < shoppingCart.length; i++) {
        var cartItem = shoppingCart[i];
        var prdct = cartItem.product;
        console.log(prdct);
        var tlPrice = cartItem.totalPrice;
        grandTotal += tlPrice;
        var myUnits = cartItem.untis;
        var pricePerUnit = prdct.price;
        var myRow = table.insertRow(rowStart);
        rowStart++;
        var dataCell1 = myRow.insertCell(0);
        var dataCell2 = myRow.insertCell(1);
        var dataCell3 = myRow.insertCell(2);
        var dataCell4 = myRow.insertCell(3);
        dataCell1.innerHTML = prdct.name;
        dataCell2.innerHTML = pricePerUnit;
        dataCell3.innerHTML = myUnits;
        dataCell4.innerHTML =  "$"+Number.parseFloat(tlPrice).toFixed(2);
    }
    
    shoppingCart = [];
}
function amtDue2() {
    var tax = grandTotal * 5.0;
    tax = tax / 100;
    
    document.getElementById("totalPrice").innerHTML = "Total Price $: " + grandTotal.toFixed(2);
    document.getElementById("totalTax").innerHTML = "Taxes $: " + tax.toFixed(2);
    document.getElementById("totalAmt").innerHTML = "Amount Due $: " + (grandTotal + tax).toFixed(2);
    
}
function myDisplayDateTime() {
    var date1 = document.getElementById("date");
    var time = document.getElementById("time");
    var date = new Date();
    date1.innerHTML = "Date: " + months[date.getMonth()] + " " + date.getDate() + "," + date.getFullYear();
    var hours = date.getHours()
    if (hours > 12) {
        var min = date.getMinutes();
        if (min < 10) {
            time.innerHTML = "Time: " + (date.getHours() - 12) + ":0" + date.getMinutes() + " PM";
        }
        else {
            time.innerHTML = "Time: " + (date.getHours() - 12) + ":" + date.getMinutes() + " PM";
        }
    }
    else {
        if (min < 10) {
            time.innerHTML = "Time: " + (date.getHours() - 12) + ": 0" + date.getMinutes() + " AM";
        }
        else {
            time.innerHTML = "Time: " + (date.getHours()) + ":" + date.getMinutes() + " AM";
        }
    }
}