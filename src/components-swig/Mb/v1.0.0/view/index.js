
// export default function() {
// 	console.log("----mb")
// 	Promise.resolve("----mb")
// }
import style from "./mb.less"
export default async function(res,swig) {
	var output = swig.renderFile("src/components-swig/Mb/v1.0.0/view/header-2.html", {style});
	return output;
};

