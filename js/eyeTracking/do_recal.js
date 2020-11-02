// do validation, followed by recalibration

var do_recalib = 0;

// messages to the subject

var loop_validation = 
{
	timeline: [cond_recalib9pt, validationMain],
	loop_function: function()
	{	
		if(TL_bin == 1 && TR_bin == 1 && BL_bin == 1 && BR_bin == 1)		
		{
			do_recalib = 0;
			return false;
		}
		else
		{
			do_recalib = 1;
			return true;
		}
	}
}