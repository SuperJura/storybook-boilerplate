import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'
import RoundIconButton from '../roundIconButton'

export default class Card extends React.Component
{
    render()
    {
        return (
            <div className={styles.card}>
                <img src={this.props.imgUrl} className={styles.card_image}/>
                <span className={styles.card_star}>
                    <RoundIconButton type="starEmpty"/>
                </span>
                <span className={styles.card_actions}>
                    <RoundIconButton type="info"/>
                    <RoundIconButton type="plus"/>
                </span>
                <div className={styles.card_clearFloat}/>
                
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