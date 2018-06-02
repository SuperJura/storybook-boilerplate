import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

export default class Card extends React.Component
{
    render()
    {
        return (
            <div className={styles.card}>
                <img src={this.props.imgUrl} style={{maxWidth:'200px', maxHeight:'200px'}}/>
                <div className={styles.container}>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.tagline}</p>
                </div>
            </div>
        )
    }
}

Card.PropTypes = {
    imgUrl: String,
    name: String,
    tagline: String
}