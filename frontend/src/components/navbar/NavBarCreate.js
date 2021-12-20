import React, {useState} from 'react'
import {utilsList} from '../../data/navbarCreate';
import logo from '../../assets/logo.png';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './navbar.css';

const NavBarCreate = () => {
    const [name, setName] = useState('Untitled');

    const handleNameChange = (val) => {
        setName(val.target.value);
        // Save data here
    }

    const handleCancel = (e) => {

    }

    const handleSave = (e) => {

    }

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
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
                <div className='navbar-center'>
                    <input className="input-name" type="text" name="script-name" onChange={handleNameChange} value={name}/>
                </div>
                <div className='navbar-footer'>
                    <button className='btn' type='button' onClick={handleCancel}>Cancel</button>
                    <button className='btn' type='submit' onSubmit={handleSave}>Save</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBarCreate
