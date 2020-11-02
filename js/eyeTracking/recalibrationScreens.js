//--------------------------------------
//**************************************
// MESSAGE TO THE SUBJECT
//**************************************
//--------------------------------------

var recalibrationMSG = 
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
		return  "<p style = 'font-size:27px; color:black'>Re-calibration required. The following screen will show a series of buttons in succession. Set your gaze on the mouse pointer while clicking the button. Press any key to continue.</p>";
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
// RE-CALIBRATION
//**************************************
//--------------------------------------

var recalib9pt_TL = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
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


		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)-200)+'px; top: '+((win_y/2)-200)+'px">';
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

var recalib9pt_TR = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
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

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)+200)+'px; top: '+((win_y/2)-200)+'px">';
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

var recalib9pt_BR = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
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

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)+200)+'px; top: '+((win_y/2)+200)+'px">';
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

var recalib9pt_BL = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
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

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)-200)+'px; top: '+((win_y/2)+200)+'px">';
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

var recalib9pt_C = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
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

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2))+'px; top: '+((win_y/2))+'px">';
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

var recalib9pt = 
{
	timeline: [recalib9pt_TL, recalib9pt_TR, recalib9pt_BR, recalib9pt_BL, recalib9pt_C],
	repetitions: 5
}

var cond_recalib9pt = 
{
	timeline: [recalibrationMSG, recalib9pt],
	conditional_function: function()
	{
		if(do_recalib == 0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

