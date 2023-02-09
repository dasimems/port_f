import React from 'react'
import { headerLinks } from '../assets/data';
import { Link } from 'react-router-dom';

const Links = ({links, className, ...props}) => {

    if(!links || !Array.isArray(links)){
        links = headerLinks;
    }

  return (
    <ul className={`${className? className: ""}`}>
        {links.map((linkDetails, index)=>{
            var {linkName, link, bordered} = linkDetails;

            return(
                <li key={index}>
                    <Link className={bordered? "border-link link" : "link"} to={link}>{linkName}</Link>
                </li>
            )
            
        })}
    </ul>
  )
}

export default Links
