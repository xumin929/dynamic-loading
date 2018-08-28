import React, { Component} from 'react';
import { connect } from 'react-redux';
import { load } from './redux';
import { getDomain } from './redux-redial';
import Loadable from 'react-loadable';
import { provideHooks } from 'redial';
function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}
@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    await dispatch(getDomain()).catch(() => null);
    console.log("get data async from server")
  }
})
@connect(state => ({ components: state.dyComponents }), { load })
export default class Test extends Component {
  constructor(props, context) {
    super(props, context);
  }
  handle() {
    import('../../../components-react/CompB/v1.0.1/view/CompB')
  }
  componentWillMount() {
    console.log("server and browser run this");
    
  }
  componentDidMount() {
    console.log("only browser run this");
    this.props.load();
  }
  test() {
    alert("callback test")
  }
  loadInstance() {
    var {components = {}} = this.props.components||{};
    var instances = {};
    var that = this;
    Object.keys(components).map((hook)=>{
      components[hook].map((value)=>{
        var Ins = Loadable({
          loader: () => import('../../../components-react/'+value["name"]+"/"+value["version"]+"/view/").then(object => object.default),
          loading: Loading,
          delay: 3000,
          render(loaded) {
            let Component = loaded;
            let props = value["config"];
            //props.callback = eval(props.callback)
            return <Component {...props}  />;
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
      <div>
        <div data-id="HOOK_TL">
           {
              (components.HOOK_TL||[]).map((Component,i)=>{
                return <Component key={i} />
              })
           }
        </div>
        <div style={{padding:"20px 0px 20px 0px"}}>中间是静态内容----------------------------------------------</div>
        <div data-id="HOOK_LL">
           {
              (components.HOOK_LL||[]).map((Component,i)=>{
                return <Component key={i} />
              })
           }
        </div>
      </div>
    );
  }
}
