import React from 'react';
import '../IndvPage/IndvPage.css';
import NavBar from '../../components/navbar/NavBar';
import TestStory1 from '../../data/TestStory1'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BookOpen from '../../assets/book-open.png';
import Tag from '../../assets/tag.png';
import Star from '../../assets/star.png';
import { useNavigate } from 'react-router-dom';

const IndvPage = () => {

  let navigate = useNavigate();
  let ratingList = [1,2,3,4,5];

  const addToList = () => {
    return alert("Story added to list.")
  }

  const navigatePreview = () => {
    navigate('/preview')
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
                {/* <div className="ratings-container"> */}
                  <img className='star-idv' src={Star} />
                  <img className='star-idv' src={Star} />
                  <img className='star-idv' src={Star} />
                  <img className='star-idv' src={Star} />
                  <img className='star-idv' src={Star} />
                {/* </div> */}
               
                {/* <ul className='ratings-container'>
                  {
                    ratingList.map((rate) => {
                        return (<img className='star-idv' src={Star} />)
                      }
                    )
                  }
                </ul> */}
                <span className="rating-idv">{rating}</span>  
              </div>
 
              <button className="read-button-idv" onClick={navigatePreview}>
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