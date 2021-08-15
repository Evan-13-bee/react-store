import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeDoubleRange = (arr: Array<number>) => {
        if(arr[1]<=arr[0]) return
        setValue1(arr[0])
        setValue2(arr[1])
    }
    return (
        <div>
            <hr />
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div className={s.wrapper}>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    value1={[value1, value2]}
                    onChangeRange={onChangeDoubleRange}
                />
            </div>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr />
        </div>
    );
}

export default HW11;
