import './App.scss'
import { Form } from '../Form/Form'
import { Title } from '../Title/Title'
import { Subtitle } from '../Subtitle/Subtitle'
import { SignIn } from '../SignIn/SignIn'

export function App() {
  return (
    <div className='container'>
      <div className='app'>
        <Title />
        <Subtitle />
        <Form />
        <SignIn />
      </div>
    </div>
  )
}