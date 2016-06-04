var flamesBro = new Firebase('https://popping-heat-8389.firebaseio.com/')
	var name ="";
	var startDate = "";
	var role ="";
	var rate = 0;
	var monthsWorked;
	var billed;

$('#submit').on('click',function(){
	name = $('#nameInput').val().trim();
	startDate = $('#dateInput').val().trim();
	rate = $('#rateInput').val().trim();
	role = $('#roleInput').val().trim();
	
	$('#newRow').append("<tr><td>" + name +"</td><td>" + role + "</td><td>" + startDate + "</td><td>" + monthsWorked + "</td><td>" + rate + "</td><td>" + billed +"</td></tr>" )
	
	flamesBro.push({
		name : name,
		startDate : startDate,
		rate : rate,
		role : role
	})
	
	return false;
});