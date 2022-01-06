import React from 'react';
import '../IndvPage/IndvPage.css';
import NavBar from '../../components/navbar/NavBar';
import TestStory1 from '../../data/TestStory1'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BookOpen from '../../assets/book-open.png';
import Tag from '../../assets/tag.png';
import Star from '../../assets/star.png';

const IndvPage = () => {

  const addToList = () => {
    return alert("Story added to list.")
  }

  return (
    <div>
      <NavBar/>
      <ul className='story-content'>
        {TestStory1.map((story) => {
          const { title, picture, link, view, tag, description, rating } = story;
          return (
            <li clasname = {title}>
              <img className="story-picture" src = {picture} />
              <h3 className="story-title">{title}</h3>
              <img className ='book-open' src={BookOpen}/>
              <div className="view-count-box">
                <span  className="view-count">{view} viewed</span>
              </div>
              <img className='tag' src={Tag}/>
              <div className="type-tag-box">
                <span  className="type-tag">{tag}</span>
              </div>
              <div className="story-description">
                <span  className="description">Description</span>
                <p></p>
                <span  className="description-detail">{description}</span>
              </div>         
              <div className='story-rating'>
                <p className="rating-tag">Ratings</p>
                <img className='star' src={Star} />
                <span className="rating">{rating}</span>  
              </div>
 
              <button className="read-button" >
              <a className="game-link" href={link}>Read</a>
              </button>
              <button className="add-to-list" onClick={addToList}>Add to List</button>

              <div>
                
              </div>

            </li>
          );
        })}
      </ul>

    </div>
  )
}
export default IndvPage;