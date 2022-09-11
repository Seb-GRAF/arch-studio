import { createContext, useContext, ReactNode } from 'react'
import data from '../json/data.json'

interface Props {
  children: ReactNode
}

export const Context = createContext<null | typeof data>(null)

export const ContextWrapper = ({ children }: Props): JSX.Element => {
  return (
    <Context.Provider value={data}>
      <div>{children}</div>
    </Context.Provider>
  )
}

export const useAppContext = () => {
  return useContext(Context)
}
