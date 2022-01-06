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
            
            
        </body>
    )

    
}

export default CreatePage;