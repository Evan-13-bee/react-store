import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import s from './AlternativeSuperRadio.module.css'
function AlternativeSuperRadio() {
    return (
        <div className={s.container}>
            <label htmlFor="input1">
                <input id={'input1'} type="radio" name={'age'}/>
                <i className={s.awesomeIcon}><FontAwesomeIcon icon={faCheck} /></i>
            </label>
            
        </div>
    )
}

export default AlternativeSuperRadio
