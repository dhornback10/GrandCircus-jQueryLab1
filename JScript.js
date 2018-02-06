$(document).ready(function() {

    var table_number = 0;


    $("#formDiv").hide();
    $(".available").click(function() {
    	event.preventDefault();
    	$tableNumber = $(event.target).text();
    	$(".num").html($tableNumber);
        $("#formDiv").show();
        table_number = $(this).attr("id");
        // $(event.target).addClass("reserved").removeClass("available");
    });
    $(".saveButton").click(function(){
    	$ ("#number" + table_number).css("background-color", "#ADAAAA");
    	$ ("#number" + table_number).css("cursor", "not-allowed");
    	$("#formDiv").hide();
    })
    $(".cancelButton").click(function(){
    	$("#formDiv").hide();
    });




});