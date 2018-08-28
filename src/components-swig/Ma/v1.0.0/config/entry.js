import $ from "jquery";
import {business} from "../../../appConfig/app"
$(()=>{
	business();
	$("#ok").bind("click",function(){
		alert("jquery")
	})
})