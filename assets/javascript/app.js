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
	
	flamesBro.push({
		name : name,
		startDate : startDate,
		rate : rate,
		role : role
	})

	return false;
});

flamesBro.on("child_added", function(snapshot){
	$('#newRow').append("<tr><td>" + snapshot.val().name +"</td><td>" + snapshot.val().role + "</td><td>" + snapshot.val().startDate + "</td><td>" + snapshot.val().monthsWorked + "</td><td>" + snapshot.val().rate + "</td><td>" + snapshot.val().billed +"</td></tr>" )
}, function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});

