export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: 'SET_IS_LOGGED_IN',
        payload: isLoggedIn,
    };

};

export const setIsTeacher = (isTeacher) => {
    return {
        type: 'SET_IS_TEACHER',
        payload: isTeacher,
    };

};

export const setLesson = (lesson) => {
    return {
        type: 'SET_LESSON',
        payload: lesson,
    };

};


export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    };

};

