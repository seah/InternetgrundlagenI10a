var x = 5; //Starting Location - left
    var y = 5; //Starting Location - top
    var dest_x = 20;  //Ending Location - left
    var dest_y = 150;  //Ending Location - top
    var interval = 10; //Move 10px every initialization

    function shift(elementname) {
        //  if (z.pixelLeft < 200) z.pixelLeft += 5;
        //  else z.pixelLeft -= 20;



        //Keep on moving the image till the target is achieved
        if (x < dest_x) x = x + interval;
        if (y < dest_y) y = y + interval;

        //Move the image to the new location
        document.getElementById(elementname).style.top = y + 'px';
        document.getElementById(elementname).style.left = x + 'px';

        if ((x + interval < dest_x) && (y + interval < dest_y)) {
            //Keep on calling this function every 100 microsecond 
            //	till the target location is reached
            window.setTimeout('shift(' + elementname + ')', 100);
        }

    }