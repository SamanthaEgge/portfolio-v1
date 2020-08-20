import axios from axios;

export const PROJECTS_GET_START = 'PROJECTS_GET_START'
export const PROJECTS_GET_SUCCESS = 'PROJECTS_GET_SUCCESS'
export const PROJECTS_GET_FAILURE = 'PROJECTS_GET_FAILURE'


const sortPosition = (a, b) => {
  const featA = a[0].feature_position
  const featB = b[0].feature_position
  let comparison = 0;
  if (featA > featB) {
    comparison = 1
  } else if (featA < featB) {
    comparison = -1
  }
  return comparison
}

export const getProjects = () => dispatch => {
  dispatch({ type: PROJECTS_GET_START })
  axios
    .get(`https://portfolio-v1-be.herokuapp.com/api/feats/featured`)
    .then(projects => {
      let sorted = projects.data.feature.sort(sortPosition)
      dispatch({ type: PROJECTS_GET_SUCCES, payload: sorted })
    })
    .catch(error => {
      dispatch({ type: PROJECTS_GET_FAILURE })
      console.log('projects get error', error.response)
    })
}