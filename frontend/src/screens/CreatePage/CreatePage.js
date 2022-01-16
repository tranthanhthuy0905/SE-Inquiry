import React, { useState, useEffect } from "react";
import "./CreatePage.css";
import NavBarCreate from "../../components/navbar/NavBarCreate";
import LeftMenu from "../../components/sidebar-left/LeftMenu";
import SideBar from '../../components/sidebar-right/SideBar';
import { useSelector, useDispatch } from "react-redux";
import { doneSelectPage, doneAddChoice } from "../../redux";

const CreatePage = () => {

    const {select, addChoice, pageName} = useSelector((state) => state.leftMenu);
    const dispatch = useDispatch();

    let script = JSON.parse(localStorage.getItem('script'));
    let mainContent = script.mainContent;
    let chapters = script.chapters;
    let text = {};
    let choices = [];

    if (pageName !== '') {
        if (mainContent[pageName] !== undefined) {
            text = mainContent[pageName];
            if (text.choices !== undefined) {
                choices = text.choices;
            }
        }
    }
    console.log('pageName', pageName)
    const [pageTitle, setPageTitle] = useState(pageName);
    const [pageContent, setPageContent] = useState(text.content || 'Enter your chapter description here')
    const [choiceContent, setChoiceContent] = useState('Enter your choice content');

    const changeSelectedBackToFalse = () => {
        dispatch(doneSelectPage);
    }

    const showChoice = () => {
        return (
            <input className='choice-input' contentEditable="true" value={choiceContent} onKeyPress={handleAddChoiceEnter} onChange={handleAddChoice}/>
        )
    }

    const changeAddChoiceToFalse = () => {
        showChoice();
        dispatch(doneAddChoice);
    }

    const handleTitleChange = (val) => {
        setPageTitle(val.target.value);
    }
    
    const handleTextContentChange = (e) => {
        setPageContent(e.target.value);
    } 

    const handleChangeChoiceContent = (e) => {
        setChoiceContent(e.target.value);
    }

    const handleAddChoice = (val) => {
        setChoiceContent(val.target.value);
    }

    const handleTextTitleEnter = (e) => {
        var key = (e.keyCode ? e.keyCode : e.which);
        // hit Enter (code of Enter btn = 13)
        if (key == 13) {
            const oldTitle = text.title;
            // update to localStorage new Chapter title
            text.title = e.target.value;
            delete mainContent[oldTitle];
            mainContent.pageTitle = text;
            const chapter = chapters.indexOf(oldTitle);
            chapters[chapter] = e.target.value;
            script.mainContent = mainContent;
            script.chapters = chapters;
            localStorage.setItem('script', JSON.stringify(script));
        }
        console.log('text1', text);
        console.log('mainContent1', mainContent);
        console.log('script1', script);
    }

    const handleTextContentEnter = (e) => {
        var key = (e.keyCode ? e.keyCode : e.which);
        // hit Enter (code of Enter btn = 13)
        if (key == 13) {
            text.content = e.target.value;
            mainContent.pageTitle = text;
            script.mainContent = mainContent;
            localStorage.setItem('script', JSON.stringify(script));
        }
        console.log('text2', text);
        console.log('mainContent2', mainContent);
        console.log('script2', script);
    }

    const handleAddChoiceEnter = (e) => {
        var key = (e.keyCode ? e.keyCode : e.which);
        // hit Enter (code of Enter btn = 13)
        if (key == 13) {
            const choice = {};
            // update to new Script after adding Choice
            choice.content = e.target.value;
            choices.push(choice);
            text.choices = choices;
            mainContent.pageTitle = text;
            script.mainContent = mainContent;
            localStorage.setItem('script', JSON.stringify(script));
        }
        console.log('text3', text);
        console.log('mainContent3', mainContent);
        console.log('script3', script);
    }

    const handleChangeChoiceEnter = (e) => {
        const oldChoice = choiceContent;
        // update to localStorage new Chapter title
        let existedChoice = choices.filter((choice) => choice.content === oldChoice);
        existedChoice.content = choiceContent;
        choices = choices.filter((choice) => choice.content !== oldChoice);
        choices.push(existedChoice);
        text.choices = choices;
        mainContent.pageTitle = text;
        script.mainContent = mainContent;
        localStorage.setItem('script', JSON.stringify(script));
    }

    return (
        <body className="create-page">
            <NavBarCreate/>
            <LeftMenu/>
            
            { select === true ? (
                <div className='editor-canvas'>
                    <box className="page-desc-box">
                        <input className="desc-label" type="text" contentEditable="true" onChange={(e) => handleTitleChange} value={pageTitle}/>
                        <textarea className="desc-input" contentEditable="true" value={pageContent} onKeyPress={handleTextContentEnter} onChange={handleTextContentChange}  />
                        <h5 className="desc-helper">Press "Ctrl" + "Enter" to temporarily save</h5>
                    </box>

                    <box className="choice-box">
                        {choices !== [] ? (
                            <ul className='choice-list'>
                                {
                                    choices.map((choice) => {
                                        setChoiceContent(choice.content);
                                        return (
                                            <input className='choice-input' id={choiceContent} contentEditable="true" value={choiceContent} onKeyPress={handleChangeChoiceEnter} onChange={handleChangeChoiceContent}/>
                                        )
                                    })
                                }
                            </ul>
                        ) : <div></div>}
                        {addChoice ? changeAddChoiceToFalse : <div></div>}
                    </box>
                    {changeSelectedBackToFalse}
                </div>
                ) : <h1>Welcome to Script Adventure</h1>
            }
            <SideBar/>
            
        </body>
    ) 

    
}

export default CreatePage