//--------------------------------------
//**************************************
// Designing of task
//**************************************
//--------------------------------------

//--------------------------------------
// 4 BARS STIMULI
//--------------------------------------

function _4bars(angles)
{
	var placeholder = [];
	var x_perp = [];
	var y_perp = [];
	var bar = [];

	for(i = 0; i<4; i++)
	{
		// designing the circles
		placeholder[i] = s.circle(c_x[i], c_y[i], radius);
		placeholder[i].attr(
		{
			fill: "#666666",
			stroke: "#000",
			strokeWidth: 0.5
		});
		// designing the bars
		x_perp[i] = radius * Math.cos(angles[i]*(Math.PI/180));
		y_perp[i] = radius * Math.sin(angles[i]*(Math.PI/180));
		bar[i] = s.line(c_x[i] - x_perp[i], c_y[i] + y_perp[i], c_x[i] + 
			x_perp[i], c_y[i] - y_perp[i]).attr({stroke:"black", strokeWidth: 2});	
	}
}