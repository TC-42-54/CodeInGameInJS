/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var LX = parseInt(inputs[0]); // the X position of the light of power
var LY = parseInt(inputs[1]); // the Y position of the light of power
var TX = parseInt(inputs[2]); // Thor's starting X position
var TY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var E = parseInt(readline()); // The level of Thor's remaining energy, representing the number of moves he can still make.

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    if (((TY == LY) && (TX < LX)) && 
        (((TX <= 40) && (TX >= 0)) && 
	 ((TY <= 18) && (TY >= 0))))// A single line providing the move to be made: N NE E SE S SW W or NW
	{
	    TX++;
	    print('E');
	}
    else if ((TY == LY) && (TX > LX) && 
	     (((TX <= 40) && (TX >= 0)) && 
	      ((TY <= 18) && (TY >= 0))))
	{
	    TX--;
	    print('W');
	}
    if ((TX == LX) && (TY > LY) && 
        (((TX <= 40) && (TX >= 0)) && 
	 ((TY <= 18) && (TY >= 0))))
	{
	    TY--;
	    print('N');
	}
    if ((TX == LX) && (TY < LY) && 
        (((TX <= 40) && (TX >= 0)) && 
	 ((TY <= 18) && (TY >= 0))))
	{
	    TY++;
	    print('S');
	}
    if ((TX > LX) && (TY < LY) && 
        (((TX <= 40) && (TX >= 0)) && 
	 ((TY <= 18) && (TY >= 0))))
	{
	    TX--;
	    TY++;
	    print('SW');
	}
    if ((TX < LX) && (TY < LY) && 
        (((TX <= 40) && (TX >= 0)) && 
	 ((TY <= 18) && (TY >= 0))))
	{
	    TX++;
	    TY++;
	    print('SE');
	}
}
