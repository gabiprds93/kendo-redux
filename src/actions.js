import store from "./store";

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
}
