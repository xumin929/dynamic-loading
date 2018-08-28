import { connect } from 'react-redux';
import count,* as actions from './redux';
import dyComponentA,{ load } from './reduxLoad';
import inject from "../../../../redux/inject"
import K from "./CompA";

@inject({ count,dyComponentA })
@connect(state => ({ count:state.count,components:state.dyComponentA }), {...actions,load})
export default class CompA extends K {}