/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print TX and TY, if Thor does not follow your orders.
 **/

var inputs = readline().split(' ');
var LX = parseInt(inputs[0]); // the X position of the light of power
var LY = parseInt(inputs[1]); // the Y position of the light of power
var TX = parseInt(inputs[2]); // Thor's starting X position
var TY = parseInt(inputs[3]); // Thor's starting Y position
var X = 40;
var Y = 18;

// game loop
// The level of Thor's remaining energy, representing the number of moves he can still make.
while ((TX <= X) && (TY <= Y) &&
       (TX >= 0) && (TY >= 0) &&
       (true))
{
    var E = parseInt(readline());
    if ((TX > LX) && (TY == LY))
    {
	TX--;
	print('W');
    }
    else if ((TX < LX) && (TY == LY))
    {
	TX++;
	print('E');
    }
    if ((TY > LY) && (TX == LX))
    {
	TY--;
	print('N');
    }
    else if ((TY < LY) && (TX == LX))
    {
	TY++;
	print('S');
    }
    if ((TX > LX) && (TY > LY))
    {
	TX--;
	TY--;
	print('NW');
    }
    else if ((TX > LX) && (TY < LY))
    {
	TX--;
	TY++;
	print('SW');
    }
    if ((TX < LX) && (TY < LY))
    {
	TX++;
	TY++;
	print('SE');
    }
    else if ((TX < LX) && (TY > LY))
    {
	TX++;
	TY--;
	print('NE');
    }
    if ((TX == LX) && (TY == LY))
	print(false);
}
// Write an action using print()
// To debug: printErr('Debug messages...');

// A single line providing the move to be made: N NE E SE S SW W or NW