import React, { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    text?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    { text,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const [state, setState] = useState<any>()
    let m: boolean = false
    const onButtonEnter = (e: any) => {
        // let x = e.clientX - e.currentTarget.offsetLeft
        // let y = e.clientY - e.currentTarget.offsetTop
        if (m === true) return
        m = true
        var bounds = e.target.getBoundingClientRect();
        var x = e.clientX - bounds.left;
        var y = e.clientY - bounds.top;

        let ripple = <span
            className={s.spanni}
            style={
                {
                    left: `${x}px`,
                    top: `${y}px`,
                }
            }></span>
        setState(ripple)
        setTimeout(() => {
            setState(null)
            m = false
        }, 1000)
    }
    return (
        <>
            <button
                className={s.f}
                onMouseEnter={onButtonEnter}
                {...restProps}
            >{state}{text? text : 'button'}</button>
        </>
    )
}

export default SuperButton
