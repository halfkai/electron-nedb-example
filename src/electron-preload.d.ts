interface Window {
  db: {
    findAll: <T>() => Promise<[Error | null, Array<T>]>
  }
}