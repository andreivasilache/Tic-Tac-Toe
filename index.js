$(window).on("load",function(){
// global values
var gameOver=false;
var x="x";
var o="o";
var xScore=0;
var oScore=0;
var drawPoints=0;
// hide all messages
$(".xRound").hide();
$(".oRound").hide();
$(".draw").hide();
$(".boxUsed").hide();
//preset scores to 0 
$(".scoreX").text(0);
$(".scoreO").text(0);
// hide  gifs
$(".ButtonMagician").hide();


// Creating the bidimensional array
var a=new Array(2);
	for(var i=0;i<=2;i++){
		a[i]=new Array(2);
	}
// associating bidimensional array to the box
var box=document.querySelectorAll(".box");
var k=0;
	for(var i=0;i<=2;i++){
		for(var j=0;j<=2;j++){
			a[i][j]=box[k++];
	}
}
//check if it's draw function
function draw(){
	if(drawPoints == 9){
		$(".draw").show().fadeOut(5000);
		$(".drawGif").show().fadeOut(5000);
			deleteAllClasssesOfRow();
		 	drawPoints=0;
	}
}
//delete all classes of rows Function
function deleteAllClasssesOfRow(){
	$('.row').find('*').each(function(){
     $(this).removeClass('x');
     $(this).removeClass('o');
     $(this).removeClass('protection');
  });
}

//reset scores to 0
function resetScore(){
	xScore=0;
	$(".scoreX").text(0);
	oScore=0;
	$(".scoreO").text(0);
	$(".ButtonMagician").show().fadeOut(5000);
}


// Game logic

playerO();
function playerX(){
	$(".oTurn").hide();
	$(".xTurn").show();
//Add classes on click

	$(".box").unbind().on("click",function(){
		if(!$(this).hasClass("protection")){
			
		drawPoints+=1;
		$(this).removeClass("o");
		$(this).addClass("protection");
		$(this).addClass("x");
		checkX();
	}else{
		$(".boxUsed").show().fadeOut(5000);
		playerX();
	}
});
	function checkX(){
	if(!checkVerticaly() && !checkHorizontaly() && !checkPrincipalDiagonal() && !checkSecundarDiagonal()){
		draw();
		playerO();
		
	}else{
//player X won round
		$(".xRound").show().fadeOut(5000);
		$(".xWonGif").show().fadeOut(3000);
		$(".oRound").hide();
		xScore+=1;
	    $(".scoreX").text(xScore);
		drawPoints=0;
//delte all current classes
		deleteAllClasssesOfRow();
//player X get the first turn
//check if it's draw
		 draw();
		 playerX();
		
	}
 }

	

	function checkVerticaly(){
		if($(a[0][0]).hasClass("x") === true
	    && $(a[0][1]).hasClass("x") === true
	    && $(a[0][2]).hasClass("x") === true) return true;

		if($(a[1][0]).hasClass("x") === true
	    && $(a[1][1]).hasClass("x") === true
	    && $(a[1][2]).hasClass("x") === true) return true;

		if($(a[2][0]).hasClass("x") === true
	    && $(a[2][1]).hasClass("x") === true
	    && $(a[2][2]).hasClass("x") === true) return true;
	}
	function checkHorizontaly(){
		if($(a[0][0]).hasClass("x") === true
	    && $(a[1][0]).hasClass("x") === true
	    && $(a[2][0]).hasClass("x") === true) return true;

		if($(a[0][1]).hasClass("x") === true
	    && $(a[1][1]).hasClass("x") === true
	    && $(a[2][1]).hasClass("x") === true) return true;

		if($(a[0][2]).hasClass("x") === true
	    && $(a[1][2]).hasClass("x") === true
	    && $(a[2][2]).hasClass("x") === true) return true;
	}
	function checkPrincipalDiagonal(){
		if($(a[0][0]).hasClass("x") === true
		&& $(a[1][1]).hasClass("x") === true
		&& $(a[2][2]).hasClass("x") === true) return true;
	}
	function checkSecundarDiagonal(){
		if($(a[0][2]).hasClass("x") === true 
		&& $(a[1][1]).hasClass("x") === true
		&& $(a[2][0]).hasClass("x") === true) return true; 

	}


	
}

function playerO(){
	$(".xTurn").hide();
	$(".oTurn").show();
	$(".box").unbind().on("click",function(){
// if already have a class
 	if(!$(this).hasClass("protection")){
 		$(this).addClass("protection");
 		drawPoints+=1;
		$(this).removeClass("x");
		$(this).addClass("o");
		checkO();
 	}else{
		$(".boxUsed").show().fadeOut(5000);
		// $(".boxUsedGif").show();  
		playerO();	
	}
		
});
	
	
	function checkO(){
		if(!checkVerticaly() && !checkHorizontaly() && !checkPrincipalDiagonal() && !checkSecundarDiagonal()){
		draw();
		playerX();
	}else{
			oScore++;
		    $(".scoreO").text(oScore);
			$(".xRound").hide();
			$(".oRound").show().fadeOut(5000);
			$(".oWonGif").show().fadeOut(5000);				
			drawPoints=0;
// Delete all classes
	deleteAllClasssesOfRow()
		
//check if it's draw
	draw();
//player O won and starts the new round
	playerO();
} 
}

	
	

	function checkVerticaly(){
		if($(a[0][0]).hasClass("o") === true
	    && $(a[0][1]).hasClass("o") === true
	    && $(a[0][2]).hasClass("o") === true) return true;

		if($(a[1][0]).hasClass("o") === true
	    && $(a[1][1]).hasClass("o") === true
	    && $(a[1][2]).hasClass("o") === true) return true;

		if($(a[2][0]).hasClass("o") === true
	    && $(a[2][1]).hasClass("o") === true
	    && $(a[2][2]).hasClass("o") === true) return true;
	}
	function checkHorizontaly(){
		if($(a[0][0]).hasClass("o") === true
	    && $(a[1][0]).hasClass("o") === true
	    && $(a[2][0]).hasClass("o") === true) return true;

		if($(a[0][1]).hasClass("o") === true
	    && $(a[1][1]).hasClass("o") === true
	    && $(a[2][1]).hasClass("o") === true) return true;

		if($(a[0][2]).hasClass("o") === true
	    && $(a[1][2]).hasClass("o") === true
	    && $(a[2][2]).hasClass("o") === true) return true;
	}
	function checkPrincipalDiagonal(){
		if($(a[0][0]).hasClass("o") === true
		&& $(a[1][1]).hasClass("o") === true
		&& $(a[2][2]).hasClass("o") === true) return true;
	}
	function checkSecundarDiagonal(){
		if($(a[0][2]).hasClass("o") === true 
		&& $(a[1][1]).hasClass("o") === true
		&& $(a[2][0]).hasClass("o") === true) return true; 

	}

}
});




//   Time logs
// Nu se verifica daca jucatorul a castigat la a 2.a runda.