import {
  PROJECTS_GET_START,
  PROJECTS_GET_SUCCESS,
  PROJECTS_GET_FAILURE
} from './actions'

const initialState = {
  errors: '',
  projects: [],
  status: 'initial'
}

export const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case PROJECTS_GET_START:
      return {
        ...state,
        status: 'fetching'
      }
    case PROJECTS_GET_FAILURE:
      return {
        ...state,
        errors: action.payload,
        status: 'failure'
      }
    case PROJECTS_GET_SUCCESS:
      return  {
        ...state,
        errors: '',
        status: 'complete',
        projects: action.payload
      }
  }
}