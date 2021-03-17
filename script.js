

// Dit is voor een andere weergave overdag
function clock(){
    var today = new Date();
         // dit is alleen voor de seconden. Moet dus ook nog voor minuten en uren gebeuren. Dit MOET binnen de functie om elke seconde te verversen
        var seconds = today.getSeconds();
        var hour = today.getHours();

        // Dus vanaf 9 uur 'sochtends tot 9 uur 's avonds
        if (hour >= 7 && hour < 12) {
            document.body.style.backgroundImage = "url('img/stage1/o_lucht.jpg')";
            document.getElementById('tent').style.backgroundImage = "url('img/stage1/o_tent.png')";
        }

            else if(hour >= 12 && hour < 17){
                document.body.style.backgroundImage = "url('img/stage2/m_lucht.jpg')";
                document.getElementById('tent').style.backgroundImage = "url('img/stage2/m_tent.png')";
            }
            
            else if(hour >= 17 && hour < 21){
                document.body.style.backgroundImage = "url('img/stage3/a_lucht.jpg')";
                document.getElementById('tent').style.backgroundImage = "url('img/stage3/a_tent.png')";
            }

            else if(hour >= 21 && hour < 7){
                document.body.style.backgroundImage = "url('img/stage4/n_lucht.jpg')";
                document.getElementById('tent').style.backgroundImage = "url('img/stage4/n_tent.png')";
            }


        // Als er minder dan 10 seconden is, dus 0 t/m 9, dan moet er een 0 voor de seconden
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

    document.getElementById('weekDay').innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + seconds;
}

clock();
setInterval(clock, 1000);