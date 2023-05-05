function convert() {
    let temp = document.getElementById("temp").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;

    if (from == "celsius" && to == "fahrenheit") {
        result = (temp * 9/5) + 32;
    } else if (from == "fahrenheit" && to == "celsius") {
        result = (temp - 32) * 5/9;
    } else {
        result = temp;
    }

    document.getElementById("result").innerHTML = result.toFixed(2) + " " + to.toUpperCase();
}
