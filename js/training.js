//-------------------------------------
// JATOS online experiment.
// Working memory - Exogenous attention
// 
// Task date: 01082020
//-------------------------------------

// Timeline generation

//--------------------------------------
//**************************************
// Timeline of the experiment
//**************************************
//--------------------------------------
var exp_timeline = [];
function createTimeline()
{
	
	jsPsych.data.addProperties({subjectNum: subjectNum});
//	noise_str = generateNoiseMask();
	exp_timeline.push(full_screen, welcome_block, inputs, instructions, example);

//	exp_timeline.push(full_screen, welcome_block, inputs, instructions, example, calibration_msg, calibration);
	var curr_totalTrialNum = 1;

	for(curr_blockNum = 0; curr_blockNum < n_blocks; curr_blockNum++)
	{
		exp_timeline.push(pre_block_msg(curr_blockNum+1, curr_totalTrialNum));

		for(curr_trialNum = 0; curr_trialNum < n_practiceTrials; curr_trialNum++)
		{	
			// every 32 trials --> do forced recalibration
			if(curr_trialNum%5 == 0)
			{
//				exp_timeline.push(loop_forced_clickRecal);
			}

			// pre-trial eye-tracking validation
//			exp_timeline.push(loop_fixation);

			// get counterbalanced data
			cue_pos = trialData[curr_totalTrialNum].WM_cue - 1;
			probe_pos = trialData[curr_totalTrialNum].WM_Probe - 1;
	//		delaytime = (trialData[curr_totalTrialNum].delayDuration);
			delaytime = 200;
			initialAngles = trialData[curr_totalTrialNum].initialAngles;
			changeState = trialData[curr_totalTrialNum].changeState;
			changeDirection = trialData[curr_totalTrialNum].changeDirection;

			screen1_time = Math.floor((Math.random()*50) + 450);
			exp_timeline.push(screen1(screen1_time, curr_totalTrialNum));

			screen2_time = 200;
			exp_timeline.push(screen2(screen2_time, initialAngles));

			screen3_time = 50;
			exp_timeline.push(screen3(screen3_time));
		
			screen4_time = delaytime;
			cue_flag = 0;
			exp_timeline.push(delay_cue(screen4_time, cue_flag, 4));

			screen5_time = 750;//50;
			cue_flag = 1;
			//exp_timeline.push(delay_cue(screen5_time, cue_flag, 5, cue_pos));
//			exp_timeline.push(cue_loop(screen5_time, cue_pos));
			var flickerTime = 150;//duration/flickerFreq; //ON time and OFF time
			var N_flickers = screen5_time/flickerTime;
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

			screen6_time = 50;//1500 - (screen2_time + screen3_time + screen4_time + screen5_time);
			cue_flag = 0;
			exp_timeline.push(delay_cue(screen6_time, cue_flag, 6));

			screen7_time = 200;
			exp_timeline.push(screen7(screen7_time, initialAngles, changeState, changeDirection));
			
			ResponseBlock_time = 1800;
			exp_timeline.push(ResponseBlock(ResponseBlock_time, probe_pos));
			
			feedback_message_time = 2000;
			exp_timeline.push(feedback_message(feedback_message_time, probe_pos, changeState, curr_trialNum+1));

			exp_timeline.push(storeData(curr_blockNum+1, curr_trialNum+1, cue_pos+1, initialAngles, changeState, changeDirection, screen1_time, delaytime, probe_pos+1))

			
			if(curr_trialNum%10 == 0 && curr_trialNum > 9)
			{
//			exp_timeline.push(loop_validation);
			}

			curr_totalTrialNum++;
		}
		exp_timeline.push(post_block_msg());
//		exp_timeline.push(loop_validation);
		
	}
	return exp_timeline;
}