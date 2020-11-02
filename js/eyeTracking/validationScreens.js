//--------------------------------------
//**************************************
// VALIDATION DOTS
//**************************************
//--------------------------------------

TL_bin = -1;
TR_bin = -1;
BL_bin = -1;
BR_bin = -1;
C_bin = -1;

function validationDot(valX, valY)
{
	// if valX is 0 - centre; valX is -1 - left of centre, etc.
	var dot_radius = 8;
	var dist = 200;
	var x = win_x/2 + (valX*dist);
	var y = win_y/2 + (valY*dist);
	var fix_dot = s.circle(x, y, dot_radius);
}

function validationCalc(valX, valY)
{
	errPercent = 5.5;
	errRadius = (win_x * errPercent)/100; //5.5% of the screen size in x direction
	var dist = 200;

	var posX = win_x/2 + (valX*dist);
	var posY = win_y/2 + (valY*dist);

	var sum_dist = 0;

	for(var validIter = gazeMetric_initialIter+30; validIter < gazeMetric_finalIter; validIter++)
	{
		sum_dist = sum_dist + Math.sqrt(Math.pow((gazeX[validIter] - posX), 2) + Math.pow((gazeY[validIter] - posY), 2));
	}
	avg_dist = sum_dist / (gazeMetric_finalIter+30 - gazeMetric_initialIter);
	console.log("validation: "+avg_dist);
	if(avg_dist <= errRadius)		
	{
		return 1;
	}
	else
	{
		return 0;
	}
}

//--------------------------------------
//**************************************
// MESSAGE TO THE SUBJECT
//**************************************
//--------------------------------------

var validationMSG = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		return "<p style = 'font-size:27px; color:black'>A validation of eye-tracking will be conducted. In the next screen, follow the dot with your eyes.</p><p style = 'font-size:27px; color:black>Press any key to continue.</p>";
	},
	on_finish: function(data)
	{
		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		data.changeAngle = changeAngle;

		data.countCorrect = countCorrect;
		data.staircaseCorrect = staircaseCorrect;
		data.countNAN = countNAN;
		//------------------------------------------------------------------
	}
}

//--------------------------------------
//**************************************
// VALIDATION OF CALIBRATION
//**************************************
//--------------------------------------

var validation_TL = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_woFB;
		gazeMetric_initialIter = eyeIter;

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		validationDot(-1, -1);
		stim_str = s.toString();
		s.clear();
		return stim_str;
	},
	trial_duration: 2000,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		TL_bin = validationCalc(-1, -1);

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		data.changeAngle = changeAngle;

		data.countCorrect = countCorrect;
		data.staircaseCorrect = staircaseCorrect;
		data.countNAN = countNAN;
		//------------------------------------------------------------------
	}
}

var validation_TR = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_woFB;
		gazeMetric_initialIter = eyeIter;

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		validationDot(1, -1);
		stim_str = s.toString();
		s.clear();
		return stim_str;
	},
	trial_duration: 2000,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		TR_bin = validationCalc(1, -1);

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		data.changeAngle = changeAngle;

		data.countCorrect = countCorrect;
		data.staircaseCorrect = staircaseCorrect;
		data.countNAN = countNAN;
		//------------------------------------------------------------------
	}
}

var validation_BR = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_woFB;
		gazeMetric_initialIter = eyeIter;

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		validationDot(1, 1);
		stim_str = s.toString();
		s.clear();
		return stim_str;
	},
	trial_duration: 2000,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		BR_bin = validationCalc(1, 1);

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		data.changeAngle = changeAngle;

		data.countCorrect = countCorrect;
		data.staircaseCorrect = staircaseCorrect;
		data.countNAN = countNAN;
		//------------------------------------------------------------------
	}
}

var validation_BL = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_woFB;
		gazeMetric_initialIter = eyeIter;

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		validationDot(-1, 1);
		stim_str = s.toString();
		s.clear();
		return stim_str;
	},
	trial_duration: 2000,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		BL_bin = validationCalc(-1, 1);

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		data.changeAngle = changeAngle;

		data.countCorrect = countCorrect;
		data.staircaseCorrect = staircaseCorrect;
		data.countNAN = countNAN;
		//------------------------------------------------------------------
	}
}

var validation_C = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_woFB;
		gazeMetric_initialIter = eyeIter;

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		validationDot(0, 0);
		stim_str = s.toString();
		s.clear();
		return stim_str;
	},
	trial_duration: 2000,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		C_bin = validationCalc(0, 0);

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		data.changeAngle = changeAngle;

		data.countCorrect = countCorrect;
		data.staircaseCorrect = staircaseCorrect;
		data.countNAN = countNAN;
		//------------------------------------------------------------------
	}
}

var validationMain = 
{
	timeline: [validationMSG, validation_C, validation_TL, validation_TR, validation_BR, validation_BL, validation_C],
}