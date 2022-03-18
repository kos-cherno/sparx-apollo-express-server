export const concatStringsFromObj = (obj: Record<any, any>): string => {
  let allTypeDefs = ''
  for (let a in obj) {
    // @ts-ignore
    allTypeDefs += `${obj[a]}\n`
  }

  console.log(allTypeDefs)
  return allTypeDefs
}