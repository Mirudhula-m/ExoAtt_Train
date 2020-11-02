//--------------------------------------
//**************************************
// Designing of task
//**************************************
//--------------------------------------

//--------------------------------------
// NOISE MASK
//--------------------------------------
/*
function generateNoiseMask()
{
	var rgb_code;
	var hex_code;
	var b_circle = [];
	var y_perp = [];

	var mean = 200/2;
	var std = 30;

	var fix_dot = s.circle(win_x/2, win_y/2, 8);

	for(var i = 0; i<4; i++)
	{
		// designing the circles
		b_circle[i] = s.circle(c_x[i], c_y[i], 70);
		b_circle[i].attr(
		{
			fill: "#666666",
			stroke: "#000",
			strokeWidth: 0.5
		});

		for(var k = radius; k > 0; k--)
		{
			y_perp[k] = Math.sqrt(Math.pow(radius, 2) - Math.pow(k, 2));
			for(var j = 0; j < y_perp[k]; j++)
			{
				
				rgb_code = generateGaussian(mean, std);
				hex_code = Snap.rgb(rgb_code,rgb_code,rgb_code);
				var pix = s.circle(c_x[i]+k, c_y[i] - j, 1).attr({stroke:hex_code});
								
				rgb_code = generateGaussian(mean, std);
				hex_code = Snap.rgb(rgb_code,rgb_code,rgb_code);
				var pix = s.circle(c_x[i]+k, c_y[i] + j, 1).attr({stroke:hex_code});

				rgb_code = generateGaussian(mean, std);
				hex_code = Snap.rgb(rgb_code,rgb_code,rgb_code);
				var pix = s.circle(c_x[i]-k, c_y[i] - j, 1).attr({stroke:hex_code});

				rgb_code = generateGaussian(mean, std);
				hex_code = Snap.rgb(rgb_code,rgb_code,rgb_code);
				var pix = s.circle(c_x[i]-k, c_y[i] + j, 1).attr({stroke:hex_code});
			}
		}
	}

	_4arcs(0);
	noise_str = s.toString();
	s.clear();
	return noise_str;
}
*/