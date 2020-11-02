// Get task input data from csv file in gist github

/* 
cue - 0
initial angle - 1, 2, 3, 4
delay duration - 5
change state - 6, 7, 8, 9
change direction - 10, 11, 12, 13
probe - 14
*/

var trialData_url = "https://gist.githubusercontent.com/Mirudhula-m/1bab0de59cb42205b3bf36e9237352f2/raw/f6e7eb92465e0c9b1e60a4b0f966b49cc3b84e03/trialDataTrain_neut.txt";
var request = new XMLHttpRequest();  
request.open("GET", trialData_url, false);   
request.send(null);  

var trialData = [];

var jsonObject = request.responseText.split(/\r?\n|\r/);
for (i = 0; i < jsonObject.length; i++) 
{
	trialwiseData_obj = {};
	trialwiseData_arr = jsonObject[i].split(',');
	trialwiseData_obj.WM_cue = parseInt(trialwiseData_arr[2]);
	trialwiseData_obj.initialAngles = [parseInt(trialwiseData_arr[3]), parseInt(trialwiseData_arr[4]), parseInt(trialwiseData_arr[5]), parseInt(trialwiseData_arr[6])];
	trialwiseData_obj.delayDuration = parseInt(trialwiseData_arr[7]*1000);
	trialwiseData_obj.changeState = [parseInt(trialwiseData_arr[8]), parseInt(trialwiseData_arr[9]), parseInt(trialwiseData_arr[10]), parseInt(trialwiseData_arr[11])];
	trialwiseData_obj.changeDirection = [parseInt(trialwiseData_arr[12]), parseInt(trialwiseData_arr[13]), parseInt(trialwiseData_arr[14]), parseInt(trialwiseData_arr[15])];
	trialwiseData_obj.WM_Probe = parseInt(trialwiseData_arr[16]);
	trialData.push(trialwiseData_obj);
}