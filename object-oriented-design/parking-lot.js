/*
Design OO parking lot w/ classes/fucntions

Sytem Requirements:
- multiple entryways to lot, vechile goes in nearest possible spot
- new customer is given a ticket from the entry points, ticket is used to get vehicle back
- system cannot allow more vehicles than max capacity, should show if full, empty, valet(valet only or valet always available)
- parking spots available are regular, handicapped, compact (what restrictions for valet? sizes for each spot type? or sizes for just regular spots)
- parking spot sizes: S, M, L (total lot and capacity of each type of space)
- can support vehicle types:
S(2-wheel) --> any spot, S preferred
M(car) --> only M and L spots, M preferred
L(bus) --> only L

Actors:
Customer - brings car of specific type/size and gets parking lot ticket, gives ticket and picks up car
System - displays parking lot status, assigns vehicle to closest spot to point of entry, appropriate to the size/type of vehicle, and removes vehicle from spot

Use Cases:
add/remove/edit parking spot - add car to spot, remove car from spot, edit spot btw occupied/unoccupied
give ticket to customer
take ticket from customer

customer--> takes ticket/drops off car
system --> assign parking spot to vehicle
       --> remove vehicle from parking spot
       --> show lot status

Classes:
ParkingLot
  attributes: entrances, total capacity, #of small spots, #of medium spots, #of large spots, status - full? empty? valet only?
  methods: giveNewTicket(), recieveTicket(), getStatus()

ParkingSpot
  attributes: type(regular, handicap, compact), sizesAllowed(S, M, L), occupied, number, closet entrance
  methods: isOccupied()
  extends: handicap spot, compact spot, regular spot

ParkingTicket
  attributes: spotNumber

Customer
  attributes: hasTicket, vehicle type, vehicle size

Activities:
Lot is empty, displays empty to customers -> Customer brings in car in lot enterance --> System takes car size/type and assigns spot closest to entrance if available --> appropriate parking spot is occupied --> system updates available capacity and displays appropriately --> customer recieves ticket with spot assignment

Customer gives ticket to system --> system scans ticket and removes car from space --> system updates capacity and dispay

*/
