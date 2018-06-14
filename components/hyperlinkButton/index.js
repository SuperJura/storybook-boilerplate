import React from 'react'
import styles from './index.css'

export default class HyperlinkButton extends React.Component
{

    render()
    {
        return(
            <div className={styles.hyperlinkButton}>
            <a href={this.props.link}>
                <img className={styles.hyperlinkButton_image} 
                     src={this.props.img}>
                </img>
            </a>
                <br/>
                <a href={this.props.link}>{this.props.linkTitle}</a>
            </div>
        )
    }
}
