import React from 'react'
import styles from './index.css'

export default class Label extends React.Component
{
    render()
    {
        let fontSize = styles.font1;
        switch (this.props.fontSize) {
            case(2):
                fontSize = styles.font2;
                break;
            case(3):
                fontSize = styles.font3;
                break;
            default: 
                fontSize = styles.font1;
                break;
        }
        return <span className={fontSize}> {this.props.children} </span>
    }
}