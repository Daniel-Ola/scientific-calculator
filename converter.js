// JavaScript Document




function reveal()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(document.getElementById("hide1").hidden == true && document.getElementById("hide2").hidden == true)
		{
			document.getElementById("hide1").hidden = false ;
			document.getElementById("hide2").hidden = false ;
		}
		else
		{
			document.getElementById("hide1").hidden = true ;
			document.getElementById("hide2").hidden = true ;
		}
	}
	else
	{
		alert("Please press the 'ON' button to use this device") ;
	}
}

function cmm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x/100 + "m" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function mcm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x*100 + "cm" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function cmin()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x/2.54 + "inche(s)" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function incm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x*2.54 + "cm"  ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function mkm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x/1000 + "km" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function kmm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x*1000 + "m" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function kmmi()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x/0.621371 + "mile(s)" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function mikm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x*0.621371 + "km" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function cmmm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x*10 + "mm" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}

function mmcm()
{
	var x = parseFloat(document.getElementById("screen").value ) ;
	convert = x/10 + "cm" ;
	document.getElementById("screen").value = convert ;
	control = true ;	
}