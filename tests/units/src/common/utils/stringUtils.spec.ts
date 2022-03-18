import { concatStringsFromObj } from '../../../../../src/common/utils'

describe('String utils', () => {
  describe('concatStringsFromObj', () => {
    const mockObj = {
      foo: 'value',
      1: '1',
      bar: 'bar',
      2: '2',
      true: 'true',
    }

    test('concat properties of provided object', () => {
      const expectedResult = '1\n2\nvalue\nbar\ntrue\n'
      const received = concatStringsFromObj(mockObj)

      expect(received).toEqual(expectedResult)
    })
  })
})
