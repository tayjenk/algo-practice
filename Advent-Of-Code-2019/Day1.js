//Day 1: The Tyranny of the Rocket Equation

//---PART I---

//REPEAT...
// determine fuel required for module launch given a mass
// fuel required = mass / 3 --> round down --> - 2
// given a list of module masses, calculate the fuel required for each module and return total of fuel values

//EXAMPLES...
// mass = 12
// fuel required = 12 / 3 = 4 - 2 = 2
// mass = 14
// fuel req = 14 / 3 = 4.67 (round down) = 4 - 2 = 2
// mass = 1969, fuel = 654

//ARCHITECTURE/CONCEPT...
// take input
// calculate indivual fuel requirement
// running total of all fuel requirements added together

//CODE...
let masses = [
  127117,
  121199,
  80494,
  83466,
  125933,
  80813,
  137787,
  122687,
  123256,
  128013,
  90525,
  116909,
  95227,
  86368,
  96748,
  131600,
  101434,
  98226,
  88614,
  76871,
  65553,
  141639,
  55075,
  133494,
  149211,
  51775,
  139337,
  94542,
  76351,
  100791,
  107426,
  91462,
  78691,
  70162,
  95006,
  101280,
  59398,
  77396,
  66276,
  100207,
  67200,
  58985,
  64763,
  125001,
  149661,
  129085,
  114919,
  77844,
  108209,
  121125,
  54662,
  103292,
  112164,
  121118,
  71847,
  130912,
  81068,
  137253,
  56703,
  107683,
  108181,
  142507,
  112673,
  97242,
  50195,
  123852,
  130090,
  144719,
  133862,
  73461,
  81374,
  56574,
  147026,
  140613,
  148938,
  123768,
  64967,
  106133,
  123961,
  87190,
  71348,
  148830,
  87261,
  58942,
  132417,
  101993,
  94510,
  138358,
  72539,
  80356,
  74249,
  103109,
  135176,
  128635,
  116062,
  82975,
  135814,
  62702,
  80696,
  95607]

  const fuelCounter = masses => {
    let totalFuelCount = 0
    masses.forEach(mass => totalFuelCount += Math.floor(mass / 3) - 2)
    return totalFuelCount
  }

  console.log(fuelCounter(masses)) //3386686

//---PART II---
