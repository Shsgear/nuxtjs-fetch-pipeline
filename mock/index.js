export const getIndex1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('index data 1')
    }, 1000)
  })

export const getIndex2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('index data 2')
    }, 1500)
  })

export const getIndex3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('index data 3')
    }, 2000)
  })
