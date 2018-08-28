
import ApiClient from '../../../../helpers/ApiClient';
import style from "./ma.less"
export default function(req,swig,instance) {
	return new Promise(function(resolve, reject) {
	    var client = ApiClient(req);
		client.get('/ma.json').then(r=>{
			var output = swig.renderFile("src/components-swig/Ma/v1.0.0/view/header-1.html", {style,instance});
			resolve(output);
		}).catch(e=>{
			resolve(e);
			console.log("err-------------------",e)
		})
	});
}

