
function selected_payment(link){
  window.location.href = link;
}

$("#phone-number").keypress(function (e) {
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false;
  }
});