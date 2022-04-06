import lodash from "lodash";

interface User{
    name: string;
    age: number;
}

function component(user: User) {
    const element = document.createElement("div");
    element.innerHTML = lodash.join(["Hello", user.name, user.age], " ");
    return element;
}

document.body.appendChild(component({
    name: "Jerry",
    age: 29
}));