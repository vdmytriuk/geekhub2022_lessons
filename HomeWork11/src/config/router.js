export const ROUTER = {
    routes: {
        NONE: '',
        HOME: '/home',
        USER: '/user',
        TODO: '/todo',
        USER_TODO: function ({userId, todoId}) {
         return `${this.USER}/${userId}${this.TODO}/${todoId}`
        },
        ANY: '*',
    }
};