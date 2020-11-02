//--------------------------------------
//**************************************
// Designing of task
//**************************************
//--------------------------------------

//--------------------------------------
// GET FINAL ANGLES
//--------------------------------------

function getFinalAngles(initialAngles, changeState, changeDirection, changeAngle)
{
	var finalAngles = [];

	for(i = 0; i<4; i++)
	{
		if(changeState[i] == 0) 
		{ 
			finalAngles[i] = initialAngles[i]; 
		}
		if(changeState[i] == 1) 
		{
			finalAngles[i] = (initialAngles[i] + (changeDirection[i] * changeAngle)).toFixed(2);
		}
	}
	return finalAngles;
}
