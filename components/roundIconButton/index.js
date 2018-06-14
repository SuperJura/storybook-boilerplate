import React from 'react'
import styles from './index.css'
import infoIcon from '../../static/icons/PNG/info.png'
import plusIcon from '../../static/icons/PNG/plus.png'
import starFull from '../../static/icons/PNG/star-full.png'
import starEmpty from '../../static/icons/PNG/star-empty.png'

export default class RoundIconButton extends React.Component
{
    getIconPath(type) 
    {
        switch(type)
        {
            case 'starEmpty': return starEmpty;
            case 'starFull': return starFull;
            case 'plus': return plusIcon;
            case 'info': return infoIcon;

            default: return infoIcon;
        }
    }

    render()
    {
        return(
            <img 
                className={styles.image} 
                disabled={this.props.disabled} 
                src={this.getIconPath(this.props.type)}
                onClick={this.props.onClick} /> 
        )
    }
}