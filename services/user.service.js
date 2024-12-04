class UserService {
    constructor() {
        this.users = []
    }

    getUsersById(id) {
        return this.users.find(user => user.id === id);
    }
}