import { sift } from "../../lib/sieve"

describe("Sieve of Eratosthenes", () => {
  test("sift(0) returns an empty array", () => {
    expect(sift(0)).toEqual([])
  })

  test("sift(2) returns [2]", () => {
    expect(sift(2)).toEqual([2])
  })

  test("sift(10) returns all primes less than 10", () => {
    expect(sift(10)).toEqual([2, 3, 5, 7])
  })

  test("sift(11) returns all primes between 2 and 11", () => {
    expect(sift(11)).toEqual([2, 3, 5, 7, 11])
  })
})
