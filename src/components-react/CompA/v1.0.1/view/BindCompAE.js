import { connect } from 'react-redux';
import inject from "../../../../redux/inject"
import count,* as actions from './reduxAE';
import {getStore} from "../../../../redux/create"
import K from "../../v1.0.0/view/CompA";

@inject({ count:count })
@connect(state => ({ count:state.count }), actions)
export default class CompA extends K {}