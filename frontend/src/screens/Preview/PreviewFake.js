import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react'
import NavBar from '../../components/navbar/NavBar'
import LeftMenu from "../../components/sidebar-left/LeftMenu";
import SideBar from '../../components/sidebar-right/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fetchText} from '../../redux';
import { Button } from 'antd';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './PreviewPage.css'
import { choices } from '../../data/ChoiceList';

const PreviewPageFake = ({loading, finish, text, error, fetchText}) => {
   
    const fakeButtons = [
        {buttonName:'Back'},
        {buttonName:'Next'},
        {buttonName:'Finish'},
    ];

    // let navigate = useNavigate();
    // const onBackHome = () => {
    //     navigate('/');
    // }
    // let scriptID = '67ddf0be-50ab-44fd-85fa-b0d5284bd52a';
    // let Uri = 'http://localhost:8080/api/v1/text/detail/';
    // useEffect(() => {
    //     const textUri = Uri + scriptID;
    //     fetchText(textUri);
    // }, []);
    
    // console.log('text', text);
    return (// loading ? (
    //     <h2>Loading ...</h2>
    // ) : error ? (
    //     <h3>{error}</h3>
    // ) :  
            <body className="preview-page">
                <NavBar/>
                
                <div className="preview-container">
                    <section className="preview-header">
                        <div className="chapter-title">Chapter 1</div>
                        <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                    </section>
                    <section className="preview-content">
                        <text className='text-container'>
                        {/* {text && text.content} */}
                        Late Shift is a high stakes FMV crime thriller. Forced into a brutal London heist, your choices matter in this interactive cinematic experience with adaptable storylines that lead to one of seven conclusions. Your decisions are you.
                        After the unexpected death of a close friend, Kristina returns to her hometown looking for answers, only to unearth a string of dark secrets. I Saw Black Clouds is an interactive psychological thriller with supernatural elements and branching storylines.
                        Five Dates is an interactive rom-com about the unpredictable world of digital dating. With five potential female matches, Vinny explores whether compatibility, chemistry and connection is still possible in a world where physical touch is no longer an option.
                        The Shapeshifting Detective is a supernatural murder mystery FMV game where you play as a detective who can shapeshift into other characters, allowing you to unlock secret conversations and private encounters.

                        </text>
                        {/* {text && text.choices.length !== 0 ? 
                            (
                                <div className="choice-container">
                                <text className='make-choice'>Make your first choice:</text>
                                {text && text.choices.map(choice => {
                                    const choiceID = choice.choiceID;
                                    return (<Button onClick={() => fetchText(Uri + choiceID)}>{choice.content}</Button>)})
                                }
                                </div>
                            ) : (<div></div>)
                        } */}
                        <div className="choice-container">
                            <text className='make-choice'>Make your first choice:</text>
                            {choices.map((choice) => {
                                const {choiceID, content} = choice;
                                return (<Button >{content}</Button>);
                            })}
                        
                        </div>

                        <div className="preview-btns">
                        {/* { finish ? <Button className='finish=btn' onClick={onBackHome}>Finish</Button> : <div></div>} */}
                        <Button className='finish=btn'>Finish</Button>
                        
                        </div>    
                    </section>
                    
                </div>
            </body>
        )
    }

const mapStateToProps = state => {
    console.log(state);
    return state;
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchText: (textUri) => dispatch(fetchText(textUri))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewPageFake)
