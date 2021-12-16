import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const ScriptBuilder = () => {
    let navigate = useNavigate();

    const onCreateScript = () => {
        navigate('/script-creating');
    }

    return (
        <div className='container'>
            <NavBar/>
            <section className='script-container'>
                <div className='script-center'>
                    <h2>Script Builder</h2>
                    <button type="button" 
                    title="ScriptBuilder"
                    onClick={onCreateScript}>
                        <div className='content'>
                            <span className='title'>Create new script</span>
                            <span className='description'>Make your own story</span>
                        </div>
                        <FontAwesomeIcon icon={faPlus} className='plus'/>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ScriptBuilder
