function convertNumber() {

    let input = document.getElementById("numberInput").value.trim();
    let result = document.getElementById("result");
    let error = document.getElementById("error");

    result.innerHTML = "";
    error.innerHTML = "";

    // Allow only digits
    if (!/^\d+$/.test(input)) {
        error.innerHTML = "Only numbers are allowed.";
        return;
    }

    let num = parseInt(input);

    // Range validation
    if (num < 0 || num > 999) {
        error.innerHTML = "Enter number between 0 and 999 only.";
        return;
    }

    result.innerHTML = numberToWords(num);
}

function numberToWords(num) {

    let ones = [
        "Zero","One","Two","Three","Four",
        "Five","Six","Seven","Eight","Nine"
    ];

    let teens = [
        "Ten","Eleven","Twelve","Thirteen","Fourteen",
        "Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"
    ];

    let tens = [
        "", "", "Twenty","Thirty","Forty",
        "Fifty","Sixty","Seventy","Eighty","Ninety"
    ];

    if (num < 10)
        return ones[num];

    else if (num < 20)
        return teens[num - 10];

    else if (num < 100)
        return tens[Math.floor(num / 10)] +
            (num % 10 ? " " + ones[num % 10] : "");

    else
        return ones[Math.floor(num / 100)] + " Hundred" +
            (num % 100 ? " " + numberToWords(num % 100) : "");
}
