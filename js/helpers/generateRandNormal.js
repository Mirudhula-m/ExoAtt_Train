//--------------------------------------
//**************************************
// Generating random numbers from ND
//**************************************
//--------------------------------------
	// Box-Muller transform - for generating random numbers from normal 
	// distribution 
	// source: https://en.wikipedia.org/wiki/Box–Muller_transform
function generateGaussian(mean,std)
{
    var u1 = Math.random();
    var u2 = Math.random();
    
    const two_PI = Math.PI * 2;
    var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(two_PI * u2);
    var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(two_PI * u2);

    return Math.floor(z0 * std + mean);
}