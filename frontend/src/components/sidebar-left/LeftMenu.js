import React from 'react'
import { useState } from 'react'
import './LeftMenu.css';
import { chapters } from '../../data/ChapterList/ChapterList';
// import { Page } from '../Page/Page';
// import { ChapterModList } from '../../data/ChapterList/ChapterModList';
import { choices } from '../../data/ChoiceList';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';


const LeftMenu = (props) => {
    const [ChapterModList, setChapterModList] = useState([]);

    // const ChapterModList = [
    //     {pageName: 'test',
    //     pageLink: '/',
    //     descLabel: '',
    //     descInput: '',
    //     choiceLabel: '',
    //     choice1: 'Choice 1',
    //     choice1Link: '',
    //     choice2: 'Choice 2',
    //     choice2Link: '',
    //     choice3: 'Choice 3',
    //     choice3Link: '',
    //     choice4: 'Choice 4',
    //     choice4Link: '',
    // }];

    const Page = {
        pageName: '',
        pageLink: '/',
        descLabel: '',
        descInput: '',
        choiceLabel: '',
        choice1: 'Choice 1',
        choice1Link: '',
        choice2: 'Choice 2',
        choice2Link: '',
        choice3: 'Choice 3',
        choice3Link: '',
        choice4: 'Choice 4',
        choice4Link: '',
    }

    const addNewPage = () => {
        let pageName;
        while (pageName == null || pageName == '') {
            pageName = prompt('Please enter the name of this page', '')
        }
        let newPage = Object.create(Page);
        newPage.pageName = pageName;
        newPage.pageLink+= pageName;
        newPage.descLabel= 'Page Description';
        newPage.descInput= 'The description for this page';
        newPage.choiceLabel= 'Choices';
        newPage.choice1Link+=newPage.pageLink;
        newPage.choice2Link+=newPage.pageLink;
        newPage.choice3Link+=newPage.pageLink;
        newPage.choice4Link+=newPage.pageLink;
        ChapterModList.push(newPage);
        console.log(ChapterModList);
        setChapterModList( ChapterModList => [...ChapterModList]);
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

    return (
        <div className='create-page'>
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
                    <button className='page-plus' onClick={showPages}>+</button>
                </ul>
                
                <ul className='chapter-list' style={{display: 'block'}}>
                {ChapterModList.map((page) => {
                            const { pageName } = page;
                            return (
                                <a key={pageName} className={pageName}  onClick={showEditor(pageName)}>{pageName}</a>
                            );
                        })}
                </ul>
            </div>

            <div className ="editor-canvas"  style={{display: 'none'}}>
                <box className="page-desc-box">
                    <input className="desc-label" contentEditable="true" value={ChapterModList.map(pageEdited => pageEdited.pageName == displayedPage ? {...pageEdited.pageName} : pageEdited.pageName)} /*onChange={ChapterModList[displayedPage].handleChange}*/ />
                    <textarea className="desc-input" value={ChapterModList.map(pageEdited => pageEdited.pageName == displayedPage ? {...pageEdited.descInput} : pageEdited.descInput)} /*onChange={ChapterModList[displayedPage].handleChange}*/ /> 
                    <h5 className="desc-helper">Press "Ctrl" + "Enter" to temporarily save</h5>
                </box>

                <box className="choice-box">
                    <input className="choice-label" contentEditable="true" value={ChapterModList.map(pageEdited => pageEdited.pageName == displayedPage ? {...pageEdited.choiceLabel} : pageEdited.choiceLabel)} /*onChange={ChapterModList[displayedPage].handleChange}*//>
                    <ul className='choice-list'>
                            <input className='choice1' contentEditable="true" value={ChapterModList.map(pageEdited => pageEdited.pageName == displayedPage ? {...pageEdited.choice1} : pageEdited.choice1)} /*onChange={ChapterModList[displayedPage].handleChange}*/ />
                            <input className='choice2' contentEditable="true" value={ChapterModList.map(pageEdited => pageEdited.pageName == displayedPage ? {...pageEdited.choice2} : pageEdited.choice2)} /*onChange={ChapterModList[displayedPage].handleChange}*/ />
                            <input className='choice3' contentEditable="true" value={ChapterModList.map(pageEdited => pageEdited.pageName == displayedPage ? {...pageEdited.choice3} : pageEdited.choice3)} /*onChange={ChapterModList[displayedPage].handleChange}*/ />  
                            <input className='choice4' contentEditable="true" value={ChapterModList.map(pageEdited => pageEdited.pageName == displayedPage ? {...pageEdited.choice4} : pageEdited.choice4)} /* onChange={ChapterModList[displayedPage].handleChange}*/ />  
                    </ul>
                    <h5 className="choice-helper">Press "Ctrl" + "Enter" to temporarily save</h5>
                </box>
            </div>
        </div>
    )
}

export default LeftMenu;