import React, { useState } from "react";
import "./CreatePage.css";
import NavBarCreate from "../../components/navbar/NavBarCreate";
import {LeftMenu, displayedPage} from "../../components/sidebar-left/LeftMenu";
import SideBar from '../../components/sidebar-right/SideBar';
import { Page } from "../../components/Page/Page";
import Menu from "../../components/sidebar-right/SideBar";
import { chapters } from "../../data/ChapterList/ChapterList";
import { choices } from "../../data/ChoiceList";
import { set } from "draft-js/lib/DefaultDraftBlockRenderMap";
import { ChapterModList } from "../../data/ChapterList/ChapterModList";


const CreatePage = () => {
    const [description, setDescription] = useState('This page is about: begin writing here!');
    const [label, setLabel] = useState('Page Description')
    const [choiceLabel, setChoiceLabel] = useState('Choice Section')
    const [choice, setChoice] = useState()

    const handleLabelChange = (newLabel) => {
        setLabel(newLabel.target.value);
    }

    const handleDescriptionChange = (newDesc) => {
        setDescription(newDesc.target.value);
    }

    const handleCLChange = (newCL) => {
        setChoiceLabel(newCL.target.value);
    }

    const handleChoiceChange = (newChoice) => {
        setChoice(newChoice.target.value);
    }

    return (
        <body className="create-page">
            <NavBarCreate/>
            <LeftMenu/>
            <SideBar/>
            
            {/* <div className ="editor-canvas">
                <box className="page-desc-box">
                    <input className="desc-label" contentEditable="true" value={ChapterModList[displayedPage].pageLabel} onChange={ChapterModList[displayedPage].handleChange} />
                    <textarea className="desc-input" value={ChapterModList[displayedPage].descInput} onChange={ChapterModList[displayedPage].handleChange} /> 
                    <h5 className="desc-helper">Writer notes</h5>
                </box>

                <box className="choice-box">
                    <input className="choice-label" contentEditable="true" value={ChapterModList[displayedPage].choiceLabel} onChange={ChapterModList[displayedPage].handleChange}/>
                    <ul className='choice-list'>
                            <input className='choice1' contentEditable="true" value={ChapterModList[displayedPage].choice1.value} onChange={ChapterModList[displayedPage].handleChange} />
                            <input className='choice2' contentEditable="true" value={ChapterModList[displayedPage].choice2.value} onChange={ChapterModList[displayedPage].handleChange} />
                            <input className='choice3' contentEditable="true" value={ChapterModList[displayedPage].choice3.value} onChange={ChapterModList[displayedPage].handleChange} />  
                            <input className='choice4' contentEditable="true" value={ChapterModList[displayedPage].choice4.value} onChange={ChapterModList[displayedPage].handleChange} />  
                    </ul>
                    <h5 className="choice-helper">Writer notes</h5>
                </box>
            </div> */}
        </body>
    )

    
}

export default CreatePage;