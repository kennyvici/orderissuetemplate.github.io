	 
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
                text += '\n\nUnfortunately, it was the very last piece in that size so we do not have an alternate to send.We sincerely apologize for any inconvenience this may have caused and we appreciate your patience.';
                text += '\n\nWe have processed a refund to the method of payment used for this item. You will receive an email notification for the refund shortly.' 
                text += "\nWe would like to offer you a 25% off one-time use promotional code to apply to your next purchase as our apologies: SORRY25";
                text += "\n\nSo sorry again for the inconvenience! ";
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
                    var text = 'Thank you for shopping with us!'
                text += "\n\nOur sincerest apologies for the delay with your order.";    
                text += '\n\nDuring our Quality Control process, our team found damage to the. ' +$("#Description").val();
                text += " Unfortunately, it was the very last piece in that size and we do not have an alternate to send.";
                text += "\n\nWe have processed a refund to the method of payment for this missing item and the remaining items in your order are being shipped now! You will receive tracking information for your order within the next 1-2 business days.";
                text += '\n\nWe appreciate your patience!';
                text += 'So sorry again for any inconvenience this may have caused!';     
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
    
