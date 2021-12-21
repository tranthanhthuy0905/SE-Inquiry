import React from 'react'
import { useState } from 'react'
import './LeftMenu.css';
import { chapters } from '../../data/ChapterList/ChapterList';

const addNewPage = () => {
    return alert("New Page created");
}

const addTextSection = () => {
    return alert("New Text created");
}

const addChoice = () => {
    return alert("New Choice created");
}

const addStats = () => {
    return alert("New Stats added");
}

const addVar = () => {
    return alert("New Page created");
}

const addButton = () => {
    return alert("New Page created");
}

const LeftMenu = () => {
    return (
        <div className='left-menu'>
            <ul className='button-list'>
                <button className='add-page' onClick={addNewPage}>Page +</button>
                <button className='add-text' onClick={addTextSection}>Text +</button>
                <button className='add-choice' onClick={addChoice}>Choice +</button>
                <button className='add-stats' onClick={addStats}>Stats +</button>
                <button className='add-variable' onClick={addVar}>Variable +</button>
                <button className='new-button' onClick={addButton}>Button +</button>
            </ul>

            <ul className='add-page-box'>
                <h3 className="page-in-box">Page</h3>
                <button className='page-plus' onClick={addNewPage}>+</button>
            </ul>
            
            <ul className='chapter-list'>
                {chapters.map((chapter) => {
                        const { name, info } = chapter;
                        return (
                            <a className={name} href={ info }>{name}</a>
                        );
                    })}
            </ul>
        </div>
    )
}

export default LeftMenu;
