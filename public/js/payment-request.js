function generateLink(valid){
  $(".btn-submit").prop("disabled",true);

  if(valid==false){ 
    $(".btn-submit").prop("disabled",false);
    return; 
  }

  bURL = base_url + '/Paymaya/request_payment';
  $.ajax({
    url: bURL,
    type: "POST",
    dataType: 'json',
    data: $("#PaymentForm").serialize(),
    success: function(response){
      window.location.href = response.redirectUrl;
    },
    error: function(){
      $(".btn-submit").prop("disabled",false);
    }
  });//END:: AJAX

}//END:: generateLink