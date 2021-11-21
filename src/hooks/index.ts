import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(query).matches
  )

  const db = debounce((matches: boolean) => {
    debugger
    console.log(`Media matches ${query}: ${matches}`)
    setMatches(matches)
  }, 1000)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => db(media.matches)
    media.addEventListener('change', listener)
    if (media.matches !== matches) {
      // size changed
      setMatches(media.matches)
    }
    return () => media.removeEventListener('change', listener)
  }, [query])

  console.log('New matches')
  return matches
}
