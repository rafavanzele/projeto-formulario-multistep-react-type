// COMPONENTES
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import ReviewForm from './components/ReviewForm'
import UserForm from './components/UserForm'
import Thanks from './components/Thanks'


// HOOK
import { useForm } from './hooks/useForm'

// ESTILOS
import './App.css'

function App() {
  
  const formComponents = [
    <UserForm/>,
    <ReviewForm/>,
    <Thanks/>
  ]

  const {currentStep, currentComponent, changeStep} = useForm(formComponents)


  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar nosso produto.</p>
      </div>

      
      <div className="form-container">
        <p>passos</p>

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            <button type='button' onClick={() => changeStep(currentStep - 1)}> <GrFormPrevious/> <span>Voltar</span></button>
            <button type='submit'> <span>Avançar</span>  <GrFormNext/></button>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default App
