var flamesBro = new Firebase('https://popping-heat-8389.firebaseio.com/');
var name ="";
var startDate = "";
var role ="";
var rate = 0;
var monthsWorked = 0;
var billed = 0;

function changedValue() {
	var change = new Firebase('https://popping-heat-8389.firebaseio.com/');
	change.on('value', function(snapshot) {

	})
}

$(document).on('click', '#remove', function() {
	var key = $(this).data('key');
	var id = new Firebase('https//popping-heat-8389.firebaseio.com/' + key);
	id.remove();
	$('#' + key).remove();
})

$('#submit').on('click',function(){
	name = $('#nameInput').val().trim();
	startDate = $('#dateInput').val().trim();
	rate = $('#rateInput').val().trim();
	role = $('#roleInput').val().trim();
	var m = moment(startDate, 'MM-DD-YYYY');
	console.log(m);
	monthsWorked = Math.round(moment().diff(m, 'months', true));
	console.log(Math.round(monthsWorked));
	billed = monthsWorked * rate;
	
	flamesBro.push({
		name : name,
		startDate : startDate,
		rate : rate,
		role : role,
		billed: billed,
		monthsWorked: monthsWorked
	})

	$('#nameInput').val('');
	$('#dateInput').val('');
	$('#roleInput').val('');
	$('#rateInput').val('');

	return false;
});

flamesBro.on("child_added", function(snapshot){
	console.log(snapshot.key());
	$('#newRow').append("<tr id='" + snapshot.key() + "'><td>" + snapshot.val().name +"</td><td>" + snapshot.val().role + "</td><td>" + snapshot.val().startDate + "</td><td>" + snapshot.val().monthsWorked + ' months' + "</td><td>" + '$ ' + snapshot.val().rate + "</td><td>" + '$ ' + snapshot.val().billed + "</td><td><button class='btn btn-warning' id='edit' data-key='" + snapshot.key() + "'>Edit</button></td><td><button class='btn btn-danger' id='remove' data-key='" + snapshot.key() + "'>X</button></td></tr>" )
}, function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});