// Script for eye tracking

var gazeX = [], gazeY = [], headX = [], headY = [], headZ = [], headYaw = [], headRoll = [], headPitch = [], gazeTimeStamp = [], eyeIter = 0;

GazeCloudAPI.OnCalibrationComplete =function(){ console.log('gaze Calibration Complete')  }
GazeCloudAPI.OnCamDenied =  function(){ console.log('camera  access denied')  }
GazeCloudAPI.OnError =  function(msg){ console.log('err: ' + msg)  }

function PlotGaze_withFB(GazeData) 
{

/*
	GazeData.state // 0: valid gaze data; -1 : face tracking lost, 1 : gaze uncalibrated
	GazeData.docX // gaze x in document coordinates
	GazeData.docY // gaze y in document cordinates
	GazeData.time // timestamp
*/  

    // console.log("GazeX: " + GazeData.GazeX + " GazeY: " + GazeData.GazeY);   

    var x = GazeData.docX;
    var y = GazeData.docY;

    var gaze = document.getElementById("gaze");
   
    x -= gaze.clientWidth/2;
    y -= gaze.clientHeight/2;

    gaze.style.left = x + "px";
    gaze.style.top = y + "px";

     
    if(GazeData.state != 0)
    {
        if( gaze.style.display  == 'block')
        {
            gaze.style.display = 'none';
        }
    }
    else
    {
        if( gaze.style.display  == 'none')
        {
            gaze.style.display = 'block';
        }
    }  

    gazeX[eyeIter] = GazeData.GazeX;
    gazeY[eyeIter] = GazeData.GazeY;
    headX[eyeIter] = GazeData.HeadX;
    headY[eyeIter] = GazeData.HeadY;
    headZ[eyeIter] = GazeData.HeadZ;
    headYaw[eyeIter] = GazeData.HeadYaw;
    headRoll[eyeIter] = GazeData.HeadRoll;
    headPitch[eyeIter] = GazeData.HeadPitch;
    gazeTimeStamp[eyeIter] = GazeData.time; 

    eyeIter++;

}

function PlotGaze_woFB(GazeData) 
{

/*
    GazeData.state // 0: valid gaze data; -1 : face tracking lost, 1 : gaze uncalibrated
    GazeData.docX // gaze x in document coordinates
    GazeData.docY // gaze y in document cordinates
    GazeData.time // timestamp
*/

    console.log("GazeX1: " + GazeData.GazeX + " GazeY1: " + GazeData.GazeY);   

    var x = GazeData.docX;
    var y = GazeData.docY;

    var gaze = document.getElementById("gaze");
   
    x -= gaze.clientWidth/2;
    y -= gaze.clientHeight/2;

    gaze.style.left = x + "px";
    gaze.style.top = y + "px";
     
    gaze.style.display = 'none';  

    gazeX[eyeIter] = GazeData.GazeX;
    gazeY[eyeIter] = GazeData.GazeY;
    headX[eyeIter] = GazeData.HeadX;
    headY[eyeIter] = GazeData.HeadY;
    headZ[eyeIter] = GazeData.HeadZ;
    headYaw[eyeIter] = GazeData.HeadYaw;
    headRoll[eyeIter] = GazeData.HeadRoll;
    headPitch[eyeIter] = GazeData.HeadPitch; 
    gazeTimeStamp[eyeIter] = GazeData.time; 

    eyeIter++;
}

