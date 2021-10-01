


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
    $(".p").text("Number of People");
    if(totalPersons == ''){
        $(".if3").addClass("ceroValue");
        $(".p").append("   Can't be zero");
    }
    else{
        $(".if3").removeClass("ceroValue");
    }
    $(".btn").removeClass("pressed");
    $(this).addClass("pressed");
    $(".resetb").addClass("pressed");
    calculateTip(totalBill,totalPersons,tipValue)
});

$(".resetb").click(function(){
    $(".price1").text("$0.00");
    $(".price2").text("$0.00");
    document.getElementById("numTotalBill").value = '';
    document.getElementById("numTotalPersons").value = '';
    $(".btn").removeClass("pressed");
    $(".if3").removeClass("ceroValue");
    $(".p").text("Number of People");
});