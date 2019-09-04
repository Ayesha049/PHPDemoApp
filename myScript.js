$(document).ready(function(){
    $("#btn").on("click",function(){

        var txt1 = $("#name").val();
        var txt2 = $("#comment").val();

        var div1 = '<div class="textt" >' + 
        '<div class="msg">' + txt1 + "</div>" +
        '<div>' + txt2 + "</div>" +   
                    "</div>";

            
        if(txt1!="" && txt1!=null && txt2!="" && txt2!=null)
        {
            $("#msgs").prepend(div1);           
            $("#name").css("background-color", "white");
            $("#name").val("");
            $("#comment").css("background-color", "white");
            $("#comment").val("");
        }
        else{
            if(txt1=="" || txt1==null)
            {
                $("#name").addClass("warn");
            }
            else{
                $("#name").css("background-color", "white");
            }
            if(txt2=="" || txt2==null)
            {
                $("#comment").addClass("warn");
            }
            else{
                $("#comment").css("background-color", "white");
            }
        }
    });

    /*$("#btn1").on("click",function(){
        // $("#ajxtest").load("test.txt");
        $.get("https://api.bitbucket.org/2.0/repositories/rakib17", function(data, status){
            console.log("Data: ",  data );
          });
    });*/
});

