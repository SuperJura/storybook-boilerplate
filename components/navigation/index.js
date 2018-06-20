import React from 'react'
import { Link } from 'react-router-dom';
import styles from './index.css'

export default class Navigation extends React.Component
{
    render()
    {
        const allLinks = this.props.links;
        if(allLinks != undefined)
        {
            return this.getDivWithLinks(allLinks);
        }
        else
        {
            return <span className = {styles.navigation}>No links</span>
        }
    }

    getDivWithLinks(allLinks)
    {
        return (
            <ul className = {styles.navigation}>
                {
                    allLinks.map((link) => (
                    <li>
                        <Link href="a" to={link.link} >{link.title}</Link> 
                    </li>
                    ))
                }
            </ul>
        )        
    }
}