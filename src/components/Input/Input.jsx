import './Input.scss'
import { useState } from 'react'

export function Input({type, placeholder, defaultValue, onChange,name,checked, onClick}) {


    return <input
        type={type}
        className={type === 'checkbox' ? 'form__checkbox' : 'form__input'}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        checked={checked}
        onClick={onClick}
    />
}