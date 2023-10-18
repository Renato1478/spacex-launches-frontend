// Function to format the date in Brazilian format (dd/mm/yyyy hh:mm)
export function formatBrazilianDateTime(dateTime: Date) {
  var day = dateTime.getDate().toString().padStart(2, "0");
  var month = (dateTime.getMonth() + 1).toString().padStart(2, "0"); // Months in JavaScript are zero-based, so we add 1.
  var year = dateTime.getFullYear();
  var hour = dateTime.getHours().toString().padStart(2, "0");
  var minute = dateTime.getMinutes().toString().padStart(2, "0");

  return day + "/" + month + "/" + year + " " + hour + ":" + minute;
}
