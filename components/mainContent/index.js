import React from 'react'
import styles from './index.css';

export default class MainContent extends React.Component
{

    render()
    {
        return(
            <div className={styles.mainContent}>
                <div className={styles.children}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}