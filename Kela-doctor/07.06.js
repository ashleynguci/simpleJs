// 07.06 JavasScript code

// Define a function (1.)
function kelaReimbursement(length) {
  var value = 0;
  if (length <= 10) {
    value = 8;
  } else if (length <= 20 && length > 10) {
    value = 11.5;
  } else if (length <= 30 && length > 20) {
    value = 12.5;
  } else if (length <= 40 && length > 30) {
    value = 13.5;
  } else {
    value = 16.5;
  }
  return value;
}
// Define a function (2.)
function paymentAfterKela(doctorsFee, kelaReimbursement) {
  return doctorsFee - kelaReimbursement;
}
// Define a function (3.)

// Complete the code of the function calculate.
function calculate() {
  // 1. Get values from the input fields
  var length = parseInt(document.getElementById("txtLength").value);
  var doctorsFee = parseFloat(document.getElementById("txtDoctorsFee").value);
  var officeFee = 15.9;
  var a = kelaReimbursement(length);
  var payment = paymentAfterKela(doctorsFee, a);
  document.getElementById("divOutput").innerHTML =
    "Doctor's Fee " +
    doctorsFee +
    " euros." +
    "<br>" +
    "Kela reimbursement " +
    a +
    " euros." +
    "<br>" +
    "Office Fee " +
    officeFee +
    " euros" +
    "<br>" +
    "Customer needs to pay " +
    (payment + officeFee) +
    " euros.";
  // 2. Call the function (1.) which calculates Kela reimbursement
  // 3. Call the function (2.) which calculates amount left for the customer to pay
  // 4. Display the answer
}
