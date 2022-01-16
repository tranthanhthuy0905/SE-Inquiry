import React, { useState, useEffect } from "react";
import "./CreatePage.css";
import NavBarCreate from "../../components/navbar/NavBarCreate";
import LeftMenu from "../../components/sidebar-left/LeftMenu";
import SideBar from '../../components/sidebar-right/SideBar';
import { useSelector, useDispatch } from "react-redux";
import { doneSelectPage, doneAddChoice } from "../../redux";
import {Helmet} from "react-helmet";

const CreatePage = () => {

    const {select, addChoice, pageName} = useSelector((state) => state.leftMenu);
    const dispatch = useDispatch();

    let script = JSON.parse(localStorage.getItem('script'));
    let mainContent = script.mainContent;
    let text = {};
    let choices = []; 

    if (pageName !== '') {
        if (mainContent[pageName] !== {}) {
            text = mainContent[pageName];
            if (text.choices !== undefined) {
                choices = text.choices;
            }
        }
    }

    let initialPageTitle = '';
    console.log(pageName)
    // if (script.mainContent.text !== undefined) {
    //     initialPageTitle = script.mainContent.text.title;
    // } else {
    //     initialPageTitle = script.mainContent[pageName].title;
    // }
    const [pageTitle, setPageTitle] = useState(pageName);
    const [pageContent, setPageContent] = useState(text.content || 'Enter your chapter description here')
    const [choiceContent, setChoiceContent] = useState('Enter your choice content');

    const changeSelectedBackToFalse = () => {
        dispatch(doneSelectPage);
    }

    const changeAddChoiceToFalse = () => {
        dispatch(doneAddChoice);
        return (
            <input className='choice1' contentEditable="true" value={choiceContent} onChange={handleAddChoice}/>
        )
    }

    const handleTitleChange = (val) => {
        const oldTitle = text.title;
        setPageTitle(val.target.value);
        // update to localStorage new Chapter title
        text.title = pageTitle;
        delete mainContent[oldTitle];
        mainContent.pageTitle = text;
        script.mainContent = mainContent;
        localStorage.setItem('script', script);
    }

    function process(e) {
        var key = (e.keyCode ? e.keyCode : e.which);
        // hit Enter (code of Enter btn = 13)
        if (key == 13) {
            text.content = e.target.value;
            mainContent.pageTitle = text;
            script.mainContent = mainContent;
            localStorage.setItem('script', script);
        }
    }

    const handleAddChoice = (val) => {
        const choice = {};
        setChoiceContent(val.target.value);
        // update to new Script after adding Choice
        choice.content = choiceContent;
        choices.push(choice);
        text.choices = choices;
        mainContent.pageTitle = text;
        script.mainContent = mainContent;
        localStorage.setItem('script', script);
    }

    const handleChangeChoiceContent = (val) => {
        const oldChoice = choiceContent;
        setChoiceContent(val.target.value);
        // update to localStorage new Chapter title
        let existedChoice = choices.filter((choice) => choice.content === oldChoice);
        existedChoice.content = choiceContent;
        choices = choices.filter((choice) => choice.content !== oldChoice);
        choices.push(existedChoice);
        text.choices = choices;
        mainContent.pageTitle = text;
        script.mainContent = mainContent;
        localStorage.setItem('script', script);
    }
    return (
        <body className="create-page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Inquiry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <NavBarCreate/>
            <LeftMenu/>
            
            { select === true ? (
               
                <div className='editor-canvas'>
                     {/* {changeSelectedBackToFalse} */}
                <box className="page-desc-box">
                    <input className="desc-label" type="text" contentEditable="true" onChange={handleTitleChange} value={pageTitle}/>
                    <textarea className="desc-input" contentEditable="true" value={pageContent} onKeyPress="process(event, this)" />
                    <h5 className="desc-helper">Press "Ctrl" + "Enter" to temporarily save</h5>
                </box>

                     <box className="choice-box">
                         {choices !== [] ? (
                            <ul className='choice-list'>
                                {
                                    choices.map((choice) => {
                                        setChoiceContent(choice.content);
                                        return (
                                            <input className='choice' id={choiceContent} contentEditable="true" value={choiceContent} onChange={handleChangeChoiceContent}/>
                                        )
                                    })
                                }
                            </ul>
                        ) : <div></div>}
                         {addChoice ? changeAddChoiceToFalse : <div></div>}
                     </box>

                </div>
                ) : <h3 className="welcome-message">Welcome to Script Adventure</h3>
            }
            <SideBar/>
            
        </body>
    ) 

    
}

export default CreatePage;

// Contents of middle page
{/* let newPage = Object.create(Page);
        newPage.pageName = pageName;
        newPage.pageLink+= pageName;
        newPage.descLabel= 'Page Description';
        newPage.descInput= 'The description for this page';
        newPage.choiceLabel= 'Choices';
        newPage.choice1Link+=newPage.pageLink;
        newPage.choice2Link+=newPage.pageLink;
        newPage.choice3Link+=newPage.pageLink;
        newPage.choice4Link+=newPage.pageLink; 
*/}