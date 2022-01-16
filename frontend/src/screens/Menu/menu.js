import React, { useState } from 'react';
import '../Menu/menu.css';
import NavBar from '../../components/navbar/NavBar';
import { categories } from '../../data/Menu/categories';
import { stories } from '../../data/story-test';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BookOpen from '../../assets/book-open.png';
import Tag from '../../assets/tag.png';
import Star from '../../assets/star.png';
import {Helmet} from "react-helmet";

const Menu = () => {
    const listCategory = () => {
        return (
            0
        );
    }

    const readStory = () => {
        return alert("Read THIS!!!")
    }

    const addToList = () => {
        return alert("Story added to list.")
    }

    console.log('prevLocalStorage', localStorage.getItem('script'));

    return (

        <div className='Menu'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Inquiry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <NavBar/>
            <div class="category-background">
                <ul className="category">
                    {categories.map((category) => {
                        const { cat } = category;
                        return (
                            <button type ='button' class={cat} onClick={listCategory}>{cat}</button>
                        );
                    })}
                </ul>
            </div>
            
            <ul className = "story-list">
                {stories.map((story) => {
                    const { title, picture, link, view, tag, description, rating } = story;
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
                                
                                <img className='star' src={Star} />

                                <div  className="rating">{rating}</div>   
                                <button className="read-button" >
                                    <a className="game-link" href={link}>Read</a>
                                </button>
                                <button className="add-to-list" onClick={addToList}>Add to List</button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
  }
  
export default Menu;