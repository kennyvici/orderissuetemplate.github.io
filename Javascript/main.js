	 
	 $("#Template").focus();
        function CreateData(val){
            if(val == 1){
                $("#Template").val('0');
                $("#Description").val('');
                $("#displayBox").val('');
                $("#ECGAmount").val('');
                $("#Template").focus();
                $('#displayBox').prop("disabled", false);
                $("#AdditionalAmount").addClass('hidden');
                $("#AdditionalAmountLabel").addClass('hidden');
                $("#AdditionalAmount").prop('checked', false);
            }else{
            <!-- Order Issue Template-->
            
            	if ($("#Template").val() == 1) {
                var text = 'Thank you for shopping with VICI!'
                text += "\n\nDuring our Quality Control process, our team found damages to the following item:";
                text += '\n\n'+$("#Description").val();
                text += '\n\nUnfortunately, it was the very last piece in that size so we do not have an alternate to send. We are so very sorry for the inconvenience and appreciate your patience. We have the following options to offer you:';
                text += '\n\n-Store credit for the item ' 
                if ($("#ECGAmount").val()) {
                            text += 'plus an additional $' +$("#ECGAmount").val();
                        }
                        if ($("#AdditionalAmount25").is(':checked')) {
                            text += 'plus an additional $25';
                        }
                         if ($("#AdditionalAmount40").is(':checked')) {
                            text += 'plus an additional $40';
                        }
                text += "\n-Refund to your original method of payment used to place this order";
                text += "\n\nLet us know which you would prefer. The rest of your Order will be shipping now!";
                text += "\n\nAgain we're so sorry for the inconvenience and thank you so much for your patience!";
                text += "\n\nSincerely,";
                text += "\nVICI";
                }
                else {
                
            <!-- Cancel Template -->
            if ($("#Template").val() == 2) {
                    var text = 'Thank you for shopping with VICI!'
                text += "\n\nDuring our Quality Control process, our team found damages to the following item:";
                text += '\n\n'+$("#Description").val();
                text += '\n\nUnfortunately, it was the very last piece in that size so we do not have an alternate to send. We are so very sorry for the inconvenience and your patience. We have the following options to offer you:';
                text += '\n\n-Store credit for the item '
                if ($("#ECGAmount").val()) {
                            text += 'plus an additional $' +$("#ECGAmount").val();
                        }
                if ($("#AdditionalAmount25").is(':checked')) {
                            text += 'plus an additional $25';
                        }
                         if ($("#AdditionalAmount40").is(':checked')) {
                            text += 'plus an additional $40';
                        }
                text += "\n-Refund to your original method of payment used to place this order";
                text += "\n\nLet us know which you would prefer.";
                text += "\n\nSo sorry for the inconvenience and thank you so much for your patience!";
                text += "\n\nSincerely,";
                text += "\nVICI";
                }
                
                }
                
                  <!-- Special Order -->
            if ($("#Template").val() == 3) {
                    var text = 'Thank you for shopping with VICI!'
                text += "\n\nWe apologize for the delay in shipping and appreciate your patience. We had an issue fulfilling";
                text += '\n\n'+$("#Description").val();
                text += '\n\nWe will ship the rest of the order now and the replacement item in 1 week or less. Thank you for your patience! We will send tracking for the other item when it ships.';
                text += "\n\nSo sorry for any inconvenience!";
                text += "\n\nSincerely,";
                text += "\nVICI";
                }
                
            
            
            else {
                
            <!-- Reprints -->
             if ($("#Template").val() == 4) {
                    var text = 'We apologize sincerely for any delay in the shipment of your order!'
                text += "\n\nWe had looked in our system and saw that your order was not shipped within our processing time frame. We are not sure why this order was not shipped or if it is lost :( We sincerely apologize!";    
                text += "\n\nWe reprinted the order and re-pulled the items, but we don't have all of the items";
                text += "\n\nWe currently do not have the following:";
                text += '\n\n'+$("#Description").val();
                text += '\n\nI can offer you Store Credit ';
                 if ($("#ECGAmount").val()) {
                            text += 'plus an additional $' +$("#ECGAmount").val() + ' ' ;
                        }
                        if ($("#AdditionalAmount25").is(':checked')) {
                            text += 'plus an additional $25 ';
                        }
                         if ($("#AdditionalAmount40").is(':checked')) {
                            text += 'plus an additional $40 ';
                        }
                text += 'or a Refund for the items.';     
                text += "\n\nPlease advise which option works best for you!";
                text += "\n\nThank you and our apologies!";
                text += "\n\nSincerely,";
                text += "\nVICI";		
                }
                
                }
            
            <!--Enter New Template Above This Line-->

                $("#displayBox").val(text);
                $("#Template").focus();
                $('#displayBox').prop("enable", true);
            }
            
            
            
            
            
        }


    

    
    function copied(){
  var copyText = document.getElementById("displayBox");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}
    
