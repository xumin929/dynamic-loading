import swigrender from "../../../../../routes/swigrender";

export default function(req,res,next) {
	console.log("----------------------")
	swigrender(req,res,"../components-swig/Ma/v1.0.0/config/template/cfg",{titleConfig:"ma v1.0.0 配置项"});
}


//module.exports = router;