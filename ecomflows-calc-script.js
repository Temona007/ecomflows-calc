/* ====== EcomFlows Calculator ========= */

// Counter
const counterAnim = (qSelector, start = 0, end, duration = 1000, prefix) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress   = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerText = prefix + Math.floor(progress * (end - start) + start).toLocaleString("en-US");
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
  window.requestAnimationFrame(step);
};

function EcomFlowsCalc() {

	// Input values:
	let packagePlan    = document.getElementById('packagePlan').value;
	let monthlyRevenue = document.getElementById('monthlyRevenue').value * 1;
	let extraRevenue;

	switch (packagePlan) {
	  case 'pro':
	    console.log(packagePlan);
	    extraRevenue = monthlyRevenue * 0.08;
	    break;
	  case 'pro+':
	    console.log(packagePlan);
	    extraRevenue = monthlyRevenue * 0.1;
	    break;
	  case 'elite':
	    console.log(packagePlan);
	    extraRevenue = monthlyRevenue * 0.13;
	    break;
	  default:
	    console.log(`Sorry, service not avaliable ...`);
	    extraRevenue = monthlyRevenue;
	}

	// Show result
	//document.getElementById('extraRevenue').innerHTML  = "$" + Math.round(extraRevenue).toLocaleString("en-US").toString(2);
	document.getElementById('extraRevenue').value ="€ " + Math.round(extraRevenue).toLocaleString("en-US").toString(2);
	counterAnim("#extraRevenue",  0, extraRevenue, 1000, " \20AC");
}

// commas to thousands
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function addDollarSign1() {
	let inputDollar = document.getElementById("inputDollar1");
	inputDollar.className += " input-dollar";
	document.getElementById("monthlyRevenue").style.paddingLeft = '26px';
}
