import React, {useState} from 'react'
import {utilsList} from '../../data/navbarCreate';
import logo from '../../assets/logo.png';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './navbar.css';

const NavBarCreate = () => {

    const [name, setName] = useState(JSON.parse(localStorage.getItem('script')).scriptName);

    const handleNameChange = (val) => {
        setName(val.target.value);
        // Save data here
        const script = JSON.parse(localStorage.getItem('script'));
        script.scriptName = name;
        localStorage.setItem('script', script);
    }

    const handleCancel = (e) => {
        localStorage.clear();
    }

    const handleSave = (e) => {
        localStorage.clear();
    }

    return (
        <nav>
            <div className='creator-nav'>
                <div className='creator-header'>
                    <img src={logo} className='logo' alt='logo' /> 
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
                    <input className="script-name" type="text" onChange={handleNameChange} value={name}/>
                </div>
                <div className='creator-footer'>
                    <button className='cancel' type='button' onClick={handleCancel}>Cancel</button>
                    <button className='save' type='submit' onSubmit={handleSave}>Save</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBarCreate
