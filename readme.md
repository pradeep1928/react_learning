-- props
-- props.children
-- file.module.css
-- props destructuring
-- events
-- function as props (parent to child component)
-- state: 
    - state represent data that changes over time.
    - state is local and private to the component.
    - state changes cause the component to re-render.

React-Developer-Tools
    - Inspection: Allow inspection of React component hierarchies.
    - State & Props: View and Edit the current state and props of the component.
    - Performance: Analyze component re-render and performance bottlnecks.
    - Navigation: Conveniently navigate through the entire component tree. 
    - Filtering: Filter component by name or source to locate them quickly.
    - Real-time-feedback: See the changes as you modify the state and props.

How React Works: 
    * Root Component:
        - The App is the main or root component of a react application.
        - It's a starting point of react component tree.
    * Virtual DOM:
        - React creates an in-memory structure called the virtual DOM.
        - Different from the actual browser DOM.
        - It's a lightweight representation where each node stands for a component and it's attributes.
    * Reconciliation Process:
        - When component data changes, React updates the virtual DOM's state to mirror these changes.
        - React then compares the current and previous version of the virtual DOM.
        - It identifies the specific nodes that need updating.
        - Only these node are updated in the real browser DOM, making it efficient.

useRef hook:
    - useRef allows access to DOM elements and retain mutable values without re-render.
    - Used with ref attribute for direct DOM interaction.
    - Can hold previous state or prop value.
    - Not limited to DOM references; can hold any values.
    - Refs can be passed as props also.

useEffect hook: 
    - In function based components, useEffect handles side effect like data fetching or event listeners.
    - useEffect runs autometically after every render by default.
    - By providing a dependency array, useEffect will only run when specified variable changes. An empty    array means effect runs once.
    - Multiple useEffect can be used in a single component for organizing different side effects seperately.
    - Returning a function from useEffect allows for cleanup, ideal for removing event listeners, network request.

React Routing:
    - Installation: npm install react-router-dom
    - RouterProvider: Wraps the app for routing capabilities.
    - CreateBrowserRouter: helps creating the maping for router provider.
    - Declarative routing: Easily define application routes.
    - Routes are react component.

Loader: 
    - Loader method can be used to load data before a perticular route is executed.
    - The loader method must return the data that is loaded or promise.
    - Data is available in component and all the child component.
    - useLoaderData hook can be used to get the fetched data.
    - Loading state can also be used.


Use of Redux:
    - Single source: Uses a single central strore to maintain the entire application strore.
    - Actions: component never directly change the store. Changes to state are made through dispatched actions which describe events.
    - Reducers: Actions are processed by reducers, pure function that returns the new state.
    - Immutable: State is immutable, every change results in a new state Object.
    - This is different from useReducer hook.
    