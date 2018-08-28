import express from 'express';
const router = express.Router();
var config

router.get('/react-demo/?*', function(req, res, next) {
	import("../modules/"+["demo-react","route"].join("/")).then((load) => {
    	load(req,res,next)
	}).catch(err=>{
		console.log(err,"------")
		next();
	});
});
router.get('/mall-demo/?*', function(req, res, next) {
	var module = req.originalUrl.split("/")[3] || "default";
	import("../modules/"+["demo-mall","route"].join("/")).then((load) => {
		var route = load[module] || load;
		route(req,res,next);
	}).catch(err=>{
		console.log(err,"------")
		next();
	});
});

router.get('/configs/?*', function(req, res, next) {
	var path = req.originalUrl.split("/");
	import("../"+[path[3],path[4],path[5],"config/route"].join("/")).then((load) => {
    	load(req,res,next)
	}).catch(err=>{
		console.log(err,"------")
		next();
	});
});



// router.get('/:module/:component', function(req, res, next) {
// 	const module = req.params.module;
// 	const component = req.params.component;
// 	console.log("access-two:",module,"|",component)
// 	import("../modules/"+[module,component,"route"].join("/")).then((load) => {
// 	    load(req,res,next)
// 	}).catch(err=>{
// 		console.log(err,"------")
// 		next();
// 	});
// });

// router.get('/:component', function(req, res, next) {
// 	const component = req.params.component;
// 	console.log("access-one:",component)
// 	import("../modules/"+[component,"route"].join("/")).then((load) => {
// 	    load(req,res,next)
// 	}).catch(err=>{
// 		console.log(err,"------")
// 		next();
// 	});
// });


// Promise.all([
//     import('./a.js'),
//     import('./b.js'),
//     import('./c.js'),
// ])
// .then(([a, {default: b}, {c}]) => {
//     console.log('a.js is loaded dynamically');

//     b('isDynamic');

//     c('isDynamic');
// });

module.exports = router;