import React, { useState, useEffect } from "react";
import "./CreatePage.css";
import NavBarCreate from "../../components/navbar/NavBarCreate";
import LeftMenu from "../../components/sidebar-left/LeftMenu";
import SideBar from '../../components/sidebar-right/SideBar';
import { useSelector, useDispatch } from "react-redux";
import { doneSelectPage, doneAddChoice, onSelectPage } from "../../redux";
import {Helmet} from "react-helmet";

const CreatePage = () => {

    const [pageTitle, setPageTitle] = useState('');
    const [pageContent, setPageContent] = useState('Enter your chapter description here')
    const [choiceContentDetail, setChoiceContentDetail] = useState('Enter your choice content');
    const [choiceList, setChoiceList] = useState([]);
    let mainContent = {};
    let chapters = [];
    let script = {};
    let text = {}; 
    let choiceId = -1;

    const {select, addChoice, pageName} = useSelector((state) => state.leftMenu);
    const dispatch = useDispatch();

    useEffect(() => {
        script = JSON.parse(localStorage.getItem('script'))
        mainContent = script.mainContent;
        chapters = script.chapters;
        if (pageName !== '') {
            setPageTitle(pageName);
            if (mainContent[pageName] !== undefined) {
                text = mainContent[pageName];
                console.log('textxttt', text)
                if (text.content !== '') {
                    setPageContent(text.content);
                } else {
                    setPageContent('Enter your chapter description here')
                }
                if (text.choices !== undefined) {
                    setChoiceList(text.choices);
                } else {
                    setChoiceList([]);
                }
            }
        }
    }, [pageName, select]);

    const changeSelectedBackToFalse = () => {
        dispatch(doneSelectPage);
    }

    const handleTitleChange = (val) => {
        setPageTitle(val.target.value);
        dispatch(onSelectPage(pageTitle));
        // script = JSON.parse(localStorage.getItem('script'))
        // const oldChapters = script.chapters;
        // oldChapters.splice()
        // script.mainContent[pageTitle].content = pageContent;
        // localStorage.setItem('script', JSON.stringify(script))
        // console.log('aaaaaa', script)
    }
    
    const handleTextContentChange = (e) => {
        setPageContent(e.target.value);
        script = JSON.parse(localStorage.getItem('script'))
        script.mainContent[pageTitle].content = pageContent;
        localStorage.setItem('script', JSON.stringify(script))
        console.log('aaaaaa', script)
    } 

    const handleChangeChoiceContent = (e) => {
        // setChoiceContent(e.target.value);
        setChoiceContentDetail(e.target.value);
        choiceList[e.target.id].content = choiceContentDetail;
        console.log('choiceListAfter', choiceList);
    }

    const handleAddChoice = (val) => {
        //setChoiceContent(val.target.value);
        setChoiceContentDetail(val.target.value);
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
            console.log('sc', script)
            localStorage.setItem('script', JSON.stringify(script));
        }
        console.log('text2', text);
        console.log('mainContent2', mainContent);
        console.log('script2', script);
    }

    const handleTitleChangeEnter = (e, oldData) => {
        console.log(oldData);
        var key = (e.keyCode ? e.keyCode : e.which);
        // hit Enter (code of Enter btn = 13)
        // if (key == 13) {
        //     script = JSON.parse(localStorage.getItem('script'))
        //     console.log('pageTitle', pageTitle);
        //     script.chapters.splice(script.chapters.indexOf(pageTitle), 1)
        //     const oldText = script.mainContent[pageTitle];
        //     console.log('oldText', script.mainContent);
        //     delete script.mainContent[pageTitle];
        //     script.mainContent[e.target.value] = oldText;
        //     // script.chapters = script.chapters.filter((chapter) => chapter !== pageTitle)
        //     script.chapters.push(e.target.value);
        //     // setPageTitle(val.target.value);
        //     console.log('scruo', script)
        // }
    }

    const handleAddChoiceEnter = (e) => {
        var key = (e.keyCode ? e.keyCode : e.which);
        // hit Enter (code of Enter btn = 13)
        if (key == 13) {
            const choice = {};
            // update to new Script after adding Choice
            choice.content = e.target.value;
            // choices.push(choice);
            // text.choices = choices;
            mainContent.pageTitle = text;
            script.mainContent = mainContent;
            localStorage.setItem('script', JSON.stringify(script));
        }
        console.log('text3', text);
        console.log('mainContent3', mainContent);
        console.log('script3', script);
    }

    const handleChangeChoiceEnter = (e) => {
        //const oldChoice = choiceContent;
        // update to localStorage new Chapter title
        // let existedChoice = choices.filter((choice) => choice.content === oldChoice);
        // existedChoice.content = choiceContent;
        // choices = choices.filter((choice) => choice.content !== oldChoice);
        // choices.push(existedChoice);
        // text.choices = choices;
        // mainContent.pageTitle = text;
        // script.mainContent = mainContent;
        localStorage.setItem('script', JSON.stringify(script));
    }

    const addChoiceToList = () => { 
        if (addChoice) {
            dispatch(doneAddChoice());
            setChoiceContentDetail('Enter your new choice content!');
            choiceList.push({'content': choiceContentDetail})
            console.log('chchgchgvc', choiceList)
        }
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
                    <box className="page-desc-box">
                        <input className="desc-label" type="text" contentEditable="true" onChange={(e) => setTimeout(handleTitleChange(e), 20000)} value={pageTitle}/>
                        <textarea className="desc-input" contentEditable="true" value={pageContent} onChange={(e) => setTimeout(handleTextContentChange(e), 20000)}  />
                        <h5 className="desc-helper">Press "Ctrl" + "Enter" to temporarily save</h5>
                    </box>

                    <box className="choice-box"> 
                        {addChoice == true ? 
                            (addChoiceToList())
                        : 
                            console.log('current choices', addChoice === true)
                        }
                        
                        {choiceList !== [] ? 
                            (<ul className='choice-list'>
                                { 
                                    choiceList.map((choice, index) => {
                                        return (
                                            <input className='choice-input' key={choice.choiceContent} id={index} contentEditable="true" value={choiceContentDetail} onChange={handleChangeChoiceContent}/>
                                        )
                                    })
                                }
                            </ul>)
                            :<div></div>
                        }
                    </box>
                    {changeSelectedBackToFalse}
                </div>
                ) : <h3 className="welcome-message">Welcome to Script Adventure</h3>
            }
            <SideBar/>
            
        </body>
    ) 

    
}

export default CreatePage