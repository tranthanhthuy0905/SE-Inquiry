import {faCut, faCopy, faClipboard, faTrashAlt, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const utilsList = [
    {
        id: 1,
        url: '/cut',
        icon: <FontAwesomeIcon icon={faCut} className='utils-icon'/>,
    },
    {
        id: 2,
        url: '/copy',
        icon: <FontAwesomeIcon icon={faCopy} className='utils-icon'/>,
    },
    {
        id: 3,
        url: '/paste',
        icon: <FontAwesomeIcon icon={faClipboard} className='utils-icon'/>,
    },
    {
        id: 4,
        url: '/trash',
        icon: <FontAwesomeIcon icon={faTrashAlt} className='utils-icon'/>,
    },
    {
        id: 5,
        url: '/move-down',
        icon: <FontAwesomeIcon icon={faArrowDown} className='utils-icon'/>,
    },
    {
        id: 6,
        url: '/move-up',
        icon: <FontAwesomeIcon icon={faArrowUp} className='utils-icon'/>,
    }
]
