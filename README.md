# Chat App

- Describe the main data structures used in the program. For example, how the users and groups are represented.

Answer: We are using Dependency injection in this chat app since angular is developed on dependency injection design pattern however, users and groups are coupled with each other in a one to many relationship, user can be part of a certain group to check multiple channels and be a part of those channels and start chatting with users in it. Group Administrator have rights to Ban a User or mark User as a Super Admin. 


- The Angular front end should communicate with the Node.js server using a REST API. Describe each route provided, parameters, return values, and what it does.

Currently in phase 1, we are not connected with API's however only a chat system is added from past workshop, we will be doing angular nodejs connectivity in pahase 2, also we have multiple navigation routes for different components listed below:

1. chat - for chat inside a channel
2. groups - list of users
3. channels - list of channels associated with a group
4. login - login for a User
5. profile - User to see details
6. users - list of users for admin to perform operations like Ban, Mark as SuperAdmin
7. create-group-channel - creating a new group or channel

- Describe your Angular architecture in terms of components, services, and models.

We have created with chat app with angular architectural things. we have models for which we are gathering data and using indie associated components. we have certain services as a source of truth to perform operations by calling them inside a component. also we have custom filter pipe as well for filtering a alist using serach box in listing components.
