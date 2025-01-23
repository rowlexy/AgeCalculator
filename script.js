const { Datetime } = luxon
console.log(luxon)
const enterAge = document.getElementById("enter-age")
const labelDate = document.createElement("label")
const inputDate = document.createElement("input")
const submitBtn = document.createElement("button")
enterAge.append(labelDate)
labelDate.setAttribute("for", "birth-date")
labelDate.textContent = `Enter your birth date: `
submitBtn.textContent = `Calculate`
enterAge.append(inputDate)
enterAge.append(submitBtn)
inputDate.setAttribute("id", "birth-date")
inputDate.setAttribute("type", "date")
inputDate.setAttribute("name", "birth-date")
inputDate.setAttribute("required", true)
submitBtn.setAttribute("id", "calculate")
const calculateAge = document.getElementById("calculate")
calculateAge.addEventListener("click", () => {
  const birthDateValue = document.getElementById("birth-date").value
  if(!birthDateValue) {
    document.getElementById("output").innerText = `Please enter your birthdate.`
    return
  }
  const birthDate = DateTime.fromISO(birthDateValue);
  const today = DateTime.now();
   
    const diff = today.diff(birthDate, ["years", "months", "days"]).toObject();
    const resultText = `You are ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days old.`;
    document.getElementById("output").innerText = resultText;

})
