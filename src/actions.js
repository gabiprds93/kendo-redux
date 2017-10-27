import store from "./store";

// export const addDish = (index) => {
//     const userDish = store.getState().sushi[index];
//     foodUser.push(userDish);
// }
export const selectMenu = (index) => {
    console.log( 'selectMenu:',index)
};
export const addToCart = (index) => {
    
    const dishChoosen = store.getState().food[index];
    const addDish =   store.getState().foodUser .concat ( {
        price: dishChoosen.price,
        image: dishChoosen.image
    } );
    
    // store.getState().foodUser.push(dishChoosen);
    store.setState({
        foodUser: addDish
    });
    console.log('foodUser', store.getState().foodUser); 

