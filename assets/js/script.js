//reminder for myself - on("click") available also for future events
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
});
	//stop the other event listeners fire to other elements
	//= stop bubbling events
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// which - indicats the specific key/button that was pressed
	if(event.which === 13){
		//grabbing new todo text from input
		let todoText = $(this).val();
		// setter of .val on todoText
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});