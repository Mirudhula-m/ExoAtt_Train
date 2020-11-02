// messages to the subject for eye tracking
// includes instructions for calibration
// includes eye fixation training


var gazeMetric_initialIter;
var gazeMetric_finalIter;

var giveFB = 0;
var do_recal = 0;

//--------------------------------------
//**************************************
// CALIBRATION SCREENS
//**************************************
//--------------------------------------

var calibration_msg = 
{
	type: "html-keyboard-response",
	stimulus: "<p style = 'font-size:20px; color:black'>Press any key to "
			  +"begin eye tracking calibration.</p>",
};

var calibration = 
{
	type: "call-function",
	func: function()
	{
		GazeCloudAPI.StartEyeTracking();
	},
	on_start: function()
	{
		document.body.style.cursor = 'pointer';
	},
	on_finish: function()
	{
		console.log("calibration complete.");
	}
};

//--------------------------------------
//**************************************
// EYE-TRACKING WITH FEEDBACK
//**************************************
//--------------------------------------

// pre-trial validation with feedback circle
var fix_valid_FB = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		fixationDot();
		stim_str = s.toString();
		s.clear();
		return "<p style = 'font-size:27px; color:black; position: absolute; text-align: center'>Please fixate your eyes on the dot at the centre.</p>" + stim_str;
	},
	trial_duration: 500,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

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

var loop_fix_FB = 
{
	timeline: [fix_valid_FB],
	loop_function: function()
	{	
		/*
		err_cm = 4;
		ppi = 100;  // value from jspsych
		// There are 100 pixels per inch, so cm = pixels * 2.54 / 100

		err_pixel = err_cm * ppi / 2.54;
		*/

		errPercent = 5.5;
		errRadius = (win_x * errPercent)/100; //5% of the screen size in x direction

		centreX = win_x/2;
		centreY = win_y/2;

		var sum_dist = 0;

		for(var validIter = gazeMetric_initialIter; validIter < gazeMetric_finalIter; validIter++)
		{
			sum_dist = sum_dist + Math.sqrt(Math.pow((gazeX[validIter] - centreX), 2) + Math.pow((gazeY[validIter] - centreY), 2));
		}
		avg_dist = sum_dist / (gazeMetric_finalIter - gazeMetric_initialIter);

		if(avg_dist <= errRadius)	
		{
			return false;
		}
		else if(do_recal == 5)
		{
			return false;
		}
		else
		{
			do_recal++;
			return true;
		}
	}
}

var cond_fix_FB = 
{
	timeline: [loop_fix_FB],
	conditional_function: function()
	{
		if(giveFB == 0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

//--------------------------------------
//**************************************
// EYE-TRACKING WITHOUT FEEDBACK
//**************************************
//--------------------------------------

var fix_valid_NFB = 
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

		fixationDot();
		stim_str = s.toString();
		s.clear();
		return stim_str;
	},
	trial_duration: 500,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

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
// RECALIBRATION SCREENS
//**************************************
//--------------------------------------

var clickRecal = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;
		GazeCloudAPI.UseClickRecalibration = true; 
		document.body.style.cursor = 'pointer';

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		fixationDot();
		stim_str = s.toString();
		s.clear();
		return "<p style = 'font-size:27px; color:black; position: absolute'>Please fixate your eyes on the dot at the centre <strong>AND SIMULTANEOUSLY</strong> click on the dot at the centre <strong>till the circle covers the dot</strong>.</p>" + stim_str;
	},
	trial_duration: 500,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		GazeCloudAPI.UseClickRecalibration = false; 
		document.body.style.cursor = 'none';

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

var loop_recalibration = 
{
	timeline: [clickRecal],
	loop_function: function()
	{
		errPercent = 5.5;
		errRadius = (win_x * errPercent)/100; //5% of the screen size in x direction

		centreX = win_x/2;
		centreY = win_y/2;

		var sum_dist = 0;

		for(var validIter = gazeMetric_initialIter; validIter < gazeMetric_finalIter; validIter++)
		{
			sum_dist = sum_dist + Math.sqrt(Math.pow((gazeX[validIter] - centreX), 2) + Math.pow((gazeY[validIter] - centreY), 2));
		}

		avg_dist = sum_dist / (gazeMetric_finalIter - gazeMetric_initialIter);

		if(avg_dist <= errRadius)	
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

var cond_recalibration = 
{
	timeline: [loop_recalibration],
	conditional_function: function()
	{
		if(do_recal == 5)
		{
			do_recal = 0;
			return true;
		}
		else
		{
			do_recal = 0;
			return false;
		}
	}
}

//--------------------------------------
//**************************************
// LOOP FIXATION TIMELINE
//**************************************
//--------------------------------------

var loop_fixation = 
{
	timeline: [cond_fix_FB, cond_recalibration, fix_valid_NFB],
	loop_function: function()
	{	
		errPercent = 5.5;
		errRadius = (win_x * errPercent)/100; //5% of the screen size in x direction

		centreX = win_x/2;
		centreY = win_y/2;

		console.log("err: "+errRadius);
		console.log("centreX: "+centreX+" centreY: "+centreY);

		var sum_dist = 0;

		for(var validIter = gazeMetric_initialIter; validIter < gazeMetric_finalIter; validIter++)
		{
			sum_dist = sum_dist + Math.sqrt(Math.pow((gazeX[validIter] - centreX), 2) + Math.pow((gazeY[validIter] - centreY), 2));
			console.log("sumDist: "+sum_dist);
		}

		avg_dist = sum_dist / (gazeMetric_finalIter - gazeMetric_initialIter);
		console.log("avg: "+avg_dist);
		if(avg_dist <= errRadius)		
		{
			giveFB = 0;
			return false;
		}
		else
		{
			giveFB = 1;
			return true;
		}
	}
}

//--------------------------------------
//**************************************
// FORCED CLICK RECALIBRATION
//**************************************
//--------------------------------------

buttonIter = 0;

var forced_clickRecal = 
{
	type: "html-button-response",
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_x+"px; width: "+win_x+"px'><h2 style = 'color:black'>Click the button 5 times while looking at the mouse pointer..."+buttonIter+"</h2></div>";
	},
	choices: [' '],
	button_html: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;
		GazeCloudAPI.UseClickRecalibration = true; 
		document.body.style.cursor = 'pointer';

		//------------------------------------------------------------------
		// PASS ON DATA
		//------------------------------------------------------------------
		changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

		countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
		staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
		countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
		//------------------------------------------------------------------

		return '<input type="button" value="Click!" style="position: absolute; left: '+(win_x/2)+'px; top: '+(win_y/2)+'px">';
	},
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		GazeCloudAPI.UseClickRecalibration = false; 
		document.body.style.cursor = 'none';

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

var loop_forced_clickRecal = 
{
	timeline: [forced_clickRecal],
	loop_function: function()
	{
		if(buttonIter < 4)
		{
			buttonIter++;
			return true;
		}
		else
		{
			buttonIter = 0;
			return false;
		}

	}
}

