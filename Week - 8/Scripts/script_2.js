function calculateResult() {

    // Get marks
    let m1 = parseFloat(document.getElementById("sub1").value);
    let m2 = parseFloat(document.getElementById("sub2").value);
    let m3 = parseFloat(document.getElementById("sub3").value);
    let m4 = parseFloat(document.getElementById("sub4").value);
    let m5 = parseFloat(document.getElementById("sub5").value);

    // Calculate total and average

    let total = m1 + m2 + m3 + m4 + m5;
    let average = total / 5;

    // Determine grade
    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 50)
        grade = "D";
    else
        grade = "Fail";

    // Display results
    document.getElementById("total").innerHTML = "Total Marks: " + total;
    document.getElementById("average").innerHTML = "Average Marks: " + average.toFixed(2);
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}
