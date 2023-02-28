import axios from 'axios'

export default {
  getAdvice() {

    return new Promise((resolve, reject) => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then(({ data }) => {
        resolve(data.slip)
      })
      .catch(() => {
          reject('ERROR API')
      })
    })
  },
}
