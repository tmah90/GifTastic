//An Array of Disney Shows 
var disney =["Aladdin","Beauty and the Beast","The Little Mermaid","Finding Nemo","Toys Story","UP","Bambi"];
//create buttons for each show 
function createButtons(){
    $('#buttonOriginal').empty(); //avoiding duplicates 
//looping thru shows 
for (var i=0; i<disney.length; i++){
    var d= $('<button>');
    d.text(disney[i]);
    d.addClass('btn btn-outline-secondary');
    d.attr('data-disney',disney[i]);
    // d.attr("id","disneybtn");
    $("buttonOriginal").append(d);
    }
}
//display gifs
function showGifs(){
    var disneymovies= $(this).attr("data-disney");
    console.log(disneymovies);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + disneymovies + "&limit=10&api_key=VMdp7LyrDEY0uYvsr3Wth3EJBynw4fw7";
//AJAX GET 
$.ajax({
    url: queryURL,
    method: "GET"})
  .done(function(response){
    //   console.log(response.data);
      var results= response.data;
      for(var i=0; i < results.length; i++){
    var gifDiv =$('<div class= gifs>');
    var rating= response[i].rating;

    var p=$("<p>").html("Rating:"+ rating);
    p.addClass("text-center");

    var gifImgs =$('<img>');
    gifImgs.addClass("gif)");
    gifImgs.attr("src", response[i].images.fixed_height.url);
    // gifImgs.attr('title','Rating:'+ rating);
    gifImgs.attr('data-still', response[i].images.fixed_height.url);
    gifImgs.attr("data-animate", response[i].images.fixed_height.url);
    gifImgs.attr('data-state',"still");

    gifDiv.append(p);
    gifDiv.prepend(gifImgs);

    $('#disneyContainer').prepend(gifDiv);

    //addDisney button 
$('#addDisney').on('click',function(event){
    event.preventDefault();
  var DisneyNew =$("#disneyInput").val().trim();
  disney.push(DisneyNew);
  $("disneyInput").val("");
  createButtons();
  console.log(disney);
});

    // function for displaying show gifs
    $(document).on("click", "#disneybtn", showGifs);

    $(document).on("click", ".gifs", function() {
        var state = $(this).attr("data-state");
    
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
    
  }
  });
  createButtons();
}