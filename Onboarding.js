/**
 * CodinGame planet is being attacked by slimy insectoid aliens.
 * <---
 * Hint:To protect the planet, you can implement the pseudo-code provided in the statement, below the player.
 **/


// game loop
while (true)
{
    var enemy1 = readline(); // name of enemy 1
    var dist1 = parseInt(readline()); // distance to enemy 1
    var enemy2 = readline(); // name of enemy 2
    var dist2 = parseInt(readline()); // distance to enemy 2
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    if (dist1 < dist2)
    {
	print(enemy1); // replace "enemy" with a correct ship name to shoot
	enemy1 = null;
	dist1 = null;
    }
    else
    {
	print(enemy2);
	enemy2 = null;
	dist2 = null;
    }
    if ((enemy1 == null) && (enemy2 == null))
        print(false);
}