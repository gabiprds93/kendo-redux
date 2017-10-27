import store from "./store";

export const addDish = (index) => {
    const userDish = store.getState().sushi[index];
    foodUser.push(userDish); 
}
