//An Array of Disney Shows 
var disney =["Aladdin","Beauty and the Beast","The Little Mermaid","Finding Nemo","Toys Story","UP","Bambi"];
//create buttons for each show 
function creatButtons(){
    $('#buttonOriginal').empty(); //avoiding duplicates 
//looping thru shows 
for (var i=0; i<disney.length; i++){
    var button=$('<button>');
    button.addClass('disneyshows');
    button.attr('date-name',disney[i]);
    button.text(disney[i]);
    $("buttonOriginal").append(button);
    }
}

function showGifs(){
    var disney=$(this).attr("data-name");
    //console.log(disney); it worked!
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + disney + "&api_key=VMdp7LyrDEY0uYvsr3Wth3EJBynw4fw7";

}