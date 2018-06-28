import React from 'react'
import styles from './index.css'

export default class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.getLogo = this.getLogo.bind(this)
    }

    getLogo()
    {
        if(this.props.logo !== undefined) return(
            <span className={styles.header_title}>
                <img src={this.props.logo} className={styles.header_logo}/>
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
                {this.getLogo()}
            </div>
        )
    }
}