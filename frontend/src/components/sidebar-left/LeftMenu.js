import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './LeftMenu.css';
import {onSelectPage, addChoice} from '../../redux';
import { ConsoleSqlOutlined } from '@ant-design/icons';

const LeftMenu = () => {
    console.log('localStorage', localStorage);
    let pageName = '';
    let script = JSON.parse(localStorage.getItem("script"));
    const [chapterList, setChapterList] = useState(JSON.parse(localStorage.getItem('script')).chapters || []);
    const {select} = useSelector((state) => state.leftMenu);

    const dispatch = useDispatch();

    const addTextSection = () => {
        return alert("New Text created");
    }

    const addStats = () => {
        return alert("New Stats added");
    }

    const addVar = () => {
        return alert("New Variable created");
    }

    const addButton = () => {
        return alert("New Button created");
    }

    const showPages = () => {
        let ChapterList = document.getElementsByClassName("chapter-list");
        console.log("Display clicked")
        Array.from(ChapterList).forEach((ChapterList) => {
            if (ChapterList.style.display === "none") {
                ChapterList.style.display = "block";
            } else {
                ChapterList.style.display = "none";
            }
        })
    }

    const addNewPage = () => {
        while (pageName == null || pageName == '') {
            pageName = prompt('Please enter the name of this page', '')
        }
        let availableList = script.chapters;
        availableList.push(pageName);
        script.chapters = availableList;
        if (script.mainContent.text !== undefined) {
            script.mainContent = {};
        }
        script.mainContent[pageName] = {'choices':[], 'title': pageName, 'content': ''};
        setChapterList(availableList);
        localStorage.setItem('script', JSON.stringify(script));
    }

    const addChoices = () => {
        if (script.mainContent !== {}) {
            if (select) {
                dispatch(addChoice());
            }
        } else {
            return alert('You should create or select a page before creating a choice');
        }
    }

    return (
        <div className='create-page'>
                <div className='left-menu'>
                <ul className='button-list'>
                    <button className='add-page' onClick={addNewPage}>Page +</button>
                    <button className='add-text' onClick={addTextSection}>Text +</button>
                    <button className='add-choice' onClick={addChoices}>Choice +</button>
                    <button className='add-stats' onClick={addStats}>Stats +</button>
                    <button className='add-variable' onClick={addVar}>Variable +</button>
                    <button className='new-button' onClick={addButton}>Button +</button>
                </ul>

                <ul className='add-page-box'>
                    <h3 className="page-in-box">Page</h3>
                    <button className='page-plus' onClick={showPages}>+</button>
                </ul>
                <ul className='chapter-list' style={{display: 'block'}}>
                    {
                        
                        chapterList.map((pageName) => {
                            return (
                                <a key={pageName} className={pageName}  onClick={() => dispatch(onSelectPage(pageName))}>{pageName}</a>
                            );
                        })
                    }
                </ul>
            </div>

            
        </div>
    )
}

export default LeftMenu;