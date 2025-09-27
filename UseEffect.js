// useEffect => React Hook => synchronize a component with an external system.
// UseEffect(setup, dependencies?)

// Two Arguments to the useEffect:
// 1) setup function with 'setup code'(connects to the system) ==> which returns a 'cleanup function' with cleanup code (disconnect from the system)
// 2) list of dependencies 

// useEffect() = React Hook that tells React DO SOME CODE WHEN:
//                        This component re-renders
//                        This component mounts (create an element and append to the DOM)
//                        The state of a value


// UseEffect(function, [dependencies])  //function can be a callback, anonymous,or an arrow function   [array of dependencies ]
// 1) useEffect(() => {})    //Runs after every Re-render
// 2)useEffect(() => {},[])  // Runs only on mount
// 3)useEffect(() => {},[value]) //Runs on mount + when value changes


// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4Fetching Data from an API
// #5 Clean up when a component unmounts(remove a component from the Mount)
