var $polystar1 = $('.polystar1');
var $polystar2 = $('.polystar2');
var $polystar3 = $('.polystar3');

$polystar1.on('mouseenter focus', function(){
	$polystar1.get(0).play();
	$polystar1.get(0).volume = 0.05;
});

$polystar1.on('mouseout blur', function(){
	$polystar1.get(0).pause();
});

$polystar2.on('mouseenter focus', function(){
	$polystar2.get(0).play();
	$polystar2.get(0).volume = 0.05;
});

$polystar2.on('mouseout blur', function(){
	$polystar2.get(0).pause();
});

$polystar3.on('mouseenter focus', function(){
	$polystar3.get(0).play();
	$polystar3.get(0).volume = 0.05;
});

$polystar3.on('mouseout blur', function(){
	$polystar3.get(0).pause();
});