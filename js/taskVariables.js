//--------------------------------------
//**************************************
//  Task specific variables
//**************************************
//--------------------------------------

var subjectNum = 0;

//--------------------------------------------
// setting the snap canvas
//--------------------------------------------
var s = Snap('#svg'); //snap svg

// initialising window size
win_x =  screen.width;
win_y =  screen.height;
var s = Snap(win_x, win_y);

//--------------------------------------------
// Experiment variables
//--------------------------------------------

n_blocks = 5;
n_practiceTrials = 10;//64;

changeAngleInitial = 30;

//var noise_str;

var threshold = 0.65;
var step = 20;

//--------------------------------------------
// Screen timings
//--------------------------------------------

//screen1_time is generated randomly
//screen2_time = 200;
//screen3_time = 50;
//screen4_time --> delaytime
//screen6_time --> calculated for each trial
//screen7_time = 200;
//ResponseBlock_time = 1800;
//feedback_message_time = 2000;

var flickerFreq = 20/3; //in hertz (1 in every 150 ms)

//--------------------------------------------
// Variable for storing latency data
//--------------------------------------------

var trial_latency = {};
var trial_latency_json = [];
var all_trial_latency = [];