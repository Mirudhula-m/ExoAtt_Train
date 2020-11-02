//--------------------------------------
//**************************************
// PRESENTATION SCREENS
//**************************************
//--------------------------------------

//--------------------------------------
// FIXATION DOT
//--------------------------------------

function screen1(duration, curr_totalTrialNum)
{
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();
			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			//------------------------------------------------------------------

			inTrial_gazeMetric_initialIter = eyeIter;

			fixationDot();
			stim_str = s.toString();
			s.clear();
			return stim_str;
			
		},
		on_load: function() 
		{
			console.log("---------------------------------------------------");
			console.log("START OF NEW TRIAL "+curr_totalTrialNum+" ---------");
			console.log("---------------------------------------------------");
//  		    console.log('s1 just finished loading.');
  		},
  		on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s1 = "+lat);
  			trial_latency.s1 = lat - duration;
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
	return psychBlock_NR;
}

//--------------------------------------
// STIMULUS 1 PRESENTATION
//--------------------------------------

function screen2(duration, initialAngles)
{
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();
			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			//------------------------------------------------------------------

			fixationDot();
			_4bars(initialAngles);
			cue_flag = 0;
			_4arcs(cue_flag);

			stim_str = s.toString();
			s.clear();
			return stim_str;
		},
/*		on_load: function() 
		{
  		    console.log('s2 just finished loading.');
  		},
*/	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s2 = "+lat);
  			trial_latency.s2 = lat - duration;
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
	return psychBlock_NR;
}

//--------------------------------------
// NOISE MASK / BACKWARD VISUAL MASK
//--------------------------------------

function screen3(duration)
{
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var img_path = "image/noise.png";

	var psychBlock_NR_IMG = 
	{
		type: "image-keyboard-response",
		stimulus_height: 477-0.25,
		stimulus_width: 477-0.25, // 0.25 is the image correction value
		stimulus: img_path,
		choices: jsPsych.NO_KEYS,
		trial_duration: duration,
		on_load: function() 
		{
			a = (new Date()).getTime();
//  		    console.log('s3 just finished loading.');
  		    //------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			//------------------------------------------------------------------
  		},
  		on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s3 = "+lat);
  			trial_latency.s3 = lat - duration;
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
	return psychBlock_NR_IMG;
}

/*
// for generating noise mask on the fly..
	var psychBlock_NR =
	{
		type: "html-keyboard-response",
		stimulus: generateNoiseMask(),
		trial_duration: 50,
		choices: jsPsych.NO_KEYS,
		on_load: function() 
		{
  		    console.log('s3 just finished loading.');
  		    a = (new Date()).getTime();
  		},
  		on_finish: function()
  		{
  			console.log((new Date()).getTime() - a);
  		}
	}
*/


//--------------------------------------
// DELAY SCREEN
//--------------------------------------

function delay_cue(duration, cue_flag, screen, cue_pos) 
{
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();
			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			//------------------------------------------------------------------

			fixationDot();
			_4arcs(cue_flag, cue_pos);
			stim_str = s.toString();
			s.clear();
			return stim_str;
		},
/*		on_load: function() 
		{
  		    console.log('s4/5/6 just finished loading.');
  		},
*/  	on_finish: function(data)
  		{
  			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
  			data.changeAngle = changeAngle;
  			data.countCorrect = countCorrect;
  			data.staircaseCorrect = staircaseCorrect;
  			data.countNAN = countNAN;
  			//------------------------------------------------------------------
  			
  			lat = (new Date()).getTime() - a;
  			console.log("s4/5/6 = "+lat);

  			if(screen == 4)
  				{ trial_latency.s4 = lat - duration; }
  			if(screen == 5)
  				{ trial_latency.s5 = lat - duration; }
  			if(screen == 6)
  				{ trial_latency.s6 = lat - duration; }
  		}
	}
	return psychBlock_NR;
}


//--------------------------------------
// FLICKERING CUE SCREEN
//--------------------------------------

function flickering_cue(duration, cue_flag, cue_pos) 
{
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();
			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			//------------------------------------------------------------------

			fixationDot();
			_4arcs(cue_flag, cue_pos);
			stim_str = s.toString();
			s.clear();
			return stim_str;
		},
/*		on_load: function() 
		{
  		    console.log('s4/5/6 just finished loading.');
  		},
*/  	on_finish: function(data)
  		{
  			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
  			data.changeAngle = changeAngle;
  			data.countCorrect = countCorrect;
  			data.staircaseCorrect = staircaseCorrect;
  			data.countNAN = countNAN;
  			//------------------------------------------------------------------
  			
  			lat = (new Date()).getTime() - a;
  			console.log("cue = "+lat);
  		}
	}
	return psychBlock_NR;
}

function cue_loop(duration, cue_pos)
{
	var flickerTime = 150;//duration/flickerFreq; //ON time and OFF time
	var N_flickers = duration/flickerTime;
	var isON = 1;

	for(var flicker = 0; flicker < N_flickers; flicker++)
	{
		if(isON) { 
			exp_timeline.push(flickering_cue(flickerTime, 1, cue_pos)); 
			isON = 0;
		}
		else { 
			exp_timeline.push(flickering_cue(flickerTime, 0, cue_pos)); 
			isON = 1;
		}
	}
}

//--------------------------------------
// STIMULUS 2 PRESENTATION
//--------------------------------------

function screen7(duration, initialAngles, changeState, changeDirection)
{
	finalAngles = [];
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function(data)
		{
			a = (new Date()).getTime();
			
			// used for final angles calculation
			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			//------------------------------------------------------------------
			
			finalAngles = getFinalAngles(initialAngles, changeState, changeDirection, changeAngle);

			fixationDot();
			_4bars(finalAngles);
			cue_flag = 0;
			_4arcs(cue_flag);
			stim_str = s.toString();
			s.clear();
			return stim_str;
		},
/*		on_load: function() 
		{
  		    console.log('s7 just finished loading.');
  		},
*/  	on_finish: function(data)
  		{

  			inTrial_gazeMetric_finalIter = eyeIter;

  			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
  			data.changeAngle = changeAngle;
  			console.log("changeAngle - "+data.changeAngle);

  			data.finalAngles = finalAngles;
  			console.log("initial - "+initialAngles);
  			console.log("final - "+data.finalAngles);

  			data.countCorrect = countCorrect;
  			data.staircaseCorrect = staircaseCorrect;
  			data.countNAN = countNAN;
  			//------------------------------------------------------------------

  			lat = (new Date()).getTime() - a;
  			console.log("s7 = "+lat);
  			trial_latency.s7 = lat - duration;
  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// RESPONSE BLOCK
//--------------------------------------

function ResponseBlock(duration, probe_pos)
{
	finalAngles = [];
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var psychBlock_R =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: [90, 77], // left (no change) - 90; right (change) - 77
		stimulus: function(data)
		{
			a = (new Date()).getTime();

			// used for producing the bars
			finalAngles = jsPsych.data.get().last(1).values()[0].finalAngles;

			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;

			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;
			//------------------------------------------------------------------

			fixationDot(probe_pos);
			_4bars(finalAngles);
			cue_flag = 0;
			_4arcs(cue_flag);
			stim_str = s.toString();
			s.clear();
			return stim_str;
		},
/*		on_load: function() 
		{
  		    console.log('RB just finished loading.');
  		},
*/ 		on_finish: function(data)
  		{
  			// recording subject data
			sub_response = [90, 77].indexOf(data.key_press); // 0 for no change and 1 for change
  			if(data.rt == null) { sub_RT = data.rt; }
  			else { sub_RT = (data.rt).toFixed(2); }

  			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
  			data.finalAngles = finalAngles;

  			data.Response_AFC = sub_response;
  			data.RT_AFC = sub_RT;

  			data.changeAngle = changeAngle;

  			data.countCorrect = countCorrect;
  			data.staircaseCorrect = staircaseCorrect;
  			data.countNAN = countNAN;
  			//------------------------------------------------------------------
  			lat = (new Date()).getTime() - a;
  			console.log("s8 = "+lat);
  			trial_latency.s8 = lat - duration;
  		}
	}
	return psychBlock_R;
}

//--------------------------------------
// FEEDBACK MESSAGE
//--------------------------------------

function feedback_message(duration, probe_pos, changeState, trialNum)
{
	finalAngles = [];
	var sub_response;
	var RT_AFC;
	var curr_changeAngle;

	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var feedback = 
	{
		type: "html-keyboard-response",
		choices: jsPsych.NO_KEYS,
		stimulus: function(data)
		{
			a = (new Date()).getTime();
			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			RT_AFC = jsPsych.data.get().last(1).values()[0].RT_AFC;

			finalAngles = jsPsych.data.get().last(1).values()[0].finalAngles;
			//------------------------------------------------------------------

			// will be used for comparing subject response with atual response
			sub_response = jsPsych.data.get().last(1).values()[0].Response_AFC;	

			// will be used for new change angle calculation
			curr_changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			// will be used for counting responses
			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			
			// reset after every block
			if(trialNum == 1) 
			{ 
				countCorrect = 0; 
				staircaseCorrect = 0;
				countNAN = 0;
			}
			
			// reset staircase variables after every 8 trials
			if(trialNum > 8 && trialNum % 8 == 1)
			{
				staircaseCorrect = 0;
				countNAN = 0;
			}
			
			// compare subject response and actual response
			if(sub_response == changeState[probe_pos])
			{
				countCorrect = countCorrect + 1; 
				staircaseCorrect = staircaseCorrect + 1;
				return "<p style = 'font-size:20px; color:black'>Correct Response.</p>";
			}
			else if(sub_response == -1)
			{
				countNAN = countNAN + 1;
				return "<p style = 'font-size:20px; color:black'>No Response recorded.</p>";
			}
			else
			{
				return "<p style = 'font-size:20px; color:black'>Incorrect Response.</p>";
			}
		},
		trial_duration: duration,
		on_finish: function(data)
		{
			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			data.finalAngles = finalAngles;

			data.Response_AFC = sub_response;
			data.RT_AFC = RT_AFC;

			data.countCorrect = countCorrect;
			data.staircaseCorrect = staircaseCorrect;
			data.countNAN = countNAN;
			console.log("countCorrect "+data.countCorrect);
			console.log("staircaseCorrect "+data.staircaseCorrect);
			console.log("countNAN "+data.countNAN);
			//------------------------------------------------------------------

			// staircase session
			if(trialNum >= 8 && trialNum % 8 == 0 && countNAN != 8)
			{
				CR = staircaseCorrect;
				NAN = countNAN;
				meanCorrect = (CR / (8 - NAN)).toFixed(2);
				changeAngle = curr_changeAngle + ((threshold - meanCorrect) * step);

				data.meanCorrect = meanCorrect;
				data.changeAngle = changeAngle;
				data.oldChangeAngle = curr_changeAngle;

				console.log("new changeAngle = "+data.changeAngle);
				console.log("meanCorrect = "+data.meanCorrect);
			}
			else
			{
				data.changeAngle = curr_changeAngle;
				console.log("same changeAngle = "+data.changeAngle);
			}
			lat = (new Date()).getTime() - a;
  			console.log("feedback = "+lat);
  			trial_latency.s9 = lat - duration;

			trial_latency_json = JSON.stringify(trial_latency);
			all_trial_latency.push(trial_latency_json);
			trial_latency = {};
		}
	}
	return feedback;
}