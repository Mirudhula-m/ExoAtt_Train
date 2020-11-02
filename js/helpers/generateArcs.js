//--------------------------------------
//**************************************
// Designing of task
//**************************************
//--------------------------------------

//--------------------------------------
// 4 ARCS; DISTRACTOR
//--------------------------------------

function _4arcs(cue_flag, cue_pos)
{
	var arc = [];
	var _stroke_ = ["black", "black", "black", "black"];
	var dist_ArcfromCirc = 15;
	var angle_arc = 45;
	var arc_radius = 85;

	if(cue_flag == 1)
	{
		if(cue_pos != -1)
		{
			_stroke_[cue_pos] = "white";
		}
		else
		{
			_stroke_[0] = "white";
			_stroke_[1] = "white";
			_stroke_[2] = "white";
			_stroke_[3] = "white";
		}
	}
	arc[0] = s.path("M"+(c_x[0])+" "+(c_y[0]-radius-dist_ArcfromCirc)+
				"A"+ arc_radius+" "+arc_radius+" "+ angle_arc+" 0 0"+
				(c_x[0]-radius-dist_ArcfromCirc)+" "+(c_y[0])).attr({
					fill: "none", stroke: _stroke_[0], strokeWidth: "4"});

	arc[1] = s.path("M"+(c_x[1])+" "+(c_y[1]-radius-dist_ArcfromCirc)+
				"A"+ arc_radius+" "+arc_radius+" "+ angle_arc+" 0 1"+
				(c_x[1]+radius+dist_ArcfromCirc)+" "+(c_y[1])).attr({
					fill: "none", stroke: _stroke_[1], strokeWidth: "4"});

	arc[2] = s.path("M"+(c_x[2])+" "+(c_y[2]+radius+dist_ArcfromCirc)+
				"A"+ arc_radius+" "+arc_radius+" "+ angle_arc+" 0 1"+
				(c_x[2]-radius-dist_ArcfromCirc)+" "+(c_y[2])).attr({
					fill: "none", stroke: _stroke_[2], strokeWidth: "4"});

	arc[3] = s.path("M"+(c_x[3])+" "+(c_y[3]+radius+dist_ArcfromCirc)+
				"A"+ arc_radius+" "+arc_radius+" "+ angle_arc+" 0 0"+
				(c_x[3]+radius+dist_ArcfromCirc)+" "+(c_y[3])).attr({
					fill: "none", stroke: _stroke_[3], strokeWidth: "4"});
}