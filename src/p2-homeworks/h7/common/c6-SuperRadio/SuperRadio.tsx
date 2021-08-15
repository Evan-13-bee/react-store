import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './AlternativeSuperRadio.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i} htmlFor={`${o}${i}`}>
            <span className={s.colored}>{o}</span>
            <input id={`${o}${i}`} type="radio"
                // name, checked, value, onChange
                onChange={onChangeCallback}
                name={name}
                checked={o === value}
                value={o} />
            <i className={s.awesomeIcon}><FontAwesomeIcon icon={faCheck} /></i>
        </label>
    )) : []

    return (
        <div className={s.container}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
