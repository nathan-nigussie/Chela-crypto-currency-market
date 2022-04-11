$(document).ready(function() {

    var baseurl = "https://api.n.exchange/en/api/v1/pair/?limit=10";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseurl + "/all", true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var blockChains = JSON.parse(xmlhttp.responseText);
            $("#blockChain_Table").DataTable({
                data: blockChains,
                "columns": [
                    { "data": "name" },
                    { "data": "base" },
                    { "data": "quote" },
                    { "data": "fee_ask" },
                    {
                        "data": function() {
                            return "<button type='button' class='btn btn-primary'>Buy</button><button type='button' class='btn btn-danger' style='margin-left:55px'>Sell</button>"
                        }
                    }

                ],

            });
        }
    }
    xmlhttp.send();


    $("#blockChain_Table").on('click', '.btn.btn-primary', function() {
        // get the current row

        var currentRow = $(this).closest("tr"); // accessing the row associated with the buy_btn
        var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        alert(col1 + "" + " is not available for sell");
    });
    $("#blockChain_Table").on('click', '.btn.btn-danger', function() {
        // get the current row
        var currentRow = $(this).closest("tr"); // accessing the row associated with the buy_btn
        var col2 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        alert("Sells for " + col2 + " " + "is not Activated");
    });


});




//alternative way of using ajax call to api and append our table

// $.ajax({
//     url: "https://api.n.exchange/en/api/v1/pair/?limit=10",
//     type: "GET",
//     dataType: 'json',
//     success: function loadcrypto(result) {
//         result.forEach(function(element) {
//             $("#tdata").append("<tr>" + // appending the data obtained from the api to tdata class
//                 '<td>' + element.name + '</td>' +
//                 '<td>' + element.base + '</td>' +
//                 '<td>' + element.quote + '</td>' +
//                 '<td>' + element.fee_ask + '</td>' +
//                 // '<td>'+'<button  onclick="checkIfAvailable(this);" class="buy_btn" value="'+element.name+'">Buy</button>'+'</td>'+
//                 '<td>' + '<button class="buy_btn btn btn-primary" >Buy</button>' + '</td>' +
//                 '<td>' + '<button class="sell_btn btn btn-danger">Sell</button>' + '</td>' +
//                 +"</tr>");

//         });

//