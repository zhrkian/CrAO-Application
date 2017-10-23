export const getHaleClass = sunspot => {
  if (!sunspot) return null

  const { hale_class = {} } = sunspot
  const dates = Object.keys(hale_class).map(date => date)
  const middle_date = Math.round(dates.length / 2)

  return hale_class[dates[middle_date]] || null
}

export const getMacIntoshClass = sunspot => {
  if (!sunspot) return null

  const { macintosh_class = {} } = sunspot
  const dates = Object.keys(macintosh_class).map(date => date)
  const middle_date = Math.round(dates.length / 2)

  return macintosh_class[dates[middle_date]] || null
}

export const getMaximumFlareDate = (flareValue, flareClass, flares) => {
  let flareDate = ''

  for (let date in flares) {
    if (flares.hasOwnProperty(date) && flares[date].hasOwnProperty(flareClass)) {
      if (!flareDate && flares[date][flareClass].indexOf(flareValue) > -1) {
        flareDate = date
      }
    }
  }

  return flareDate
}

export const getMaximalFlare = sunspot => {
  if (!sunspot) return null
  const { flares = {} } = sunspot
  const dates = Object.keys(flares).map(date => date)

  let allFlares = {}

  dates.forEach(date => {
    for (let flareClass in flares[date]) {
      if (flares[date].hasOwnProperty(flareClass) ) {
        allFlares[flareClass] = allFlares[flareClass] || []
        allFlares[flareClass] = [...allFlares[flareClass], ...flares[date][flareClass]]
      }
    }
  })

  let flareValue = ''
  let flareClass = ''

  if (allFlares.hasOwnProperty('X') && allFlares.X.length) {
    flareValue = Math.max.apply(null, allFlares.X)
    flareClass = 'X'
  } else if (allFlares.hasOwnProperty('M') && allFlares.M.length) {
    flareValue = Math.max.apply(null, allFlares.M)
    flareClass = 'M'
  } else if (allFlares.hasOwnProperty('C') && allFlares.C.length) {
    flareValue = Math.max.apply(null, allFlares.C)
    flareClass = 'C'
  }

  if (flareValue && flareClass) {
    return `${flareClass}${flareValue} \n (${getMaximumFlareDate(flareValue, flareClass, flares).replace(/-/g, '/')})`
  }

  return null
}
