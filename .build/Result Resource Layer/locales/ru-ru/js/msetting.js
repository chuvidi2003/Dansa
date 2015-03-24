(function (ui) {

	var thewidth =  ($(window).width() - 45) ; 
	$("#breathok").css("width",  thewidth + "px");
	
	$("#vibe").off(); 
	$("#vibe").click(function() {
		OverlayVibe();
	});


	
	$("#pom").off(); 
	$("#pom").click(function() {
		OverlayBreath("pom");
	});
	
	
	

	function setValues(){
		vibe = localStorage.getItem("vibe") == null ?  "on" : localStorage.getItem("vibe") ;
		if (vibe == "on"){
			$("#vibedesc").text("Выбрация включена");
			$("#radon").prop("checked", true);
		}else {
			$("#vibedesc").text("Выбрация выключена");
			$("#radoff").prop("checked", true);
		}

		
		
		pomduration = localStorage.getItem("pomduration") == null ?  5 : localStorage.getItem("pomduration") ;
		//$("#medrangevalue").text(medduration + " Minutes") ; 
		$("#pomdesc").text( pomduration + " Минутная сессия");
		
	}

	setValues();

	function OverlayVibe() { 

		vibe = localStorage.getItem("vibe") == null ?  "on" : localStorage.getItem("vibe") ;
		if (vibe == "on"){
			$("#radon").prop("checked", true)
		}else {
			$("#radoff").prop("checked", true)
		}

		$("#vibeoverlay").off();
		$("#vibeoverlay").slideDown( "slow", function() {});

		$("#vibeon").off();
		$("#vibeon").click(function() {
			$("#vibeoverlay").slideUp( "slow", function() {});
			//this.resetValues();
			localStorage.setItem("vibe","on") ;
			setValues();
		});

		$("#vibeoff").off();
		$("#vibeoff").click(function() {
			$("#vibeoverlay").slideUp( "slow", function() {});
			//this.resetValues();
			localStorage.setItem("vibe","off") ;
			setValues();
		});
	}


	function OverlayBreath(type) { 

		pomduration = localStorage.getItem("pomduration") == null ?  5 : localStorage.getItem("pomduration") ;
		var newval ;
		
		if (type == "pom"){
			$("#breathtitle").text("Длительность")  ;
			$("#breathrangevalue").text(pomduration + " Минут");
			$("#breathrange").val(pomduration);
			newval = pomduration ;
			
		} 
 		
		$("#breathrange").change(function(){
			newval=$(this).val();
			$("#breathrangevalue").text(newval + " Минут");
		});

		$("#breathoverlay").off();
		$("#breathoverlay").slideDown( "slow", function() {});

		$("#breathok").off();
		$("#breathok").click(function() {
			$("#breathoverlay").slideUp( "slow", function() {});
			//this.resetValues();
			
			if (type == "pom"){
				localStorage.setItem("pomduration",newval) ;
			} 
			setValues();
		});

	}

})(window.tau);
