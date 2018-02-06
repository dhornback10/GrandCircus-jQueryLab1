$(document).ready(function() {

    var table_number = 0;


    $("#formDiv").hide();
    $(".available").click(function() {
    	$tableNumber = $(event.target).text();
    	$(".num").html($tableNumber);
        $("#formDiv").show();
        table_number = $(event.target).attr("id");
        $(event.target).addClass("reserved").removeClass("available");
    });
    $(".saveButton").click(function(){
    	event.preventDefault();
    	$("#formDiv").hide();

    })
    $(".cancelButton").click(function(){
    	$("#formDiv").hide();
    	
    });




});