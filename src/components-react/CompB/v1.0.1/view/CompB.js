import React, { Component} from 'react';
import styles from "./b.less"
import {Input} from 'jdcloudui';
export default class CompB extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <div className={styles.color}>
         this is an DynamicLoadB <Input />
      </div>
    );
  }
}
