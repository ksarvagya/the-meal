export const timeout = timeout =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve(), timeout)
})