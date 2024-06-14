const user = {
    username: "admin",
    password: "1234",

    name: {
        lastName: "김",
        firstName: "준일"
    },
    print: () => {
        console.log("사용자이름: " + user.username);
        console.log(`비밀번호: ${user.password}`) // tab위에 있는거 ` 윗줄처럼 자료 합치기를 안해도 됨
    }// 마지막 쉽표는 무시가능
};

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastName);
console.log(user.name.firstName);
user.print();