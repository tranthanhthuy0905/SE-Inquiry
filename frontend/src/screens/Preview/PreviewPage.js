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
            <div className="center">
                <svg class="centered translateno" viewBox="0 0 346 512" version="1.1" role="img">
                <title>Chicken Swing</title>
                <desc>A chicken swinging gently on a swing</desc>
                <g id="swinging">
                    <path id="body" class="chicken" d="M 184.9 401.6 C 184.9 401.6 187 399.4 189.3 400.3 C 191.5 401.2 193.9 401.6 193.9 401.6 C 193.9 401.6 192.4 397.1 189.3 396.7 C 186.1 396.2 186.1 398.6 184.4 396.8 C 183.3 395.7 182.4 390.8 181.9 386.8 L 184.3 385.7 L 185.8 382.1 C 228.6 386.3 214.4 334.6 214.4 334.6 L 205.8 330.6 C 203.3 335.8 200.9 341.7 200.5 342.7 C 200 343.9 164.3 357.8 157.9 346.9 C 152.5 337.6 144.8 334.6 144.8 334.6 C 144.8 334.6 141.1 351.2 148.6 365.7 C 156 380.3 172.8 380.8 172.8 380.8 L 176.6 389.4 L 178.1 388.6 L 180.3 397.8 L 175.9 398 L 174.1 401.6 L 178.9 400.7 L 184.9 401.6 Z" />
                    <path id="head" class="chicken" d="M 214.4 335.6 C 214.4 335.6 219.2 337.5 219.1 333 L 224.2 331.2 L 218.2 328.7 L 218.1 328.8 C 216.8 325.2 215.3 323.8 213.6 323.3 C 213.9 322.8 214.1 322.3 214.2 321.6 C 214.9 317.7 213.2 316.4 211.6 317 C 210.1 317.5 210.3 321.1 209.1 319.1 C 207.9 317 208.5 315.7 206.7 316 C 204.7 316.3 204.8 320.4 204.8 320.4 C 204.8 320.4 204.8 316.8 201.4 317.4 C 198 317.9 204.4 321.6 202 321.2 C 199.6 320.8 198.5 323.3 199.8 324.3 L 203.7 326 C 201.3 331.1 205.8 334.1 207.4 335.1 C 208.5 335.9 214.4 335.6 214.4 335.6 Z" />
                    <path id="swing" class="swing" d="M 173 383.6 L 173 384 L 182.5 402 L 162.5 402 L 172 384 L 172 383.9 C 172.2 383.8 172.5 383.7 172.7 383.7 L 173 383.6 ZM 187.4 402 L 175.8 381.9 C 176.7 381 177.2 379.9 176.9 379 C 176.7 378.1 176 377.5 175 377.2 L 175 8 L 170 8 L 170 377.8 C 168 378.8 166.7 380.5 167.1 382 C 167.2 382.6 167.6 383.1 168.3 383.5 L 157.6 402 L 148 402 L 148 409 L 197 409 L 197 402 L 187.4 402 Z" />
                </g>
                <g id="shadow">
                    <path id="shadow" d="M 145 497.5 C 145 495 157.8 493 173.5 493 C 189.2 493 202 495 202 497.5 C 202 500 189.2 502 173.5 502 C 157.8 502 145 500 145 497.5 Z" />
                </g>
                <g id="frame">
                    <path d="M 173 2 C 159.2 2 148.3 8.7 142.2 20.1 L 142 20 L 141.7 21.1 C 139.8 24.9 137.6 29 137.2 33.3 L 0.1 512 L 9 512 L 141.5 48 L 205 48 L 337.1 512 L 346 512 L 208.8 32.8 C 208.3 28.8 206.2 25.1 204.6 21.6 L 204.1 20 L 203.8 20.1 C 197.7 8.7 186.8 2 173 2 ZM 173 10.2 C 183.8 10.2 192.1 15.3 196.7 24.2 L 200.7 34.8 C 200.8 35.5 200.8 37 200.8 37 L 145.2 37 C 145.2 37 145.2 35.8 145.2 35.2 L 149.5 23.8 C 154.2 15.1 162.4 10.2 173 10.2 Z" class="swing" />
                </g>
                <text id="loading" x="67" y="465" width="220">
                    <tspan>
                    Loading…
                    </tspan>
                </text>
                </svg>

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
