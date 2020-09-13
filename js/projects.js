const dialog = document.getElementById("dialog");
let element;
function openDialog(id) {
  element = document.getElementById(id);
  element.style.display = "flex";
  dialog.style.display = "flex";
}
function closeDialog() {
  element.style.display = "none";
  dialog.style.display = "none";
}
