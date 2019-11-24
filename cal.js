// JavaScript Document



//alert(Math.sin(11/21)) ;
 function poweron()
 {
	
	if(document.getElementById('pbtn').value=='ON' )
	{
		a = window.confirm("Do you want to on this device?") ;
		if(a == true)
		{
			document.getElementById('pbtn').value='OFF';
			document.getElementById('screen').value='0';
			//alert('ON');
		}
		
		
	}
	else
	{
		a = window.confirm("Are you sure you want to off this device?") ;
		if(a == true)
		{
			document.getElementById('pbtn').value='ON';
			document.getElementById('screen').value='0';
			//alert('ON');
		}	
	}
 }
	 function number(num)
	 {
		 if(document.getElementById("pbtn").value == "OFF")
			 {
			 //}
				if( document.getElementById("screen").value =="0" || control == true)
				{
					document.getElementById("screen").value = num;
					control = false ;
				}
				else
				{
					document.getElementById("screen").value += num;
				}
			 }
		else
		{
			alert("Please press the 'ON' button before you can use this device") ;
		}
	}		 

 //m = 0;
function memcl()
{
	//alert(memvalue) ;
	if(document.getElementById("pbtn").value =="OFF")
	{
		memvalue = 0 ;
		document.getElementById("screen").value  = memvalue;
		//alert(memvalue) ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	
	
}

var storedvalue = '' ;
function memsave()
{
	if(document.getElementById("pbtn").value =="OFF")
	{
		storedvalue = document.getElementById("screen").value ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
function memrecall()
{
	if(document.getElementById("pbtn").value =="OFF")
	{
		document.getElementById("screen").value = storedvalue ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	//alert(memvalue) ;
}
function memadd()
{
	if(document.getElementById("pbtn").value =="OFF")
	{
		document.getElementById("screen").value = parseFloat(storedvalue)+1 ;
	}
	else
	{
		alert("Please press the 'ON' button before  you can use thi device") ;
	}
	//alert("add1") ;
}
function memsub()
{
	if(document.getElementById("pbtn").value =="OFF")
	{
		document.getElementById("screen").value = parseFloat(storedvalue)-1 ;
	}
	else
	{
		alert("Please press the 'ON' button to use this device") ;
	}
	//alert("add1") ;
}

function bks()
{
	if (document.getElementById("pbtn").value == "OFF")
	{
	var a = document.getElementById("screen").value;
	var l = a.length;
	var ans = a.substr(0,l-1);
	document.getElementById("screen").value = ans;
	if(a.length == 1)
	document.getElementById("screen").value = "0";
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
function dot()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		var d = document.getElementById("screen").value ;
		var cfd = d.indexOf(".") ;// indexof checks if "." is on the screen before
		if(cfd == -1)
		{
			alert("one dot") ;
			document.getElementById("screen").value += "." ;	
		}
			
	}	
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
var memvalue = document.getElementById("screen").value ;
var operator = '' ;
var control = false ;
function plus()
{
	equals() ;
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(memvalue == '')
		{
			memvalue = parseFloat(document.getElementById("screen").value) ;	
		}
		else
		{
			var s2 = parseFloat(document.getElementById("screen").value) ;
			memvalue = memvalue + s2 ;
			document.getElementById("screen").value = memvalue ;
		}
		operator = "+" ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
function minus()
{
	equals() ;
	if(document.getElementById("pbtn").value == "OFF" )
	{
		if(memvalue == '')
		{
			memvalue = parseFloat(document.getElementById("screen").value ) ;
		}
		else
		{
			var s2 = parseFloat(document.getElementById("screen").value) ;
			memvalue = memvalue - s2 ;
			document.getElementById("screen").value = memvalue ;
		}
		operator = "-" ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
function mult()
{
	equals() ;
	if(document.getElementById("pbtn").value == "OFF" )
	{
		if(memvalue == '')
		{
			memvalue = parseFloat(document.getElementById("screen").value ) ;
		}
		else
		{
			var s2 = parseFloat(document.getElementById("screen").value ) ;
			memvalue = memvalue * s2 ;
			document.getElementById("screen").value = memvalue ;
		}
		operator = "*" ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
function div()
{
	equals() ;
	if(document.getElementById("pbtn").value == "OFF" )
	{
		if(memvalue == '')
		{
			memvalue = parseFloat(document.getElementById("screen").value ) ;
		}
		else
		{
			var s2 = parseFloat(document.getElementById("screen").value ) ;
			memvalue = memvalue / s2 ;
			document.getElementById("screen").value = memvalue ;
		}
		operator = "/" ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
function cent()
{
	equals() ;
	if(document.getElementById("pbtn").value == "OFF" )
	{
		if(memvalue == '')
		{
			memvalue = parseFloat(document.getElementById("screen").value ) ;
		}
		else
		{
			var s2 = parseFloat(document.getElementById("screen").value ) ;
			memvalue = memvalue / 100 ;
			document.getElementById("screen").value = memvalue ;
		}
		operator = "%" ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}
function equals()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(operator == "+")
		{
			var ans = parseFloat(memvalue) + parseFloat(document.getElementById("screen").value) ;
			document.getElementById("screen").value = ans ;	
		}
		if(operator == "-")
		{
			var ans = parseFloat(memvalue) - parseFloat(document.getElementById("screen").value) ;
			document.getElementById("screen").value = ans ;
		}
		if(operator == "*")
		{
			var ans = parseFloat(memvalue) * parseFloat(document.getElementById("screen").value) ;
			document.getElementById("screen").value = ans ;
		}
		if(operator == "/")
		{
			var ans = parseFloat(memvalue) / parseFloat(document.getElementById("screen").value) ;
			document.getElementById("screen").value = ans ;
		}
		if(operator == "%")
		{
			var ans = parseFloat(memvalue / 100) ;
			document.getElementById("screen").value = ans ;
		}
		memvalue = '' ;
		operator = '' ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
}

function sqrut()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		 var x = parseFloat(document.getElementById("screen").value ) ;
		 document.getElementById("screen").value = Math.sqrt(x);
		 //var a = Math.sin(30) ;
		 //alert(a) ; 	
		 //alert (Math.sqrt(16)) ;
		 //alert(Math.cos(60)) ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;
}
function expo()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		var a = '' ;
		a = document.getElementById("screen").value ;
		//alert(Math.pow(10,a)) ;
		b = (Math.pow(10,a)) ;
		document.getElementById("screen").value = b ;
	}
	else
	{
		alert("Please press the 'ON' button to use this device") ;
	}
	control = true ;
}
function negate()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		document.getElementById("screen").value = "-" ;
	}
	else
	{
		alert("Please press the 'ON' button to use this device") ;
	}
}
var x = '' ;
var y = '' ;
function Unknwn1()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		x = document.getElementById('screen').value ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button to use this device") ;
	}
}
function Unknwn2()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		y = document.getElementById('screen').value ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button to use this device") ;
	}
}
function power()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		document.getElementById("screen").value = Math.pow(x,y) ;
		control = true ;
	}
	else
	{
		alert("Please press the 'ON' button to use this device") ;
	}
}
function sqr()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		 var x = parseFloat(document.getElementById("screen").value ) ;
		 document.getElementById("screen").value = x * x ; //Math.sqrt(x);
		 equals() ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;
}
function pi()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		 //var x = parseFloat(document.getElementById("screen").value ) ;
		 document.getElementById("screen").value = Math.PI;
		 equals() ;
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;
}
/*
function scrin()
{
	//document.write("") ;
	document.getElementById("screen").value = "" ;
}*/

function sine()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(document.getElementById("radian").value == "deg")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.sin((x) * (11/630));
		}
		if(document.getElementById("radian").value == "rad")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.sin(x) ;
		}
		 equals() ;	
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;	
}

function cosine()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(document.getElementById("radian").value == "deg")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.cos((x) * (11/630));
		}
		if(document.getElementById("radian").value == "rad")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.cos(x) ;
		}
		 equals() ;	
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;	
}

function tangent()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(document.getElementById("radian").value == "deg")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.tan((x) * (11/630));
		}
		if(document.getElementById("radian").value == "rad")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.tan(x) ;
		}
		 equals() ;	
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;	
}

function asine()
{
	//alert("asin") ;
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(document.getElementById("radian").value == "deg")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.asin(x) * (630/11);
		}
		if(document.getElementById("radian").value == "rad")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.asin(x) ;
		}
/*		 var y = Math.asin(x) * (630/11) ;
		 var z = Math.ceil(y) ;
		 var a = z * 11 ;
		 var b = y * 11 ;
		 var diff = a - b ;
		 var add = b + diff ;
		 var fans = add / 11 ;
		 alert(fans) ;*/
		 equals() ;	
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;	
}

function acose()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(document.getElementById("radian").value == "deg")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.acos(x) * (630/11);

		}
		if(document.getElementById("radian").value == "rad")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.acos(x) ;
		}
		 equals() ;	
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;	
}

function atane()
{
	if(document.getElementById("pbtn").value == "OFF")
	{
		if(document.getElementById("radian").value == "deg")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.atan(x) * (630/11);
		}
		if(document.getElementById("radian").value == "rad")
		{
			 var x = parseFloat(document.getElementById("screen").value ) ;
			 document.getElementById("screen").value = Math.atan(x) ;
		}
		 equals() ;	
	}
	else
	{
		alert("Please press the 'ON' button before you can use this device") ;
	}
	control = true ;	
}
function face()
{
	if(document.getElementById("pbtn").value == "ON")
	{
		//alert("Please press the 'ON' button before you can use this device") ;
		document.getElementById("screen").value = "Press 'ON' to use device" ; // "Please press the 'ON' button before you can use this device" ;
	}
}
function clearit()
{
	//alert("A") ;
	if(document.getElementById("pbtn").value == "OFF")
	{
		//alert("a") ;
		document.getElementById("screen").value = 0 ;
	}
}

function degree()
{
	if(document.getElementById("radian").value == "deg")
	{
		document.getElementById("radian").value = "rad" ;
	}
	else
	{
		document.getElementById("radian").value = "deg" ;
	}
}



//time

function time()
{
	d = new Date() ;
	hr = d.getHours() ;
	mins = d.getMinutes() ;
	secs = d.getSeconds() ;
	check() ;
	document.getElementById("time").innerHTML = hr + " " + ":" + " " + mins + " " + ":" + " " + secs ;
	window.setTimeout("time()" , 1000) ;
}
function check()
{
	if(mins<10)
	{
		//alert("less") ;
		mins = "0" + mins ;
	}
	if(hr<10)
	{
		hr = "0" + hr ;
	}
	if(secs<10)
	{
		secs = "0" + secs ;
	}
	if(hr<12)
	{
		secs = secs + " " + ":" + " " + "am"
	}
	if(hr>=12)
	{
		hr = hr - 12 ;
		secs = secs + " " + ":" + " " + "pm"
	}
}