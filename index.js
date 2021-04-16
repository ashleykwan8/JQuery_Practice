// jQuery for selecting h1 and changing the css color property to red
// $("h1").css("color", "white");

// this will select all the buttons on the HTML
$("button");

// TODO: Keep CSS only to style 


// added the class to the h1 tag and changed the behavior of the styling
$("h1").addClass("big-title margin-50");
// removes the class from h1
// $("h1").removeClass("big-title");

// pure text
// $("h1").text("Goodbye");
// effects the innerhtml
// $("button").html("<strong>Hi</strong>");

// change the color of the h1 with event listener "click"
$("h1").click(function() {
    $("h1").css("color", "white");
});

// select the "button" class and add event listener 
$("button").click(function() {
    $("h1").css("color", "red");
})

// shows the event.key (log which key is pressed)
$("input").keypress(function(event) {
    console.log(event.key);
});

// updates the h1 to the key press
$(document).keypress(function(event) {
    $("h1").text(event.key);
}); 

// add mouseover event
$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
})






