function onClickButton(){
    var radio = $("input[type='radio']:checked").val()
    var select = $("#inputState").val();
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    
    var comando =radio+" "+select+" "+input1+" "+input2;
    postExecute(comando);
    
}
function postExecute(comando){
    $.ajax({
        url: "http://localhost:8888",
        type: "post",
        data: comando ,
        success: function (response) {
            $("#command").text(comando);
            $("#result").val(response); 
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#command").val(errorThrown)   
        }


    });
}

function onClickSH(comando){
    postExecute(comando);
}