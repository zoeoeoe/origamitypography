var delta =0;
    function rotateBy90Deg(ele){
        ele.style.webkitTransform="rotate("+delta+"deg)";
        delta+=90;
    }

window.onload = function(){ 

	var modal = document.getElementById('modal');

	var btn = document.getElementById('button2');
	btn.onclick = function() {
	    modal.style.display = "block";
	    window.scrollTo(0, 0);
	}

};