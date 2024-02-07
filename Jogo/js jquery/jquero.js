var interval = null
$(document).ready(function(){
    $(btn_start).click(function(){
       var p1 = $("input[id=player1]").val();
        var p2 = $("input[id=player2]").val();

        if(p1.trim().length > 0 && p2.trim().length > 0){
            $(".msg").text("");
            startgame();
        }
        else{
            $(".msg").text("Preencha o(s) Nome(s) antes de começar :)");
        };
    });
});
function startgame (){
    var countclick = 0
     interval = setInterval(timepast, 500)
    $("table td").click(function(){
        countclick++;
        if(countclick <= 9){
            if(countclick % 2 == 0){
                $(this).text("O").css("color" , "red");
                $("#player1").css("border-color" , "blue");
                $("#player2").css("border-color" , "lightgray");
            }else{
                $(this).text("X").css("color" , "blue");
                $("#player1").css("border-color" , "lightgray");
                $("#player2").css("border-color" , "red");
            };
            if(verifywinner() == true){
                countclick = 9;
            };
            if(countclick == 9){
                $(".msg").append("<br>Jogo encerrado");
                clearInterval(interval);
            }
            
        }
        
    });
}
function verifywinner(){
        var winner = [
            //linhas
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //colunas 
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //diagonais
            [0, 4, 8],
            [6, 4, 2]
        ];

        var X = new Array(9);
        var O = new Array(9);
        $("table td").each(function(key, value){
            if( $(this).text() == "X" ){
                    X[key] = key;
            }

            if( $(this).text() == "O" ){
                O[key] = key;
            }
        });
       return defwinner( X, O, winner);

}
function defwinner(X, O, winner){
    //percorre linhas
    for(var i = 0; i < winner.length; i++ ){
            countX = 0 ;
            countO = 0 ;
            //percorre colunas da linha
            for(var y = 0; y < winner[i].length; y++){
                if( X[winner[i][y]] == winner[i][y] ){
                    countX++;
                }
                if( O[winner[i][y]] == winner[i][y] ){
                    countO++;
                }
                winner[i][y]
            }
            var p1 = $("input[id=player1]").val();
            var p2 = $("input[id=player2]").val();
            if( countX == 3){
                $(".msg").text("X - " + p1 + " Ganhou ");
                return true;
                alert("X ganhou")
            }
            if( countO == 3){
                $(".msg").text("O - " + p2 + " Ganhou ");
                return true;
            }
        }
}
var inicioJogo = null
function timepast(){
    if(inicioJogo == null){
        inicioJogo = new Date();
    }
    var dateNow = new Date();
    var seg_start = inicioJogo.getSeconds();
    var seg_now = dateNow.getSeconds();
    var min_start = inicioJogo.getMinutes();
    var min_now = dateNow.getMinutes();
    var hour_start = inicioJogo.getHours();
    var hour_now = dateNow.getHours();
    var time_start = inicioJogo.getTime();
    var time_now = dateNow.getTime();
    var timedec = time_now - time_start;
    var nd = new Date (timedec);
    $("#time").text(//"Inicio do Jogo: " + hour_start + ":" + min_start + ":" + seg_start +
     //"- Hora atual: " + hour_now + ":" + min_now + ":" + seg_now+
      " Tempo:  " + nd.getMinutes() + ":" + nd.getSeconds());
};
$(document).ready(function(){
    $("#restart").click(function(){
        location.reload(true);
    });
});

