
import ApiClient from '../../helpers/ApiClient';

(() => {
	var client = ApiClient(),modules=[];
	client.get('/findComponents-mall.json').then(r=>{
		let hooks = r.data;
		for(var i in hooks) {
			for(var j = 0; j < hooks[i].length; j++) {
				import("../../components-swig/"+hooks[i][j].name+"/"+hooks[i][j].version+"/view/"+hooks[i][j].name)
			}
		}
		
	}).catch(e=>{
		res.send(e)
	})
	//res.render("ssr/template/list",{pages:[{page:"ma/header-1"},{page:"mb/header-2"}]});
	//发送请求取得模块
	//后端加载
	//生成js架子放入webpack-assets.json
	//运行时加载js
})();