function getdata() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var result = document.getElementById('resultField');

    if (!x.value || !y.value) {
        alert("Enter a value");
    } else {
        console.log(x + " and " + y);

        var answer = ((x / y)*100);
        console.log(answer);
        result.innerText = "Answer is " + answer + " %";
    }
}



