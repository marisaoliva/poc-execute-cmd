function onClickButton(){
    var radio = $("input[type='radio']:checked").val()
    var select = $("#inputState").val();
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    
    var comando =radio+" "+select;
    
    $.ajax({
        url: "http://localhost:8888",
        type: "post",
        data: comando ,
        success: function (response) {
            comando='';
            $("#command").append(comando)          

        },
        error: function(jqXHR, textStatus, errorThrown) {
            debugger;
            $("#command").append(errorThrown)   
        }


    });
}