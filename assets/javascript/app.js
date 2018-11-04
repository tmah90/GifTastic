//An Array of Disney Shows 
var disney =["Aladdin","Beauty and the Beast","The Little Mermaid","Finding Nemo","Toys Story","UP","Bambi"];
//create buttons for each show 
function createButtons(){
    $('#buttonOriginal').empty(); //avoiding duplicates 
//looping thru shows 
for (var i=0; i<disney.length; i++){
    var button= $('<button>');
    button.html(disney[i]);
    button.addClass('btn btn-outline-secondary');
    button.attr('data-disney',disney[i]);
    $("buttonOriginal").append(button);
    }
}
//addDisney button 
$('#addDisney').on('click',function(event){
    event.preventDefault();
  var DisneyNew =$("#disney-Input").val().trim();
  disney.push(DisneyNew);
  createButtons();
  return false;
});
//display gifs
function showGifs(){
    var disney=$(this).attr("data-disney");
    //console.log(disney); it worked!
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        disney + "&api_key=dc6zaTOxFJmzC&limit=10";

    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + disney + "&api_key=VMdp7LyrDEY0uYvsr3Wth3EJBynw4fw7&limit=10&tag=disney";
//AJAX GET 
$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
    //   console.log(response.data);
      var results= response.data.image_original_url;
      for(var i=0; i<results.length; i++){
    var gifDiv =$('<div class=gifs>');
    var gifImgs =$('<img>');
    var rating= results[i].rating;
    gifImgs.attr("src", results[i].images.fixed_height.url);
    gifImgs.attr('title','Rating:'+ rating);
    gifImgs.attr('data-still', response[i].images.fixed_height.url);
    gifImgs.attr('data-state',"still");

    gifDiv.append(p);
    gifDiv.prepend(gifImgs);

    $('#disneyContainer').prepend(gifDiv);

    // function for displaying show gifs
    $(document).on("click", ".disney", showGifs);
  }
  });
  createButtons();
}