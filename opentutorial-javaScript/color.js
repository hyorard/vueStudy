var colorSetter = {
    Body: function (day){
        // var Body = document.querySelector('body');
        // if(day === '밤'){
        //     Body.style.backgroundColor = 'black';
        //     Body.style.color = 'white';
        // }
        // else{
        //     Body.style.backgroundColor = 'white';
        //     Body.style.color = 'black';
        // }
        if(day === '밤'){
            $('body').css('color', 'white');
            $('body').css('backgroundColor', 'black');
        }
        else{
            $('body').css('color', 'black');
            $('body').css('backgroundColor', 'white');
        }
    },
    heading: function (day){
        // var heading = document.querySelector('.heading');
        // if(day === '밤'){
        //     heading.style.color = 'white';
        //     heading.style.backgroundColor = 'darkred';
        // }
        // else{
        //     heading.style.color = 'powderblue';
        //     heading.style.backgroundColor = 'darkblue';
        // }
        if(day === '밤'){
            $('.heading').css('color', 'white');
            $('.heading').css('backgroundColor', 'darkred');
        }
        else{
            $('.heading').css('color', 'powderblue');
            $('.heading').css('backgroundColor', 'darkblue');
        }
    },
    Link: function (day){
        // var favorPlayers = document.querySelectorAll('a');
        // var i = 0;
        // if(day === '밤'){
        //     color = 'powderBlue';
        // }
        // else{
        //     color = 'darkBlue';
        // }
        // while(i<favorPlayers.length){
        //     favorPlayers[i].style.color = color;
        //     i += 1;
        // }
        if(day === '밤'){
            $('a').css('color', 'powderBlue');
        }
        else{
            $('a').css('color', 'darkBlue');
        }
    },
};
