import store from "./store";

// export const addDish = (index) => {
//     const userDish = store.getState().sushi[index];
//     foodUser.push(userDish);
// }
export const selectMenu = (index) => {
    console.log(index);
    const selectMenu = index;
    store.setState({
        selectedItem:selectMenu
    })
};
export const addToCart = (index) => {
    
    const dishChoosen = store.getState().food[index];
    const addDish =   store.getState().foodUser .concat ( {
        price: dishChoosen.price,
        image: dishChoosen.image,
        name: dishChoosen.name
    } );
    // store.getState().foodUser.push(dishChoosen);
    store.setState({
        foodUser: addDish
    });

}

// funcion para el total del reporte
export const totalPrice = () =>{
    let contador = 0;
   
    for (var i of store.getState().foodUser){
        contador += i.price;
        console.log(contador);
    }
    return contador;
}