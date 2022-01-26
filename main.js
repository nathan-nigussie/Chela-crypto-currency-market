 
$(document).ready(function() {   
 
  $.ajax({
   url:"https://api.n.exchange/en/api/v1/pair/?limit=10",
   type:"GET",
   dataType:'json',
   success:function loadcrypto(result){   
        result.forEach(function(element) {
        $("#tdata").append("<tr>"+              // appending the data obtained from the api to tdata class
        '<td>'+element.name+'</td>' +
        '<td>'+element.base+'</td>' +
        '<td>'+element.quote+'</td>' +
        '<td>'+element.fee_ask+'</td>' +
        // '<td>'+'<button  onclick="checkIfAvailable(this);" class="buy_btn" value="'+element.name+'">Buy</button>'+'</td>'+
        '<td>'+'<button class="buy_btn btn btn-primary" >Buy</button>'+'</td>'+
        '<td>'+'<button class="sell_btn btn btn-danger">Sell</button>'+'</td>'+
      + "</tr>" );

      });
      
   },
    
    
   });


   $(".mydatatable").on('click','.buy_btn',function(){
    // get the current row
    var currentRow=$(this).closest("tr"); // accessing the row associated with the buy_btn
    var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    alert(col1+""+" is not available for sell");
    });
    $(".mydatatable").on('click','.sell_btn',function(){
      // get the current row
      var currentRow=$(this).closest("tr"); // accessing the row associated with the buy_btn
      var col2=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
      alert("Sells for "+ col2 +" " + "is not Activated");
      });
});
  






   






   
   