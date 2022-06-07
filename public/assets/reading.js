$(document).ready(function(){
    $('button').on('click', function(){

        $.ajax({
        type: 'POST',
        url: '/reading',
        success: function(data){
            //do something with the data via front-end framework
            location.reload();
        }
        });

        return false;

    });
});