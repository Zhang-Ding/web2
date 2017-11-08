var str='';
function showData(which){
	str+=which.value;
	document.getElementById("result").innerHTML = str;
}
function calculate(){     
			document.getElementById("result").innerHTML = '';
			var resultNum=eval(str);
			resultNum+='';
			if(resultNum.indexOf(".")>0)
			{
				var a=resultNum.indexOf(".");
				resultNum=resultNum.substring(0,a+3);
			}
			document.getElementById("result").innerHTML = resultNum;
			str=resultNum;
		}
		function clearData(){    
			str="";
			document.getElementById("result").innerHTML = 0;
		}
		function diverseFun(which){   
			switch(which.value)
				{
				case"=":
					calculate();
					break;
				case"C":
					clearData();
					break;
				default:
					showData(which);
				}
		}
		function loadEvent(){      
			var buttons=document.getElementsByTagName("input");
			for(var i=0;i<buttons.length;i++)
			{  buttons[i].onclick=function(){diverseFun(this);};
			}
		}
		window.onload=function(){
			loadEvent();
		}
