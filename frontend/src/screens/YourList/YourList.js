import React, {useState} from 'react';
import '../YourList/index.css';
import NavBar from '../../components/navbar/NavBar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BookOpen from '../../assets/book-open.png';
import Tag from '../../assets/tag.png';
import Star from '../../assets/star.png';
import TestStory1 from '../../data/TestStory1'

const YourList = () => {

    const onPublishButton = () => {
        document.getElementById("publish-stat-drop").classList.toggle("show");
    }

    return (
        <body> 
            <NavBar/>
            <div classname= 'script-builder-label'>
                <h2>Script Builder</h2>
            </div>

            <ul className = "story-list">
                {TestStory1.map((story) => {
                const { title, picture, link, view, tag, description} = story;
                return (
                    <li className={title}>                        
                        <img className="story-picture" src = {picture} />
                        <h3 className="story-title">{title}</h3>
                        <div className="story-info">
                            <img className ='book-open' src={BookOpen}/>
                            <div className="view-count-box">
                                <span  className="view-count">{view} viewed</span>
                            </div>
                            <img className='tag' src={Tag}/>
                            <div className="type-tag-box">
                                <span  className="type-tag">{tag}</span>
                            </div>
                            <div className="story-description">
                                <span  className="desctiption">Description</span>
                                <span  className="description-detail">{description}</span>
                            </div>
                        </div>
                        <div class = 'publish-dropdown'>
                            <button onClick={onPublishButton} class = 'publish-button'>Unpublished</button>
                            <div id = 'publish-stat-drop' class = 'dropdown-content'>
                                <a href='/preview'>Preview</a>
                                <a href='/publish'>Publish</a>
                            </div>
                        </div>

                    </li>
                    );
                })}
            </ul>
        </body>
    )
}

export default YourList;