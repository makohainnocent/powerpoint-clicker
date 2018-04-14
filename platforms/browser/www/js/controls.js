document.addEventListener('deviceready',deviceready, false);

function gotoapp(){
	//document.getElementById("app").style.display="block";
	//document.getElementById("login").style.display="none";
	//var ip = document.getElementById("ip").value;
	//window.location=ip;


	}

function deviceready(){
				document.getElementById('status').innerHTML="ready";
				//alert("device ready");
				//alert(device.version);
				//navigator.notification.beep(2);
				//alert(navigator.geolocation.getCurrentPosition());
				//alert(cordova.file);
				//alert(device.manufacturer);
				//navigator.vibrate(3000);
				//navigator.notification.alert("hello",battery,"alert","ok");
				//window.addEventListener("batterystatus",battery, false);
				}
function loadapp(){status=document.getElementById('status').innerHTML
					if (status=="ready"){
						ip=document.getElementById('ip').value;
						//alert(ip);
						//document.cookie=ip;
						var iab = cordova.InAppBrowser;
						inAppBrowserRef=iab.open(ip, 'random_string', 'location=no,hidden=yes');
						inAppBrowserRef.addEventListener('loadstart',starthh);
						inAppBrowserRef.addEventListener('loadstop', finishedhh);
						inAppBrowserRef.addEventListener('loaderror', errorhh);
						}else{return(0);}
					}
function  starthh(){document.getElementById('app').style.display="none";
					document.getElementById('login').style.display="none";
					document.getElementById('loader').style.display="block";
		  }

function  errorhh(){inAppBrowserRef.close();
					document.getElementById('app').style.display="none";
					document.getElementById('login').style.display="block";
					document.getElementById('loader').style.display="none";
					navigator.notification.beep(1);
					navigator.notification.alert("The system did not detect any signals from remote computer...app design by makoha innocent tel +0781983636",callback,"error!","ok");



		  }

function  finishedhh(){inAppBrowserRef.show();
		  }
function callback(){//hello;
					}