import React from 'react'
import s from './Message.module.css'
type MessageType = {
  avatar: string
  name: string
  message: string
  time: string
}
export const Message = (props: MessageType) => {
  return (
    <div className={s.HW1}>
      <div className={s.photoDiv}>
        <img
          className={s.photo}
          src={props.avatar}
          alt="avatar"
        />
      </div>
      <div className={s.profileInfo}>
        <div>
          <p>{props.name}</p>
          <p>{props.message}</p>
        </div>
        <p className={s.time}>
          {props.time}
        </p>
      </div>
    </div>
  )
}

