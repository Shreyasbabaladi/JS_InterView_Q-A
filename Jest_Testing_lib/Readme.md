React Testing 

Refs:- https://youtu.be/NLFPvO8_hMQ
codeSandBox:- https://codesandbox.io/s/cold-microservice-f7tqp2?file=/src/UserFrom.test.js 

What were all those import statements?

LIDrary                                  Purpose
@testing-library/react          =>      Uses ReactDOM to render a component for testing
@testing-library/user-event     =>      Helps simulate user input like typing and clicking
@testing-library/dom            =>      Helps find elements that are rendered by our components. 
jest                            =>      Runs our tests, reports results 
jsdom                           =>      Simulates a browser when running in a Node environment 

How were our tests found?
=> Jest finds all files in the src folder that.* ,End with .spec.js ,End with .test.js ,Are placed in a folder called __test__.


1st testing 
https://codesandbox.io/s/rtl-starter-forked-9vg8rw?file=/src/app.test.js

============================================================================================================================

React Testing Library Query System
---------------------------------------
Collection of —48 functions that are used to find elements
---------------------------------------
Partial List
screen.getByRole()
screen.queryByRole()
screen.findAllByTitle()
screen.findAllByDisplayValue()
screen.findByRole()
screen.findByTltle()
screen.queryAllByRole()
screen.queryByLabelText()
screen. getByLabelText()




ARTA Role
-------------------------------------------------------
ARIA Roles clarify the purpose of an HTML element
Traditionally used by screen readers - softwares to help people understand the content on the screen
Many HTML elements have an 'implicit', or automatically assigned, role
Elements can be assigned manually assigned a role. Even trained engineers do this incorrectly.




ARIA Role       => Automatically applied to these HTML elements
------------------------------------------------------
'heading'       => h1,h2,h3,h4...
'list'          => ul,li
'button'        => button
'link'          => a
'textbox'       => input, type = 'text'

Full List
w3.org/TR/html-aria/#docconformance

2nd testing 
https://codesandbox.io/s/cold-microservice-f7tqp2?file=/src/UserFrom.test.js


User Event simulation
--------------------------------------------------------------------
user.click(element);                => Simulates clicking on the provided element
user. keyboard('asdf');             => Simulates typing 'asdf'
user. keyboard('{Enter}');          => Simulates pressing the Enter key


Mock Functions
-----------------------------------------------------
Fake function that doesn't do anything
Records whenever it gets called, and the arguments it was called with
Used very often when we need to make sure a component calls a callback

Exp const mock = jest.fn(); This is how we can create the mock function 


logTestingPlaygroundURL
------------------------------------------------------
We can use logTestingPlaygroundURL function to find appropriate selector. It will generated the link to play with code

exp:-  screen.logTestingPlaygroundURL();


**Sometimes finding elements by role just doesn't work well
    Tip - don't obsess over getting the 'right' query
    Two 'escape hatches' - ways to find elements when the
    preferred 'role' approach doesn't work
        1) data-testid         
        2) container.querySelector()

ex:- data-testid    
            In jsx add the data-testid attribute grab it in .test.js file
                <tbody data-testid='users'>
            In .test.js
            within(screen.getAllByTestId('users')).getAllByRole('row'); 

ex:- container.querySelector();
            In render method will return container object which is wapper added by test env by this object grab 
            any element by primitive way of js querySelectors 
            const {container}= render(<UserTable userList={user}/>);
            const numRow = container.querySelectorAll('tbody tr')


