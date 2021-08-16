import React, { ChangeEvent, FormEventHandler, MouseEventHandler, useState } from "react"
import { Loading } from "../h10/Neon/Loading"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox"
import API from "./API"

export const CustomRequest = () => {
  const [value, setValue] = useState(false)
  const [loading, setLoading] = useState(false)
  const request = () => {
    setLoading(true)
    API.sendRequest(!value).then(res => {
      setValue(!value)
      console.log(res);
      console.log(value);
      setLoading(false)
    }).catch(err => {
      console.log(err);
      
    })

  }
  return (
    <>
      {loading && <Loading />}
      <SuperButton onClick={request} />
      <SuperCheckbox
        checked={value}
      />
    </>
  )
}