const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // your code here

  function numberOfPresents(state, action)
    switch (action.type) {
      case "presents/increase": 
      return {initialState: state.initialCount + 1}
    }
}
