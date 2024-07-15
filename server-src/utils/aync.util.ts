
export const asyncRun = (asyncFn: any, that?: any): void => {
  setTimeout(() => {

    const result = asyncFn.call(that || {})

    if (result instanceof Promise) {
      result
        .then(() => {
          //
        })
        .catch(() => {
          //
        })
    }
  }, 0)
}
