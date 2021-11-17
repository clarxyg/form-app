import { FormProvider } from './context/FormContext'
import { Router } from './router'

const App = () => {

  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App
