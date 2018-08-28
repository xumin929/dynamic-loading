import $ from "jquery"
import style from "./ma.less";

$(()=>{
	$("button[id^=oop]").bind("click",function(){
		alert("jquery")
	})
})