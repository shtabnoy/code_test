import { listSurveysResponse } from './surveys'
// here things are totally optional of how to implement, but I would have used vuex, and argue that :
// will help with scalability
// can generate the model needed 
// can control the sate of the API
// can make the component code less verbose (if implemented in the nice way)
const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  getListSurveys () {
    return fetch(listSurveysResponse, 1000)
  }
}