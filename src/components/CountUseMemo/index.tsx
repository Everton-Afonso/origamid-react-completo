import { useMemo, useState } from 'react'

const CountUseMemo = () => {
  const [count, setCount] = useState(0)

  const slowOperation = () => {
    let result

    for (let i = 0; i < 100000000; i++) {
      result = i + i / 10
    }

    return result
  }

  // const getProduct = useMemo(() => {
  //   const localProduct = localStorage.getItem('product')

  //   console.log('Aconteceu o meno')

  //   if (localProduct !== null) {
  //     return localProduct
  //   }

  //   return
  // }, [])
  const time = performance.now()

  const operation = useMemo(() => {
    slowOperation()
  }, [])

  // console.log('value', value)
  console.log('slowOperation', operation)
  console.log('performance', performance.now() - time)

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

export default CountUseMemo
