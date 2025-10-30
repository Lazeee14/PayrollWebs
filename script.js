function saveAndGo() {
  const idnum = document.getElementById("idnum").value;
  const lname = document.getElementById("lname").value;
  const fname = document.getElementById("fname").value;
  const mname = document.getElementById("mname").value;
  const position = document.getElementById("position").value;
  const rate = parseFloat(document.getElementById("rate").value);
  const days = parseFloat(document.getElementById("days").value);

  const grossPay = rate * days;
  const sss = grossPay * 0.05;
  const pagibig = grossPay * 0.03;
  const philhealth = grossPay * 0.02;
  const tax = grossPay * 0.05;
  const totalDeduction = sss + pagibig + philhealth + tax;
  const netPay = grossPay - totalDeduction;

  const payroll = {
    idnum,
    lname,
    fname,
    mname,
    position,
    rate,
    days,
    grossPay,
    sss,
    pagibig,
    philhealth,
    tax,
    totalDeduction,
    netPay
  };

  localStorage.setItem("payrollData", JSON.stringify(payroll));
  window.location.href = "result.html";
}