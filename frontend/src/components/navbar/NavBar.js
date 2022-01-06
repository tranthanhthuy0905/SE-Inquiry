import React, { useState, useRef, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faFolderOpen, faBars} from "@fortawesome/free-solid-svg-icons";
import {links} from '../../data/navbar';
import logo from '../../assets/logo.png';
import './navbar.css';
import avatar from '../../assets/avatar.png';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const [result, setResult] = useState('');
  const [totalNotification, setTotalNotification] = useState(0);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const showSetting = () => {
    var SettingToggle = document.getElementsByClassName("setting-list");
    Array.from(SettingToggle).forEach((SettingToggle) => {
        if (SettingToggle.style.display == "none") {
          SettingToggle.style.display = "block";
        } else {
          SettingToggle.style.display = "none";
        }
    })
  }

  return (
    <nav>
        <div className='nav-center'>
          {/* Logo */}
          <div className='nav-header'>
            <img src={logo} className='logo' alt='logo'/> 
            <FontAwesomeIcon icon={faBars} className='nav-toggle'/>
          </div>
          <div className = 'initial-container'>

            {/* Links */}
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    );
                })}
                </ul>
            </div>

            {/* Find something */}
            <input
                type='text'
                className='findSomething'
                placeholder='&#61442;  Find something'
                value={result}
                onChange={(e) => setResult(e.target.value)}
            />

          </div>
          <div className = 'second-container'>

            {/* Notification */}
            <div class = "notification">
              <a href = "notification">
                <div class = "notBtn" href = "#">
                  {/* Number supports double digets and automaticly hides itself when there is nothing between divs */}
                  <div className = "number">{totalNotification}</div>
                  <FontAwesomeIcon icon={faBell} className='notification-bell'>
                  <div class = "display">
                    <div class = "nothing"> 
                      <FontAwesomeIcon icon={faFolderOpen} className='empty-notification'/>
                      <div class = "cent">Looks like your all caught up!</div>
                    </div>
                  </div>
                  </FontAwesomeIcon>
                </div>
              </a>
            </div>

            {/* Avatar */}
            <img src={avatar} className='avatar' alt='avatar' onClick={showSetting}/>

            <ul className='setting-list'>
              <button className='view-profile'>View Profile</button>
              <button className='view-setting'>Setting</button>
              <button className='view-account'>Account</button>
              <button className='view-help'>Help selection</button>
              <button className='logout-button'>Logout</button>
            </ul>

          </div> 

        </div>
    </nav>
  );
};

export default NavBar;