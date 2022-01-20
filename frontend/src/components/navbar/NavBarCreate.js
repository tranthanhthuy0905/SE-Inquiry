import React, {useState} from 'react'
import {utilsList} from '../../data/navbarCreate';
import logo from '../../assets/logo.png';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import _ from 'lodash';

const NavBarCreate = () => {

    let navigate = useNavigate();
    const [name, setName] = useState(JSON.parse(localStorage.getItem('script')).scriptName);

    const handleNameChange = (e) => {
        const newName = e;
        // Save data here
        const script = JSON.parse(localStorage.getItem('script'));
        script.scriptName = newName;
        localStorage.setItem('script', JSON.stringify(script));
        setName(newName);
    }

    const handleCancel = (e) => {
        localStorage.clear();
    }

    const handleSave = (e) => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <nav>
            <div className='creator-nav'>
                <div className='creator-header'>
                    <a href='/'>
                        <img src={logo} className='logo' alt='logo'/> 
                    </a>
                    <FontAwesomeIcon icon={faBars} className='nav-toggle'/>
                    <ul className='utils-list'>
                        {utilsList.map((utilsIcon) => {
                            const { id, url, icon } = utilsIcon;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='creator-center'>
                    <input className="script-name" type="text" onChange={(e) => setTimeout(handleNameChange(e.target.value), 5000)} value={name}/>
                </div>
                <div className='creator-footer'>
                    <button className='cancel' type='button' onClick={handleCancel}>Cancel</button>
                    <button className='save' type='submit' onClick={handleSave}>Save</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBarCreate
