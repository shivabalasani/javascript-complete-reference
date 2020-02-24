function heavyDuty(item) {
    const bigArray = new Array(7000).fill('😄')
    console.log('created!');
    return bigArray[item]
  }
  
  heavyDuty(699)
  heavyDuty(699)
  heavyDuty(699)

  // this won't create bigArray multiple times because of closure.
  function heavyDuty2() {
    const bigArray = new Array(7000).fill('😄')
    console.log('created Again but only once!')
    return function(item) {
      return bigArray[item]
    }
  }

  const getHeavyDuty = heavyDuty2();
  getHeavyDuty(699)
  getHeavyDuty(699)
  getHeavyDuty(699)