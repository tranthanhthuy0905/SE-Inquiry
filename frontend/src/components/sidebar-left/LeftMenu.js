import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './LeftMenu.css';
import {onSelectPage, addChoice} from '../../redux';

const LeftMenu = ({onCreatePage, onClickPage}) => {
    console.log('localStorage', localStorage);
    let pageName = '';
    const [chapterList, setChapterList] = useState(JSON.parse(localStorage.getItem('script')).chapters || []);
    console.log('initial ChapterList: ', chapterList);
    const dispatch = useDispatch();

    const addTextSection = () => {
        return alert("New Text created");
    }

    const addChoices = () => {
        dispatch(addChoice());
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
    var displayedPage;
    const showEditor = pageName => () => {
        console.log("Editor showed");
        // console.log(pageName);
        displayedPage = pageName;
        console.log(displayedPage);
        let visibleEditor = document.getElementsByClassName("editor-canvas");
        Array.from(visibleEditor).forEach((Editor) => {
            if (Editor.style.display === "none") {
                Editor.style.display = "block";
            } else {
                Editor.style.display = "none";
            }
        })
    }

    const addNewPage = () => {
        while (pageName == null || pageName == '') {
            pageName = prompt('Please enter the name of this page', '')
        }
        let script = JSON.parse(localStorage.getItem("script"));
        let availableList = script.chapters;
        availableList.push(pageName);
        script.chapters = availableList;
        if (script.mainContent.text !== null) {
            script.mainContent = {};
        }
        script.mainContent[pageName] = {'choices':[], 'title': pageName, 'content': ''};
        setChapterList(availableList);
        console.log(script);
        localStorage.setItem('script', JSON.stringify(script));
        console.log('aevsvwev', localStorage.getItem('script'));
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