const displayTime = document.getElementById("displayTime");

export function dateAndTime() {
  var dateString = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", " - ");
  displayTime.innerText = formattedString;
}