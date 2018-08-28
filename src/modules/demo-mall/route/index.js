
import ApiClient from '../../../helpers/ApiClient';
import swigrender from "../../../routes/swigrender";
var swig = require("swig");
export default function(req,res,next) {
	var client = ApiClient(req),modules=[],flat=[];
	function addImportList(name) {
		modules.push(import(name));
	}
	client.get('/findComponents-mall.json').then(r=>{
		let hooks = r.data,hook={};
		for(let i in hooks) {
			hook[i] = hooks[i].length;
			for(let j = 0; j < hooks[i].length; j++) {
				let module = "../../../components-swig/"+hooks[i][j].name+"/"+hooks[i][j].version+"/view/";
				addImportList(module);
				flat.push(hooks[i][j]);
			}
		}
		
		Promise.all(modules).then(async (resl) => {
			let dat = [],start = 0;

			for(let i = 0; i < resl.length; i++) {
				let frag = await resl[i](req,swig,flat[i]);
				flat[i].content = frag;
			}
		    for(let h in hook) {
				let count = hook[h];
				hook[h] = flat.slice(start,start+count);
				start += count;
			}
		    swigrender(req,res,"demo-mall/template/list",hook);
		}).catch(e=>{
			res.send(e)
		});
		
	}).catch(e=>{
		res.send(e)
	})
	//res.render("ssr/template/list",{pages:[{page:"ma/header-1"},{page:"mb/header-2"}]});
	//发送请求取得模块
	//后端加载
	//运行时加载js
}
export function config(req,res,next) {
  	res.send("ok")
}
//module.exports = router;