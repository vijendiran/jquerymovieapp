$(document).ready(function() {
$("body").on("click",".showMovie,.showMovie1,.showMovie2,.showMovie3,.showMovie4,.showMovie5,.showMovie6,.showMovie7,.showMovie8,.showMovie9,.showMovie10,.showMovie11,.showMovie12",showMovieIsClicked);
function showMovieIsClicked() {
  var Titles=$(this).find(".title").html();
  var DirectorGet=$(this).find(".director").html();
  var DirectorNameGet=$(this).find(".directorName").html();
  var BoxOfficeGet=$(this).find(".boxOffice").html();
  var BoxPriceGet=$(this).find(".boxRate").html();
  var PosterGet=$(this).find(".poster").attr('src');

  $("h1").hide();
  $(".plusIcon").hide();
  $(".background-image").hide();
  $(".movieList-container").hide();
  $(".MovieDetails").show();
  $(".MovieDetails h2").html(Titles);
  $(".MovieDetails h3").html(DirectorGet);
  $(".MovieDetails h4").html(DirectorNameGet);
  $(".MovieDetails h5").html(BoxOfficeGet);
  $(".MovieDetails h6").html(BoxPriceGet);
  $(".movie-banner-container img").attr('src',PosterGet);
  $(".movie-banner").fadeOut(1000,function() {
    $(this).fadeIn();
  });
}
$(".submitBtn").click(addBtnIsClicked);
function addBtnIsClicked() {
  var movienames=$(".movieTitle").val();
  var movieyears=$(".movieYear").val();
  var moviedirectors=$(".movieDirector").val();
  var movieboxrate=$(".movieBoxOffice").val();
  var movieimages=$(".movieImage").val();
  var backimage=$(".movieBackgroundImage").val();

  $(".movieList-container").prepend('<div class="showMovie"><img class="dynamic-poster" src="'+movieimages+'"/><p class="title">'+movienames+'</p><small>'+movieyears+'</small><div class="Details-container"><span class="directorName">'+moviedirectors+'</span><span class="boxRate">'+movieboxrate+'</span><img src="'+backimage+'"class="poster"/></div></div>');
  $(".form-container").hide();
}
$(".add-a-movie").click(formwillshow);
function formwillshow() {
  $(".form-container").show();
}
$(".remove-form").click(removeForm);
function removeForm() {
  $(".form-container").hide();
}
$(".remove").click(posterRemove);
function posterRemove() {
  $(".showMovie1").remove();
}
$(".remove1").click(posterRemove1);
function posterRemove1() {
  $(".showMovie2").remove();
}
$(".remove2").click(posterRemove2);
function posterRemove2() {
  $(".showMovie3").remove();
}
$(".remove3").click(posterRemove3);
function posterRemove3() {
  $(".showMovie4").remove();
}
$(".remove4").click(posterRemove4);
function posterRemove4() {
  $(".showMovie5").remove();
}
$(".remove5").click(posterRemove5);
function posterRemove5() {
  $(".showMovie6").remove();
}
$(".remove6").click(posterRemove6);
function posterRemove6() {
  $(".showMovie7").remove();
}
$(".remove7").click(posterRemove7);
function posterRemove7() {
  $(".showMovie8").remove();
}
$(".remove8").click(posterRemove8);
function posterRemove8() {
  $(".showMovie9").remove();
}
$(".remove9").click(posterRemove9);
function posterRemove9() {
  $(".showMovie10").remove();
}
$(".remove10").click(posterRemove10);
function posterRemove10() {
  $(".showMovie11").remove();
}
$(".remove11").click(posterRemove11);
function posterRemove11() {
  $(".showMovie12").remove();
}
$(".close-form").click(iconIsClicked);
function iconIsClicked() {
  $(".form-container").hide();
}
$(".plusIcon").click(addMovieToDatabase);
function addMovieToDatabase() {
  $(".form-container").toggle();
}
})
