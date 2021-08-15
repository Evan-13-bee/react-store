import React, { ChangeEvent, ChangeEventHandler, useState } from "react"
import s from './MyRangeComponent.module.css'

export const MyRangeComponent = () => {
  const [value, setValue] = useState(0)
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
    
    setValue(+e.currentTarget.value)
  }
  return (
    <div className={s.rangedDiv}>
      <span id={s.rangeValue}>{value}</span>
      <input className={s.range} onChange={onChangeCallback} type="range" name='' value={value} min={0} max={1000} />
    </div>
  )
}