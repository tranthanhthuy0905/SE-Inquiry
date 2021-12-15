import React, { useState } from 'react';
import '../Menu/menu.css';
import NavBar from '../../components/navbar/NavBar';

const Menu = () => {

    const listCategory = async () => {
        return (
           0
        );
    }

    return (

        <div className='Menu'>
            <NavBar/>
            <div class="category-background">
                <div class="category">
                    <button type ='button' class="popular" onClick={listCategory}>Popular</button>
                    <button type ='button' class="detective" onClick={listCategory}>Detective</button>
                    <button type ='button' class="romance" onClick={listCategory}>Romance</button>
                    <button type ='button' class="history" onClick={listCategory}>History</button>
                    <button type ='button' class="fantasy" onClick={listCategory}>Fantasy</button>
                    <button type ='button' class="sci-fic" onClick={listCategory}>Science fiction</button>
                    <button type ='button' class="more" onClick={listCategory}>More</button>
                </div>
            </div>

            <div class="story">
                <image class="story-picture" src =""></image>
                <h3 class="story-title">Sample Story 1</h3>
                <div class="story-info">
                    <div class="book-open-box">
                        <img class="book-open-vector" src="../../assets/book-open.png" alt=""></img>
                    </div>
                    <div class="view-count-box">
                        <span  class="view-count">10 viewed</span>
                    </div>
                    <div class="tag-box">
                        <img class="tag-vector" src="../../assets/tag.png" alt=""></img>
                    </div>
                    <div class="type-tag-box">
                        <span  class="type-tag">Romance, Fantasy</span>
                    </div>
                    <div class="story-1-description">
                        <span  class="desctiption">Description</span>
                        <span  class="description-detail">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu....</span>
                    </div>
                </div>
                <div class="star-box">
                    <img class="star-vector" src="../../assets/star.png" alt=""></img>
                </div>

                <div  class="rating">4.8</div>
                
                <a class="read-button" href="">
                    <span  class="read">Read</span>
                </a>
                <a class="add-button" href="">
                    <span  class="add">Add to List</span>
                </a>
            </div>
        </div>
    );
  }
  
export default Menu;