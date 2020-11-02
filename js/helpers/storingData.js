//--------------------------------------------
// STORING DATA
//--------------------------------------------

function storeData(blockNum, trialNum, cue_pos, initialAngles, changeState, changeDirection, delayDurationFixation, delayDuration, probe_pos)
{
	var finalAngles = [];
	var Response_AFC;
	var RT_AFC;

	var changeAngle;
	var meanCorrect;

	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var psychBlock_Func = 
	{
		type:"html-keyboard-response", // dummy
		data:
		{
			subjectNum: subjectNum,
			blockNum: blockNum,
			trialNum: trialNum,
			WM_cue: cue_pos,
			initialAngles: initialAngles,
			delayDurationFixation: delayDurationFixation,
			delayDuration: delayDuration,
			changeState: changeState,
			changeDirection: changeDirection,
			WM_Probe: probe_pos
		},
		on_load: function(data) 
		{
  		    console.log('Storing Data...');
  		},
		stimulus: function()
		{

			is_trialReject = trialRejection();

			//------------------------------------------------------------------
			// GET DATA FOR STORING
			//------------------------------------------------------------------
			finalAngles = jsPsych.data.get().last(1).values()[0].finalAngles;

			Response_AFC = jsPsych.data.get().last(1).values()[0].Response_AFC;
			RT_AFC = jsPsych.data.get().last(1).values()[0].RT_AFC;

			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;

			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;
			meanCorrect = jsPsych.data.get().last(1).values()[0].meanCorrect;
			oldChangeAngle = jsPsych.data.get().last(1).values()[0].oldChangeAngle
			//------------------------------------------------------------------

			return " ";
		},
		trial_duration: 15,
		on_finish: function(data)
		{
			data.is_trialData = 1;

			data.finalAngles = finalAngles;
			data.Response_AFC = Response_AFC;
			data.RT_AFC = RT_AFC;

			data.countCorrect = countCorrect;
			data.staircaseCorrect = staircaseCorrect;
			data.countNAN = countNAN;

			data.changeAngle = changeAngle;
			data.meanCorrect = meanCorrect;
			data.oldChangeAngle = oldChangeAngle;

			if(trialNum % 8 == 0)
			{
				data.is_staircaseData = 1;
			}

			data.is_trialReject = is_trialReject;
		}
	}
	return psychBlock_Func;
}
