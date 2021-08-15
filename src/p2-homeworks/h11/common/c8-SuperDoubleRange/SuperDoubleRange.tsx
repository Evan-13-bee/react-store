import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import s from "./SuperDoubleRange.module.css";
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange: (value: [number, number]) => void
    value1: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value1, onChange, ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    
    const changeRangeCallback = (val1: number, val2: number) => {
        onChangeRange([val1, val2])
    }   
    return (
        <div className={s.rangedDiv}>
            <span id={s.rangeValue}>{value1[1]}</span>
            <input
                className={s.range}
                onChange={(e) => onChangeRange([+e.currentTarget.value, value1[1]])}
                type="range" name=''
                value={value1[0]}
                min={0} max={1000}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                className={s.range}
                onChange={(e) => onChangeRange([value1[0], +e.currentTarget.value, ])}
                type="range" name=''
                value={value1[1]}
                min={0} max={1000}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            
        </div>
    );
}

export default SuperDoubleRange;
