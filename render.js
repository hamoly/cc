$(document).ready(function(){
    // fetching data from coinmarketcap api
    $.getJSON("https://api.coinmarketcap.com/v1/ticker/?limit=0&fbclid=IwAR0aW5q7LQNeHXeCoelTR3_0k2Pyj02QsxZINDlhXn4c3GZ0x6n11BDbl1o", function(data){
        var ccData = '';
        // rendering data in td within the cc table
        $.each(data, function(key, value){
            ccData += '<tr>';
            ccData += '<td>'+value.id+'</td>';
            ccData += '<td>'+value.name+'</td>';
            ccData += '<td>'+value.symbol+'</td>';
            ccData += '<td>'+value.price_usd+'</td>';
            ccData += '<td>'+value.market_cap_usd+'</td>';
        });
        $('#cc').append(ccData);
    });
});