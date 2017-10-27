const initialState = {
    conatinerName: ''
}

function containerReducer(state = initialState, action) {
    switch (action) {
        case 'loadConatiner':
            return {
                ...state,
                conatinerName: 'gorakh'
            }

            break;

        default:
        return state;
            break;
    }
}
export default containerReducer;