const chunkArray = <T>(array: T[], chunkSize: number) =>
  Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  )

export const arrays = {
  chunkArray,
}
