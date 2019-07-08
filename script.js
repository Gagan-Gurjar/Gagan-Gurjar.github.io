// alert('connected')




$(".fb").click(function() {
	window.open("https://www.facebook.com/profile.php?id=100004641975661","_blank");
});

$(".insta").click(function() {
	window.open("https://www.instagram.com/_invincible_05/","_blank");
});

$(".linkedin").click(function() {
	window.open("https://www.linkedin.com/in/gagan-gurjar-985302158","_blank");
});

$(".gmail").click(function() {
	window.open("https://mail.google.com/mail/u/gujarrs10@gmail.com","_blank");
});


var x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addListener(myFunction)


function myFunction(x) {
  if (x.matches) { 
  	$(".nav-about-min").click(function() {
  		$(".toggle").css("visibility","visible");

  	})
  	$(".close").click(function() {
  		$(".toggle").css("visibility","hidden");
  	})
  	
    
  } else {
  		$(".nav-about").mouseleave(function() {
		$(".toggle").css("visibility","hidden");
		$(".nav-about").css("color","white");
		$(".nav-about").css("backgroundColor","black");
		$(".home").css("backgroundColor","#1a9181");
		$(".home").css("transition","0.5s ease");
	});

		$(".nav-about").mouseenter(function() {
		$(".toggle").css("transition","0.3s ease-in-out");
		$(".toggle").css("visibility","visible"); 
		$(".nav-about").css("backgroundColor","#1a9181");	
		$(".home").css("backgroundColor","black");
		$(".nav-about").css("border","1.5px solid white");
	});
      }
}



