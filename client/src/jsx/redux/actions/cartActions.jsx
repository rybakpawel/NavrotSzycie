// export const addToCart = (category, name) => async dispatch => {
//     try {
//         const res = await fetch(`http://localhost:5000/${category}/${name}`);
//         const data = await res.json();

//         dispatch({
//             type: 'ADD_TO_CART',
//             payload: {
//                 data
//             }
//         });
//     } catch {
//         console.log('błąd');
//     }
// }