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
      <ul className='story-content-idv'>
        {TestStory1.map((story) => {
          const { title, picture, link, view, tag, description, rating } = story;
          return (
            <li clasname = {title}>
              <img className="story-pic-idv" src = {picture} />
              <h3 className="story-title-idv">{title}</h3>
              <img className ='book-open-idv' src={BookOpen}/>
              <div className="view-count-box-idv">
                <span  className="view-count-idv">{view} viewed</span>
              </div>
              <img className='tag-idv' src={Tag}/>
              <div className="type-tag-box-idv">
                <span  className="type-tag-idv">{tag}</span>
              </div>
              <div className="story-description-idv">
                <span  className="description-idv">Description</span>
                <p></p>
                <span  className="description-detail-idv">{description}</span>
              </div>         
              <div className='story-rating-idv'>
                <p className="rating-tag-idv">Ratings</p>
                <img className='star-idv' src={Star} />
                <span className="rating-idv">{rating}</span>  
              </div>
 
              <button className="read-button-idv" >
              <a className="game-link-idv" href={link}>Read</a>
              </button>
              <button className="add-to-list-idv" onClick={addToList}>Add to List</button>

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