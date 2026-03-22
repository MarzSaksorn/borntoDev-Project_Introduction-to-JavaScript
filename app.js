
function taxcal(){
    let income = document.getElementById("income").value
    if  (income < 150001){
        document.getElementById("result").innerHTML = "Are you poor?"
    } else if (150000 < income, income < 300001) {
        sum = (income - 150000)*5/100
        document.getElementById("result").innerHTML = sum.toFixed(2) + " ฿"
    } else if (300000 < income, income < 500001) {
        sum = 7500
        sum1 = (income - 300000)*10/100
        result = (sum+sum1).toFixed(2)
        document.getElementById("result").innerHTML = result + " ฿"
    } else if (500000 < income, income < 750001){
        sum = 7500
        sum1 = 20000
        sum2 = (income - 500000)*15/100
        result = (sum+sum1+sum2).toFixed(2)
        document.getElementById("result").innerHTML = result + " ฿"
    } else if (750000 < income, income < 1000001){
        sum = 7500
        sum1 = 20000
        sum2 = 37500
        sum3 = (income - 750000)*20/100
        result = (sum+sum1+sum2+sum3).toFixed(2)
        document.getElementById("result").innerHTML = result + " ฿"
    } else if (1000000 < income, income < 2000001){
        sum = 7500
        sum1 = 20000
        sum2 = 37500
        sum3 = 50000
        sum4 = (income - 1000000)*25/100
        result = (sum+sum1+sum2+sum3+sum4).toFixed(2)
        document.getElementById("result").innerHTML = result + " ฿"
    } else if (2000000 < income, income < 5000001){
        sum = 7500
        sum1 = 20000
        sum2 = 37500
        sum3 = 50000
        sum4 = 250000
        sum5 = (income - 2000000)*30/100
        result = (sum+sum1+sum2+sum3+sum4+sum5).toFixed(2)
        document.getElementById("result").innerHTML = result + " ฿"
    } else {
        sum = 7500
        sum1 = 20000
        sum2 = 37500
        sum3 = 50000
        sum4 = 250000
        sum5 = 900000
        sum6 = (income - 5000000)*35/100
        result = (sum+sum1+sum2+sum3+sum4+sum5+sum6).toFixed(2)
        document.getElementById("result").innerHTML = result + " ฿"
    }
}