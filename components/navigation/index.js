import React from 'react'
import { Link } from 'react-router-dom';

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
            return <div>No links</div>
        }
    }

    getDivWithLinks(allLinks)
    {
        return (
            <div>
                {
                    allLinks.map((link) => <Link href="a" to={link.link} >{link.title}</Link>)
                }
            </div>
        )        
    }
}