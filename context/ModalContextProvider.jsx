import { createContext, useContext , useState} from "react"

const ModalContext = createContext()

export const useModalContext = ()=>useContext(ModalContext)
export default function ModalContextProvider({children}) {
  const [open,setOpen] = useState(false)
  const toggleModal = ()=>setOpen(prev=>!prev)
  return (
    <ModalContext.Provider value={{open,toggleModal}}>
      {children}
    </ModalContext.Provider>
  )
}