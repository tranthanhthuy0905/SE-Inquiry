import React from "react";
import "./CreatePage.css";
import NavBarCreate from "../../components/navbar/NavBarCreate";
import LeftMenu from "../../components/sidebar-left/LeftMenu";
import SideBar from '../../components/sidebar-right/SideBar';
import Menu from "../../components/sidebar-right/SideBar";
import { chapters } from "../../data/ChapterList/ChapterList";
import { choices } from "../../data/ChoiceList";

const CreatePage = () => {
    return (
        <body className="create-page">
            <NavBarCreate/>
            <LeftMenu/>
            <SideBar/>
            <div className ="editor-canvas">
                <box className="page-desc-box">
                    <h5 className="desc-label" contentEditable="true">Page Description</h5>
                    <textarea className="desc-input" rows="10" placeholder="This page is about: begin writing here"></textarea>
                    <h5 className="desc-helper">Writer notes</h5>
                </box>

                <box className="choice-box">
                    <h5 className="choice-label" contentEditable="true">Choice Section</h5>
                    <ul className='choice-list'>
                        {choices.map((choice) => {
                                const { id, placeholder } = choice;
                                return (
                                    <input className={id} placeholder={placeholder}></input>
                                );
                            })}
                    </ul>
                    <h5 className="choice-helper">Writer notes</h5>
                </box>
            </div>
        </body>
    )

    
}

export default CreatePage;