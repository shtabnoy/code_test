import { listSurveysResponse } from './surveys'

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