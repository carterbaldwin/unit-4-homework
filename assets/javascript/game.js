

$(document).ready(function() {


    var yellow=0;
    var blue=0;
    var green=0;
    var pink=0;
    var goal=0;
    var currentTotal=0;
    var wins=0;
    var losses=0;

     $("#wins").text("wins: " + wins);
     $("#losses").text("losses: " + losses);


    function clear(){
        yellow = Math.floor((Math.random() * 10) + 1);
        blue = Math.floor((Math.random() * 10) + 1);
        green = Math.floor((Math.random() * 10) + 1);
        pink = Math.floor((Math.random() * 10) + 1);
        goal = Math.floor((Math.random() * 40) + 20);
        currentTotal=0;


        $("#goal").text(goal);
        $("#current-total").text(currentTotal);

    }

    clear();    



    
    $(".gem").on("click", function() {
        console.log(this)

        var color = $(this).attr("color");

        if (color==="yellow"){
            currentTotal=currentTotal+yellow;
            $("#current-total").text(currentTotal);

        }

        else if (color==="blue"){
            currentTotal=currentTotal+blue;
            $("#current-total").text(currentTotal);

        }

        else if (color==="green"){
            currentTotal=currentTotal+green;
            $("#current-total").text(currentTotal);

        }

        else if (color==="pink"){
            currentTotal=currentTotal+pink;
            $("#current-total").text(currentTotal);

        }

        if (currentTotal===goal){
            wins++;
            $("#wins").text("wins: " + wins);
            $("#directions").text("you won! press the crystals to play again")
            clear();

        }

        else if (currentTotal>goal){
            losses++;
            $("#losses").text("losses: " + losses);
            $("#directions").text("you lost :( press the crystals to play again")
            clear();

        }



    });

}); 