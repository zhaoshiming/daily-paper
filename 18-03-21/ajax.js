#today is about promise

##ajax  用于异步获取数据

##XMLHttpRequest

是一个js对象

创建一个XMLHttpRequest 对象

let requestObj;
if (window.XMLHttpRequest) {
	requestObj = new XMLHttpRequest();
} else {
	requestObj = new ActiveXObject;
} 

ajax 获取数据的流程 
1. 设置url
2. 打开到服务器的连接
3. 设置服务器完成之后要运行的函数
4. 发送请求


let reqObj;
if(window.XMLHttpRequest) {
	reqObj = new XMLHttpRequest();
} else {
	reqObj = new ActiveXObject;
}

reqObj.open(type, url, true);
reqObj.send(null);
 
reqObj.onreadystatechange = () => {

}


// 发送信息之后，就等待浏览器的相应，设置回调函数就可以
let ser;
if (window.XMLHttpRequest){
	ser = new XMLHttpRequest();
} else {
	ser = new ActiveXObject;
}

ser.open(type,url,false);
ser.setRequestHeader('Content-type','application/x-www-form-urlencoded')
// get 需要发送的信息都在URL上
ser.send(null);
// onreadystatechange 该属性允许一个回调函数
ser.onreadystatechange = () => {
	// 判断readyState   http就绪状态 4表示相应已经完成
	if (ser.readyState == 4) {
		// http状态码
		if (ser.status == 200) {
			..
		} else if (ser.status == 404 ) {
			..
		}
	}else{
		console.log('serve side err');
	}
}

// 一些状态码
301 永久移动
302 找到 但是资源被重定向到另外的URL
305 请求必须使用代理来访问所请求的资源