import { createContext, ReactNode, useContext, useReducer } from "react";


type State = {
  currentStep: number;
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

type Action = {
  type: FormsActions;
  payload: any;
}


type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

type FormProvider = {
  children: ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  cpf: '',
  phone: '',
  email: ''
}


const FormContext = createContext<ContextType | undefined>(undefined)

export enum FormsActions {
  setCurrentStep,
  setName,
  setCpf,
  setPhone,
  setEmail
}

const FormReducer = (state: State, action: Action) => {

  switch (action.type) {
    case FormsActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormsActions.setName:
      return { ...state, name: action.payload }
    case FormsActions.setCpf:
      return { ...state, cpf: action.payload }
    case FormsActions.setPhone:
      return { ...state, phone: action.payload }
    case FormsActions.setEmail:
      return { ...state, email: action.payload }
    default:
      return state
  }
}

export const FormProvider = ({ children }: FormProvider) => {
  const [state, dispatch] = useReducer(FormReducer, initialData)
  const value = { state, dispatch }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('Tente usar dentro do FormProvider')
  }
  return context
}
