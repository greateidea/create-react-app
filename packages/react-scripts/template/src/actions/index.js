export const addAction = (id, text) => ({
    type: 'ADD_TODO',
    id: id,
    text
});

export const reduceAction = () => ({
    type: 'REDUCE_TODO',
});

export const addActionForSaga = (id, text) => ({
    type: 'ADD_TODO_SAGA',
    id: id,
    text
});

export const reduceActionForSaga = (id, text) => ({
    type: 'REDUCE_TODO_SAGA',
});
