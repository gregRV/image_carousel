$(document).ready(function() {
	var i = 0;

    $('#next_frame').on('click',function(){
    	if (i==0) {
	       $('.frames').animate({
	       		right: "360px"
	       	},800);
	       i = 1;
	       console.log(i);
     		}
      else if (i==1) {
	       $('.frames').animate({
	       		right: "720px"
	       	},800);
	       i = 2;
	       console.log(i);
     		}
     	else if (i==2) {
	       $('.frames').animate({
	       		right: "0px"
	       	},800);
	       i = 0;
	       console.log(i);
     		}
    });

    $('#previous_frame').on('click',function(){
    	if (i==0) {
	       $('.frames').animate({
	       		right: "720px"
	       	},800);
	       i = 2;
	       console.log(i);
     		}
     	else if (i==1) {
	       $('.frames').animate({
	       		right: "0px"
	       	},800);
	       i = 0;
	      console.log(i);
     		}
     	else if (i==2) {
	       $('.frames').animate({
	       		right: "360px"
	       	},800);
	       i = 1;
	       console.log(i);
     		}
    });   
});