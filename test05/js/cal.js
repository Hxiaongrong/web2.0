<!--将按键内容以字符串形式存储在文字框中当按钮为“=”时，调用eval方法计算结果然后将结果输出文字框中--> 
var numresult;
var str;

function onclicknum(nums) {
	str = document.getElementById("nummessege");
	str.value = str.value + nums;
}

function onclickclear() {
	str = document.getElementById("nummessege");
	str.value = "";
}

function onclickresult() {
	str = document.getElementById("nummessege");
	try{
		numresult = eval(str.value);
	}catch(e){
		//TODO handle the exception
		str.value="输入错误！";
	}
	str.value = numresult;
}

function onclickdel(){
	str = document.getElementById("nummessege");
	console.log(str.value.substr(str.value.length-1,1));
	var str2=str.value.substr(0,str.value.length-1);
	str.value=str2;
}
