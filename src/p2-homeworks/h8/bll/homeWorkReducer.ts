import { UserType } from "../HW8"
type ActionType = {
  type: string
  payload: string | number
}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': {
      // need to fix
      switch (action.payload) {
        case 'up': {
          const newState = [...state]
          newState.sort((a, b) => {
            if (a.name < b.name) return -1
            else if (a.name > b.name) return 1
            return 0
          })
          return newState
        }
        case 'down': {
          const newState = [...state]
          newState.sort((a, b) => {
            if (a.name < b.name) return -1
            else if (a.name > b.name) return 1
            return 0
          })
          return newState.reverse()
        }
      }
    }
    case 'check': {
      // need to fix
      const newState = [...state]
      return newState.filter(e => e.age >= action.payload)
    }
    default: return state
  }
}