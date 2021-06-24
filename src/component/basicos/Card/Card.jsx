import React from 'react';
import './Card.css'
import { Panel } from 'rsuite';

export default (props) => {
  return (
    <Panel shaded bordered bodyFill>
      { props.image &&
        <img src={props.image} className="responsive" alt="" />
      }
      <Panel header={props.title}>
        {props.children}
      </Panel>
    </Panel>
  )
}