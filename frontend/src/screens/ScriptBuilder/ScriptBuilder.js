import React, {useState} from 'react'
import NavBar from '../../components/navbar/NavBar'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import './index.css';
import {Helmet} from "react-helmet";

const ScriptBuilder = () => {
    
    let navigate = useNavigate();

    const onCreateScript = () => { 
        console.log('prevLocalStorage', JSON.parse(localStorage.getItem('script')))
        localStorage.clear();
        const storedData = {
            scriptName: 'Untitled',
            mainContent: {},
            chapters: []
        }   
        localStorage.setItem('script', JSON.stringify(storedData));
        navigate('/create-page');
    }

    return (
        <div className='container'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Inquiry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <NavBar/>
            
            <section className='script-container'>
                <div className='script-center'>
                    <h2>Script Builder</h2>
                    <button type="button" 
                    className="script-builder-button"
                    onClick={onCreateScript}>
                        <div className='content'>
                            <span className='title'>Create new script</span>
                            <span className='description'>Make your own story</span>
                        </div>
                        <h1 className='plus-button'>+</h1>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ScriptBuilder
