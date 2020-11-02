// trial rejection when gaze fixation is not maintained
// returns 1 or 0
// 1, denotes that the trial is to be rejected, and vice-versa

function trialRejection()
{
	var is_trialReject_iter = 0;
	var is_trialReject = 0;

	err_lim_x1 = win_x/2 - 80;
	err_lim_x2 = win_x/2 + 80;

	err_lim_y1 = win_y/2 - 80;
	err_lim_y2 = win_y/2 + 80;

	for(var TR_gazeIter = inTrial_gazeMetric_initialIter; TR_gazeIter < inTrial_gazeMetric_finalIter; TR_gazeIter++)
	{
		if(gazeX[TR_gazeIter] >= err_lim_x1 && gazeX[TR_gazeIter] <= err_lim_x2 && gazeY[TR_gazeIter] >=err_lim_y1 && gazeY[TR_gazeIter] <= err_lim_y2)
		{
			continue;
		}
		else
		{
			is_trialReject_iter++;
		}
	}

	if(is_trialReject_iter > 2)
	{
		is_trialReject = 1;
	}

	return is_trialReject;
}