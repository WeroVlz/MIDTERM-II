


function calculateTip(totalBillC,totalPersonsC, tipValueC){
    if(totalBillC != 0 && totalPersonsC != 0){
        const billTip = parseFloat((totalBillC*tipValueC)/100);
        const billAmount = parseFloat(totalBillC);
        const totalAmount = (billAmount + billTip);
        var totalPerson = (totalAmount/totalPersonsC);
        totalPerson = totalPerson.toFixed(2);
        var tipPerson = (billTip/totalPersonsC);
        tipPerson = tipPerson.toFixed(2);
        $(".price1").text("$" + tipPerson);
        $(".price2").text("$" + totalPerson);
        $("hsl(172, 67%, 45%)").addClass("pressed");
        console.log(totalAmount);
        console.log(totalPerson);
    }

}


$(".btn").click(function(){
    var totalBill = document.getElementById("numTotalBill").value;
    var totalPersons = document.getElementById("numTotalPersons").value;
    var tipValue = $(this).attr("value");
    calculateTip(totalBill,totalPersons,tipValue)
});