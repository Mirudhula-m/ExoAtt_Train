//--------------------------------------
//**************************************
// Messages to the subject - Psych blocks
//**************************************
//--------------------------------------

//--------------------------------------------
// AT THE START OF THE EXPERIMENT
//--------------------------------------------

var full_screen = 
{
	type: "fullscreen",
	fullscreen_mode: true,
	message: "<p style = 'font-size:20px; color:black'>The experiment will switch to full screen mode when you press the button below</p>",
	on_start: function()
	{
		document.body.style.cursor = 'pointer';
	},
	on_finish: function()
	{
		document.body.style.cursor = 'none';
	}
};

var welcome_block = 
{
	type: "html-keyboard-response",
	stimulus: "<p style = 'font-size:20px; color:black'>Welcome to the practice experiment..</p><p style = 'font-size:20px; color:black'>Press any key to "
			  +"begin.</p>",
};

// resizing the sizes of stimuli based on input from subject
var inputs = 
{
  type: 'resize',
  item_width: 3 + 3/8,
  item_height: 2 + 1/8,
  prompt: "<p style = 'font-size:20px; color:black'>Click and drag the lower right corner of the box until it is the size of a credit card held up to the screen.</p>",
  pixels_per_unit: 135,
  on_start: function()
	{
		document.body.style.cursor = 'pointer';
	},
  on_finish: function()
	{
	document.body.style.cursor = 'none';
	}
};

// Instructions
var instructions = 
{
	type: "html-keyboard-response",
	stimulus: "<p style = 'font-size:27px; color:black'><strong>INSTRUCTIONS</strong></p><p style = 'font-size:27px; color:black'>In this experiment, "
			  +"there will be 4 circular placeholders on the "
			  +"screen. You need to maintain eye fixation on the "
			  +"dot at the centre of the screen throughout the duration of the"
			  +" experiment.</p><p style = 'font-size:27px; color:black'>Each of the placeholders will contain a "
			  +"randomly oriented bar. You will be given a small duration of "
			  +"time to memorise the orientations at their respective "
			  +"locations. Shortly after, there may be a a brief flash "
			  +"on any one of the arcs located adjacent to the placeholders. "
			  +"This has no relevancy to the task in the experiment.</p><p style = 'font-size:27px; color:black'>" 
			  +"The next screen will consist of another 4 oriented bars but "
			  +"with any number of bars having changed angles. One of quadrants "
			  +"of the dot at the centre will have changed to yellow. This "
			  +"indicates the location where you are being probed about "
			  +"whether a change has occured from the first set of oriented "
			  +"bars.</p><p style = 'font-size:27px; color:black'>To indicate a <strong>change</strong>, press the "
			  +"<strong>'m' key</strong>, and to indicate a "
			  +"<strong>no change</strong>, press the <strong>'z' key"
			  +"</strong>.</p><p style = 'font-size:27px; color:black'>There are 64 such trials, in a single block. "
			  +"You are required to complete 8 such blocks. You will be able "
			  +"to take breaks in between each block.</p><p style = 'font-size:27px; color:black'>Press any key "
			  +"to continue.</p>"
};

// example image
var example = 
{
	type: "image-keyboard-response",
	stimulus: 'image/example.png',
	prompt: "<p style = 'font-size:30px; color:black'>This is an example of sequence of events occuring "
			+"in a single trial."
} 

//--------------------------------------------
// DURING THE EXPERIMENT
//--------------------------------------------

function pre_block_msg(blockNum, curr_totalTrialNum)
{
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var msg = 
	{
		type: "html-keyboard-response",
		stimulus: function(data)
		{
			// initialising at the start
			if(curr_totalTrialNum == 1)
			{
				changeAngle = changeAngleInitial;
				countCorrect = 0;
				staircaseCorrect = 0;
				countNAN = 0;
			}
			else
			{
				//------------------------------------------------------------------
				// PASS ON DATA
				//------------------------------------------------------------------
				changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

				countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
				staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
				countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
				//------------------------------------------------------------------
			}

			return "<p style = 'font-size:25px; color:black'>This is experiment block - "+(blockNum)+"</p>"
				   +"<p style = 'font-size:25px; color:black'>Press any key to start the block.</p>";
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
	};
	return msg;
}

function post_block_msg()
{
	var changeAngle;
	var countCorrect;
	var staircaseCorrect;
	var countNAN;

	var msg = 
	{
		type: "html-keyboard-response",
		stimulus: function(data)
		{
			//------------------------------------------------------------------
			// PASS ON DATA
			//------------------------------------------------------------------
			changeAngle = jsPsych.data.get().last(1).values()[0].changeAngle;

			countCorrect = jsPsych.data.get().last(1).values()[0].countCorrect;
			staircaseCorrect = jsPsych.data.get().last(1).values()[0].staircaseCorrect;
			countNAN = jsPsych.data.get().last(1).values()[0].countNAN;
			//------------------------------------------------------------------

			var accuracy = (countCorrect/n_practiceTrials).toFixed(4);

			return "<p style = 'font-size:20px; color:black'>Accuracy: "+accuracy+"</p>"
				  +"<p style = 'font-size:20px; color:black'>You can now take a break. To begin the next block"
				  +", <strong>press any key</strong>.</p>";
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
			console.log("changeAngle - "+data.changeAngle);
		}
	};
	return msg;
}