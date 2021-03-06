import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string 
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void 
    error: boolean | 'Its empty'
    totalUsers: number 
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = error == 'Its empty' ? s.error : ''

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} />
            <span style={{color: 'red'}}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
