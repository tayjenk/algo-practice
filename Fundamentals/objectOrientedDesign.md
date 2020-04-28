## Object Oriented Design

`Object-oriented programming(OOP)` uses objects to design and build applications
vs. procedure-oriented programming where programs are designed as blocks of statements to manipulate data

`Basic Concepts:`
Example: Online Shopping System
* `Objects:` represent real-world entities (shopping cart, customer, product item)
* `Class:` used to define each object, contains attributes and methods of the object (customer object --> attributes: address, credit card info; methods: place order, cancel order)
* `Encapsulation:` way of hiding data and hiding it from outside the object. State is private and other objects do not have access to it w/o using public functions
* `Abstraction:` hiding all but the relevant data about an object to reduce complexity, hiding internal implementation
* `Inheritance:` creating new classes from existing ones
* `Polymorphism:` object can take different forms and respond to one message in different ways (ex: chess piece can take many forms, bishop, knight, etc which all respond differently to the 'move' message)

`Process of Analysis/Design`
1. Identify the objects
2. Define the relationships btw the objects
3. Establish an interface for each object
4. Create a design that can be executed into code

`Unified Modeling Language`
`UML` is used to model the OO analysis. Makes use of diagrams to visualize a software system.

`Types of UML Diagrams`
`Structural` --> depicts the structure of a system or process
* Class (shows how different entities, people, things, data, relate to each other, describes attributes and operations of a class)
* Object
* Package
* Component
* Composite structure
* Deployment
* Profile
`Behaviorial` --> behavior of the systems, its actors, and building components
* Use case (set user scenarios/set of actions the system performs with users, should provide results to users, diagram answers what the system will do from the user POV)
* Activity (flow of control in a system, steps involved in use case execution)
* Sequence (interactions among classes over time)
* State
* Communication
* Interaction overview
* Timing

Use Case Diagram Structure --> ex: online shopping system
`System boundary` defines the scope and limits of the system, box containing all the system use cases
`actors` are the performers of specific actions (customer and guest shopper)
`use case` all business functionalities
`include` relationship that represents the invocation of one use case by another or a function calling another function (checkout shopping cart --include--> make payment)
`extend` relationship that shows that the extended use case will work exactly like the parent case but with new steps inseted (search product --extend--> search product by name)

Class Diagram Structure --> ex: flight reservation system
Indiviual class box containing `class name`, `class properties`, `class methods`
Relationships btw classes can show bi-directional or uni-directional `associations` (both classes are aware of each other), how many instances of a class are in the relationship (ex: a flight instance has a pilot - 1:1 vs a pilot has many flight instances - 1:many)

Sequence Diagram Structure --> ex: ATM balance inquiry
Step-by-step flow of interactions within a use case
customer --get balance(account)-> ATM
ATM -balanceInquiryTransaction(account)-> Transaction(class)
Transaction --getBalance()-> Account(class)
Account --balance-> transaction
transaction --balance-> ATM
ATM --displayMessage(balance)-> Screen
Screen --showMessage()-> customer

Activity Diagram Structure --> Online Shopping
customer opens webpage -> browses product or searches for product -> view product or more shopping->add item to shopping cart or more shopping-> view cart or more shopping-> done with shopping or update cart or more shopping -> checkout
* captures process flow from input to output vs. sequence diagram which tracks interaction, change of state, and events that trigger transitions


###### Sources
educative.io/grokking-the-object-oriented-design-interview
