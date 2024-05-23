import './Form.scss'
import { Input } from '../Input/Input'
import { useState } from 'react'


export function Form() {

  const [form, setForm] = useState({
    name: 'Имя',
    surname: 'Фамилия',
    tel: '',
    email: '',
    password: '',
    passwordRepeat: '',
    confirm: false
  })

  const [isError, setError] = useState({
    text: '',
    state: false
  })

  function handleChangeInput(e) {
    let {value,name} = e.target
    
    if (name === 'confirm') {
      value = e.target.checked
    }
    
    setForm({
      ...form,
      [name]: value
    })

    console.log(form)
  }

  function handleValidate(e) {
    e.preventDefault()
    for (let i in form) {
      if (form[i] === '') {
        setError({
          text: 'Есть пустые поля',
          state: true
        })
        return
      }
    }

    if (form.password !== form.passwordRepeat) {
      setError({
        text: 'Пароли не совпадают',
        state: true
      })
      return
    }

    if (form.confirm === false) {
      setError({
        text: 'Подтвердите пароль',
        state: true
      })
      return
    }

    setError({
      ...isError,
      state: false
    })
    alert('Аккаунт создан')
  }

  return (
    <form className='form' onSubmit={handleValidate}>
       <Input type={'text'} placeholder={'Имя'} name="name" defaultValue={form.name} onChange={handleChangeInput}/>
       <Input type={'text'} placeholder={'Фамилия'} name="surname" defaultValue={form.surname} onChange={handleChangeInput}/>
       <Input type={'tel'} placeholder={'Номер телефона'} name="tel" onChange={handleChangeInput}/>
       <Input type={'email'} placeholder={'Email'} name="email" onChange={handleChangeInput}/>
       <Input type={'password'} placeholder={'Пароль'} name="password" onChange={handleChangeInput}/>
       <Input type={'password'} placeholder={'Повторите пароль'} name="passwordRepeat" onChange={handleChangeInput}/>

       <label className='form__label'>
        <Input type={'checkbox'} placeholder={'Подтверждаю пароль'} name='confirm' onChange={handleChangeInput} onClick={() => form.confirm = !form.confirm}/>
        Подтверждаю пароль
      </label>
      {isError.state ? (<p style={{color: 'red'}}>{isError.text}</p>): ''}
      <button className='form__button'>Продолжить</button>
    </form>
  )
}