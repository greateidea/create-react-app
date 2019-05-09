let initialState = [{id: 0, text: 'first id'}];

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ];
        case 'REDUCE_TODO':
            return state.filter((item, index) => index < state.length - 1);
        default:
            return state
    }
};

export default todoList
