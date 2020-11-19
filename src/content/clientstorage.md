---
title: Cookies vs Session Storage vs Local Storage
author: Alejandro Perdomo
date: November 19, 2020
desc: We will try to explain the differences between session storage, local storage and cookies. When to use each one and why do we need them.
img: 10lGfusDSV4UaSMoKFsZ1yAc4cQX3q9sd
---

Nowadays we have various options refering to client storage solutions. Local storage and session storage are relatively new APIs while cookies have been by our side before the launching of HTML5, on those days application data had to be stored in cookies, included in every server request. In contrast, web storage is more secure and large amounts of data can be stored locally, without affecting website performance.

Next we will introduce these client storage options in order to clarify their use and why or when should we use each one of them.

### Local storage and Session Storage

The localStorage and sessionStorage properties allow us to save key/value pairs in a web browser. These client storage solutions are used to persist non-sensitive data needed within the applications which requires this data, however, both can be cleared by the user so we shouldn't rely on its continuing existence. We commonly use this type of storage to save user authentication data, as JWT.

### Cookies

Cookies are just text files with small pieces of data that are used to identify our computer in a server, data stored in a cookie is created by the server upon our connection. This data is labeled with an ID unique to us and our computer, so when the cookie is exchanged between our computer and the server, the server reads the ID and knows what information to serve specifically for us.

### Why do we need client storage solutions?

Alright, we have talked about client storage solutions, but... why are they necessary? As many of us will know, HTTP is a stateless protocol, because of that web applications have no way of identifying a user who has used their services before. In order to be able to provide personalized services we need to store session data which provides the server, in each of the requests the information about the user who is requesting some services is needed, this provide easy access control to the different resources which provides our web application and is secure enough to guarantee our security while using different services online.

### Main features of each one and differences

**Local Storage**

* Is used to store data with no expiration date, gets cleared only throught Javascript or clearing the browser cache.

* Provides the maximum storage limit amongst the other two.

**Session Storage**

* The sessionStorage object stores data only for a session, meaning that the data is stored until the browser tab is closed.

* Data is never transferred to the server.

* Storage limit is larger that a cookie (at least 5MB).

**Cookies**

* Cookies store data which has to be sent back to the server in subsequent requests, and its duration can be set from either server-side or client-side (normally from server-side).

* Cookies are mainly for server-side reading (localStorage and sessionStorage can only be read from client-side).

* Size must be less than 4KB.

* Using httpOnly flag as true for a cookie prevents client-side access to that cookie.


### Conclusion

At this point you know the basics about the different client storage solutions and you should be able to know which one to use depending on your needs. I hope you found this post useful and that you liked it.