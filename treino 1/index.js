let productValue = Number(prompt('enter the product value: '))

if(productValue >= 20){
    document.getElementById('result').innerHTML = 'approved'

}else{
    document.getElementById('result').innerHTML = 'Denied'

}