import { createContext, useContext } from "react"
export type GlobalContent = {
  copy: string|undefined
  setCopy:(c: string|undefined) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
copy: 'Hello World', // set a default value
setCopy: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)