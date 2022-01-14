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
import "./PreviewPage.css";

const PreviewPage = ({loading, finish, text, error, fetchText}) => {
   
    let navigate = useNavigate();
    const onBackHome = () => {
        navigate('/');
    }
    let scriptID = '67ddf0be-50ab-44fd-85fa-b0d5284bd52a';
    let Uri = 'http://localhost:8080/api/v1/text/detail/';
    useEffect(() => {
        const textUri = Uri + scriptID;
        fetchText(textUri);
    }, []);
    console.log('text', text);
    return loading ? (
            <h2>Loading ...</h2>
        ) : error ? (
            <h3>{error}</h3>
        ) : (
            <body className="preview-page">
                <NavBar/>
                <LeftMenu hidden/>
                <SideBar/>
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
                    </section>
                    <section className="preview-btns">
                        { finish ? <Button className='finish=btn' onClick={onBackHome}>Finish</Button> : <div></div>}
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
)(PreviewPage)
