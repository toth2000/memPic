const reducers = (state = [], action) => {

   //The state contains posts, which is empty array initially 

   switch (action.type) {
        case 'FETCH_ALL':
           return action.payload;
        case 'CREATE':
            return [...state, action.payload];
        default:
           return state;
   }

}

export default reducers;