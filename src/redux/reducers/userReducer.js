const initialState = {
    isLoggedIn : false,
    isTeacher : false,
    user: {},
    lesson: {
        paraId: null,
        data: null,
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case 'SET_IS_TEACHER':
            return {
                ...state,
                isTeacher: action.payload,
            };
        case 'SET_LESSON':
            return {
                ...state,
                lesson: action.payload,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;