$(document).ready(function() {
                var temp = 0;
                var xwon = 0;
                var ywon = 0;
                var tie = 0;
                $.fn.tictactoe = function()
                {
                    var box = [];
                    if( temp % 2 == 0 )
                    {
                        console.log(temp);
                        $(this).val('0');
                        $(this).css("background-color","gray");
                        temp++;
                    }else{
                        console.log(temp);
                        $(this).val('X');
                        $(this).css("background-color","skyblue");
                        temp++;
                    }

                    box =  [$("#box1").val(),$("#box2").val(),$("#box3").val(),$("#box4").val(),
                    $("#box5").val(),$("#box6").val(),$("#box7").val(),$("#box8").val(),
                    $("#box9").val()];
                    // Check X user
                    if( 
                        box[0] == 'X' && box[1] == 'X' && box[2] == 'X'||
                        box[3] == 'X' && box[4] == 'X' && box[5] == 'X'||
                        box[6] == 'X' && box[7] == 'X' && box[8] == 'X'||
                        box[0] == 'X' && box[4] == 'X' && box[8] == 'X'||
                        box[2] == 'X' && box[4] == 'X' && box[6] == 'X'||
                        box[1] == 'X' && box[4] == 'X' && box[7] == 'X'||
                        box[6] == 'X' && box[4] == 'X' && box[2] == 'X'||
                        box[0] == 'X' && box[3] == 'X' && box[6] == 'X'

                        )
                    {
                        alert("X is won the game!");
                        ++xwon;
                        $('#xwon').text('X won '+xwon+' time(s)');
                        temp = 0;
                    }
                    // Check 0 user
                    else if( 
                        box[0] == '0' && box[1] == '0' && box[2] == '0'||
                        box[3] == '0' && box[4] == '0' && box[5] == '0'||
                        box[6] == '0' && box[7] == '0' && box[8] == '0'||
                        box[0] == '0' && box[4] == '0' && box[8] == '0'||
                        box[2] == '0' && box[4] == '0' && box[6] == '0'||
                        box[1] == '0' && box[4] == '0' && box[7] == '0'||
                        box[6] == '0' && box[4] == '0' && box[2] == '0'||
                        box[0] == '0' && box[3] == '0' && box[6] == '0'
                        )
                    {
                        alert("0 is won the game!");
                        ++ywon;
                        $('#ywon').text('0 won '+ywon+' time(s)');
                        temp = 0;
                    }
                    //Check whether macth is tie or not
                    else if(temp == 9){
                        alert("Match is tie!");
                        ++tie;
                        $('#tie').text('Tie '+tie+' time(s)');
                        temp = 0;
                    }
                   
                }

                //Events for input
                $('#box1').click(function(){
                    $('#box1').tictactoe()
                });
                $('#box2').click(function(){
                    $('#box2').tictactoe()
                });
                $('#box3').click(function(){
                    $('#box3').tictactoe()
                });
                $('#box4').click(function(){
                    $('#box4').tictactoe()
                });
                $('#box5').click(function(){
                    $('#box5').tictactoe()
                });
                $('#box6').click(function(){
                    $('#box6').tictactoe()
                });
                $('#box7').click(function(){
                    $('#box7').tictactoe()
                });
                $('#box8').click(function(){
                    $('#box8').tictactoe()
                });
                $('#box9').click(function(){
                    $('#box9').tictactoe()
                });

                 // Refresh content only
                 $('#refresh').click(function(){
                    console.log('refresh is work!');
                    var i;
                    for(i=1;i<=9;i++)
                    {
                        $('#box'+i).css('background-color','white');
                        $('#box'+i).val('+');
                    }
                });
});