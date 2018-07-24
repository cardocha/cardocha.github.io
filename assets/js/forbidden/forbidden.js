$(document).ready(function(){

    setInterval(decrement,1000);

    function decrement()
    {
        var num = parseInt($("#numeroContagem").text());
        var strNum = "";
        if(num > 0) {
            num--;
            strNum =  String(num);
            $("#numeroContagem").text(strNum);
        }
        else
        {
            location.href = Util.baseUrl;
        }

    }

});