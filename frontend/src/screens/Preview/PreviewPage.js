import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react'
import NavBar from '../../components/navbar/NavBar'
import LeftMenu from "../../components/sidebar-left/LeftMenu";
import SideBar from '../../components/sidebar-right/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fetchText} from '../../redux';
import { Button, Divider } from 'antd';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import "./PreviewPage.css";

const PreviewPage = ({loading, finish, text, error, fetchText}) => {
   
    let navigate = useNavigate();
    const onBackHome = () => {
        navigate('/');
    }
    let scriptID = 'ccc21972-4996-4052-a069-9941a2600e02';
    let Uri = 'http://localhost:8080/api/v1/text/detail/';
    useEffect(() => {
        const textUri = Uri + scriptID;
        fetchText(textUri);
    }, []);
    
    return loading ? (
        <div className='loading-screen'>
            <div className='loading-screen'>
                <div className='loading-container'>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="shadow"></div>
                    <div class="shadow"></div>
                    <div class="shadow"></div>
                    <span>Loading</span>
                </div>
            </div>
        </div>
        ) : error ? (
        <div className='error-page'>
            <div class="error-container">
                <h3>{error}<b> :(((</b></h3>
                <div class="gears">
                    <div class="gear one">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    </div>
                    <div class="gear two">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    </div>
                    <div class="gear three">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    </div>
                </div>
                <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
                <script src="js/main.js" type="text/javascript"></script>
            </div>
        </div>
        ) : (
            <body className="preview-page">
                <NavBar/>
                <div className="preview-container">
                    <section className="preview-header">
                        <div className="chapter-title">{text && text.title}</div>
                        <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                    </section>
                    <section className="preview-content">
                        <text className='text-container'>
                            {text && text.content}
                        </text>
                        {text && text.choices.length !== 0 ? 
                            (
                                <div className="choice-container">
                                <text className='make-choice'>Make your first choice:</text>
                                {text && text.choices.map(choice => {
                                    const choiceID = choice.choiceID;
                                    return (<Button onClick={() => fetchText(Uri + choiceID)}>{choice.content}</Button>)})
                                }
                                </div>
                            ) : (<div></div>)
                        }
                        <div className="preview-btns">
                            { finish ? <Button className='finish=btn' onClick={onBackHome}>Finish</Button> : <div></div>}
                        </div>
                    </section>
                </div>
            </body>
        )
}

const mapStateToProps = state => {
    return state.text;
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchText: (textUri) => dispatch(fetchText(textUri))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewPage)
