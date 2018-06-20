import React from 'react'
import styles from './index.css'
import logo from '../../static/duff.png'

export default class Header extends React.Component
{
    getLogo(showLogo)
    {
        if(showLogo === "true") return(
            <span className={styles.header_title}>
                <img src={logo} className={styles.header_logo}/>
            </span>
        )
    }

    render()
    {
        return(
            <div className={styles.header_header}>
                <span className={styles.header_title}>
                    {this.props.title}
                </span>
                {this.getLogo(this.props.showLogo)}
            </div>
        )
    }
}