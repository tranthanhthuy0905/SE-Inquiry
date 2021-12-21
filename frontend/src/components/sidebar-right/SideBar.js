import React, {useState} from 'react'
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { BoldOutlined, ItalicOutlined, UnderlineOutlined, 
AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, OrderedListOutlined, UnorderedListOutlined } from '@ant-design/icons';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
        ssr: false,
    }
);

const SideBar = () => {
    const {Option} = Select;
    const [mode, setMode] = useState(true);

    const handleClickText= async () => { 
        setMode(true);
    }

    const handleClickConnections= async () => { 
        setMode(false);
    }

    const showTextEditor = async () => {

    }

    const showText = () => {
        return (
            <Editor className='Editor'/>
        )
    }

    const showConnections = () => {
    }

    const toolbarStyle = {
        top: 0,
        right: 0,
        width: '15%',
        height: '100%',
        display: 'grid',
        float: 'right',
        rowGap: '1rem',
        borderWidth: '0px',
        margin: '10px',
        toolbarBlockType: {
            width: '5px'
        }
    }

    const editorStyle = {
        backgroundColor: 'hsl(210, 36%, 96%)',
        height: '100%',
        width: '100%',
        borderWidth: '0px',
        margin: '10px 0px'
    }

    const wrapperStyle = {
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        right: 0,
    }

    const leftSidebar = () => {
        return (
            <div style={{backgroundColor: 'black'}}>
                <button>Page</button>
            </div>
        )
    }
    return (
        <aside className='sidebar'>
            <div className='sidebar-header'>
                <div className='btn-container'>
                    <button className='btn-text' type='button' onClick={handleClickText}>Text</button>
                    <button className='btn-connections' type='button' onClick={handleClickConnections}>Connections</button>
                </div>
                { mode ? showText : showConnections }
            </div>
            <Editor 
                    wrapperClassName='editor-wrapper'
                    editorClassName='editor-class'
                    toolbarClassName='editor-toolbar'
                    wrapperStyle = {wrapperStyle}
                    toolbarStyle = {toolbarStyle}
                    editorStyle = {editorStyle}
                    toolbar = {{
                        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'textAlign', 'list'],
                        inline: {options: ['bold', 'italic', 'underline', 'strikethrough']},
                        blockType: {className : 'toolbarBlockType'}
                    }}
                    />
        </aside>
    )
}

export default SideBar