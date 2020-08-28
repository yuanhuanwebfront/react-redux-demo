const State = {
    todos: [
        {text: 'Eat Food', complete: true},
        {text: 'Drink', complete: false}
    ],
    visibleFilter: 'SHOW_COMPLETE'
};

const Actions = [
    {type: 'ADD_TODO', text: 'Go to Swim'},
    {type: 'TOGGLE_TODO', index: 1},
    {type: 'SET_VISIBLE_FILTER', filter: 'SHOW_ALL'}
]

//  reducer将 state和action结合起来
function visibleFilter(state = 'SHOW_ALL', action){
    if(action.type === 'SET_VISIBLE_FILTER'){
        return action.filter
    }else{
        return state;
    }
}

function todos(state = [], action){
    switch (action.type){
        case 'ADD_TODO':
            return state.concat([{text: action.text, complete: false}]);
        case 'TOGGLE_TODO':
            return state.map(item => item)
        default:
            return state;
    }
}

function reducerApp(state, action){
    return {
        todos: todos(state, action),
        visibleFilter: visibleFilter(state, action)
    }
}
