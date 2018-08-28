import React, { Component} from 'react';
import Loadable from 'react-loadable';
import {Input} from 'jdcloudui';
import styles from './a.less';
function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}
export default class CompA extends Component {
  constructor(props, context) {
    super(props, context);

  }
  add() {
  	this.props.add();
  }
  mpp() {
  	this.props.mpp();
  }
  loadCmp() {
  	this.props.load()
  }
  loadInstance() {
    var {components = {}} = this.props.components||{};
    var instances = {};
    Object.keys(components).map((hook)=>{
      components[hook].map((value)=>{
        var Ins = Loadable({
          loader: () => import('../../../../components-react/'+value["name"]+"/"+value["version"]+"/view/").then(object => object.default),
          loading: Loading,
          delay: 10,
          render(loaded) {
            let Component = loaded;
            let props = value["config"],key = "key_"+value["id"];
            return <Component {...props} genKey={key} />;
          }
        });
        instances[hook] = instances[hook] || [];
        instances[hook].push(Ins)
      });
    });

    return instances;
  }
  render() {
  	const components = this.loadInstance();
    return (
      <div className={styles.aa} style={{fontSize:this.props["font-size"]}} key={this.props.genKey}>
           <div><Input /></div>
           <div>this is an DynamicLoadA,count {this.props.count.value}</div>
      	   <div>
              <button onClick={()=>this.props.callback()}>callback</button>
      	   		<button onClick={()=>this.add()}>add</button>
      	   		<button onClick={()=>this.mpp()}>mpp</button>
      	   		<button onClick={()=>this.loadCmp()}>add Component from server</button>
      	   	</div>
      	   	<div className={styles.bb}>
      	   		{
      	   			(components.HOOK_A_LL||[]).map((Component,i)=>{
      	   				return <Component key={i} />
      	   			})
      	   		}
      	   	</div>
      </div>
    );
  }
}
