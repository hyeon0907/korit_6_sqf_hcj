function modifyUser(user, target, value) {
    const newUser = {
        ...user,
        [target]: value
    };
    return newUser;
}
function main() {
    const user = {
        userame: "admin",
        password: "1234"
    }

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(user, "passworld", "1111");
    console.log(newUser2);

    const userList = [user, newUser]; // 100
    const newUserList = [...userList]; // 200

    // 스프레드 -> 깊은 복사

    const userLst2 = userList; // 얕은 복사
}

main();