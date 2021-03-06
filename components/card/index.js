import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'
import RoundIconButton from '../roundIconButton'

export default class Card extends React.Component
{
    getFavouriteIcon(favouriteStatus)
    {
        if(favouriteStatus !== undefined && favouriteStatus === "true") return "starFull"
        else return "starEmpty"
    }

    render()
    {
        return (
            <div className={styles.card}>
                <img src={this.props.imgUrl} className={styles.card_image}/>
                <span className={styles.card_star}>
                    <RoundIconButton type={this.getFavouriteIcon(this.props.isFavourite)} onClick={this.props.onFavourite}/>
                </span>
                <span className={styles.card_actions}>
                    <RoundIconButton type="info" onClick={this.props.onInfo}/>
                    <RoundIconButton type="plus" onClick={this.props.onPlus}/>
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