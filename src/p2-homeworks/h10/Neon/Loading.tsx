import React from "react"
import s from './Loading.module.css'
export const Loading = () => {

  return (
    <div className={s.box}>
      <div className={s.lightbar}></div>
      <div className={s.topLayer}></div>
      <h2>Loading</h2>
    </div>
  )
}