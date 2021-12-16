/*
 *  Detta script använder jQuery för att manipulera sidans innehåll
 *  Manual för funktioner: https://api.jquery.com
 *
 */

$(function(){

	console.log('jQuery initialized');

	var returorsak = "";

	// Dagens datum i sidhuvudet
	var MyDate = new Date();
	var MyDateString;
	MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
	$( "#date" ).html(MyDateString);

	// Visa kontaktuppgifter
	$( "#div_kontaktuppgifter" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
	$( "#div_kontaktuppgifter" ).slideDown();

	// Kontaktuppgifter ifyllda
	//$( "#button_kontaktuppgifter" ).click(function() {
		//event.preventDefault();
	$( "#form_kontaktuppgifter" ).submit(function() {
		event.preventDefault();
		console.log( "#form_kontaktuppgifter submitted");
		$( "#button_kontaktuppgifter" ).fadeOut(function() {
			$( "#div_kontaktuppgifter" ).css('background-color', 'rgb(241,241,241)'); /* ljusgrå */
			$( "#div_returorsak" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
			$( "#div_returorsak" ).slideDown(function() {
				$( "#div_utskrift" ).fadeIn();
			});
		});
	});

	// Vid val av returorsak
	//$( "#button_returorsak" ).click(function() {
	$( "#form_returorsak" ).submit(function() {
		event.preventDefault();
		console.log( "#form_returorsak submitted");

		var selected = $("input[type='radio'][name='returorsak']:checked");
		if (selected.length > 0) {
			returorsak = selected.val();
			console.log( "Vald returorsak: " + returorsak );
			$( "#div_returorsak" ).slideUp(function() {
				$( "#div_returorsak" ).css('background-color', 'rgb(241,241,241)'); /* ljusgrå */
				if (returorsak == "reklamation") {
					$( "#div_reklamationsorsak" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
					$( "#div_reklamationsorsak" ).slideDown();
				}
				if (returorsak == "reparation") {
					$( "#div_reparation" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
					$( "#div_reparation" ).slideDown();
				}
				if (returorsak == "aterkop") {
					$( "#div_aterkop" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
					$( "#div_aterkop" ).slideDOwn();
				}
			});
		} else {
			alert( "Vänligen välj returorsak!" );
			return false;
		}
	});

	// Vid val av reklamationsorsak
	$( "#button_rek_orsak" ).click(function() {
		event.preventDefault();
		console.log( "#button_rek_orsak klickad");

		var selected = $("input[type='radio'][name='rek_orsak']:checked");
		if (selected.length > 0) {
			rek_orsak = selected.val();
			console.log( "Vald reklamationsorsak: " + rek_orsak );
			$( "#div_reklamationsorsak" ).slideUp(function() {
				$( "#div_reklamationsorsak" ).css('background-color', 'rgb(241,241,241)'); /* ljusgrå */

				if ( rek_orsak == "rek_tillverkningsfel" ) {
					$( "#div_rek_tillverkningsfel" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
					$( "#div_rek_tillverkningsfel" ).slideDown();
				}
				if ( rek_orsak == "rek_felleverans" ) {
					$( "#div_rek_fellev" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
					$( "#div_rek_fellev" ).slideDown();
				}
				if ( rek_orsak == "rek_transportskada" ) {
					$( "#div_rek_transportskada" ).css('background-color', 'rgb(255,245,204)'); /* ljusgul */
					$( "#div_rek_transportskada" ).slideDown();
				}

			});

		} else {
			alert( "Vänligen välj reklamationsorsak!" );
			return false;
		}


	});


	// Vid utskrift
	$( "#button_print" ).click(function() {
		event.preventDefault();
		console.log( "#button_print klickad");
		window.print();
	});

	// Vid reset
	$( "#button_reset" ).click(function() {
		event.preventDefault();
		console.log( "#button_reset klickad");

		var r = confirm( "Bekräfta att du vill börja om från början. All ifylld information går förklorad!" );
		if (r == true) {
			location.reload();	
		}
	});

});
