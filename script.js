function calculateMarks() {
    // Get input values
    let name = document.getElementById("name").value;
    let math = parseFloat(document.getElementById("math").value);
    let science = parseFloat(document.getElementById("science").value);
    let english = parseFloat(document.getElementById("english").value);
  
    // Check if any field is empty
    if (!name || isNaN(math) || isNaN(science) || isNaN(english)) {
      alert("Please fill in all the fields with valid marks.");
      return;
    }
  
    // Calculate total marks and average
    let totalMarks = math + science + english;
    let averageMarks = totalMarks / 3;
  
    // Determine grade based on average
    let grade = "";
    if (averageMarks >= 90) {
      grade = "A+";
    } else if (averageMarks >= 80) {
      grade = "A";
    } else if (averageMarks >= 70) {
      grade = "B";
    } else if (averageMarks >= 60) {
      grade = "C";
    } else if (averageMarks >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    // Display results
    document.getElementById("studentName").innerText = `Student: ${name}`;
    document.getElementById("totalMarks").innerText = `Total Marks: ${totalMarks}`;
    document.getElementById("averageMarks").innerText = `Average Marks: ${averageMarks.toFixed(2)}`;
    document.getElementById("grade").innerText = `Grade: ${grade}`;
  }
  