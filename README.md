# amjad-eventPlanner
POC Work


Highlights of the POC:
Allows login for premium users  and regular users (Local authentication to mimic login)
The premium user will see Create Event (+) icon and few more icons/features (place holders)
The regular user will see only  Create Event (+) icon/feature
The logged in user lands on the page displaying Event Groups and Event Lists
The User can click on any event group to see the event list within
The user can also use the provided search field to group the events by event name, organizers name, or the date of event
The user can click on any event to open up the event details
The user can also click the plus (+) button to create a new event under any category.
The user can right now not choose his invitees but is provided with a fixed list of invitees (adding invitees is a to-do and not covered in POC)
The user can then click the Create Event button to create it or simply Cancel
The user is then navigated back to landing page where his event is added to the list 
To logout, simply refresh the page for now.
Implementation highlights:

The POC is built on Single Page Model (SPA)
The app is data driven and the data is placed in locally right now. In real world scenario, the data shall be fetched from a service (End Point)
The app leverages the concept of reusable model based components
The modal popup uses singleton pattern
The forms are dynamically generated based on metadata and leverage the factory pattern
The multiple user contexts (premium, regular, and more) is handled using delegates. More delegates can be added if required. All delegates extend from a base delegate, an interface flavored Object that enforces override of functions/features and hence enforces the contract between base delegate and other delegates that inherit from it
POC limitations:

Very basic form validations provided, since my focus was on code design for the app
The component to add invitees is not provided, and right know there's a fixed list
P.S: The data used shall ideally be fetched from a service, and the app right now uses local data. Also, I have not been able to do a detailed code review and testing due to shortage of time.

Please feel free to revert back if you have questions.

Thanks
Amjad Ghazi