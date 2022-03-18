/* eslint-disable  no-restricted-syntax, guard-for-in, @typescript-eslint/restrict-template-expressions */
export const concatStringsFromObj = (obj: Record<any, any>): string => {
  let allTypeDefs = ''
  for (const a in obj) {
    allTypeDefs += `${obj[a]}\n`
  }

  return allTypeDefs
}
