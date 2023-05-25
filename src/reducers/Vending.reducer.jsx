export const initialState = { total: 500, cents: 0, dollars: 0 }

export function VendingReducer(state, action) {
  let tempTotal = state.total;
  switch (action.type) {
    case 'cent':
      tempTotal = state.total- action.payload;
      return { 
        total: tempTotal >= 0 ? tempTotal : state.total, 
        cents: state.cents + action.payload,
        dollars: state.dollars 
      }
    case 'dollar':
      tempTotal = state.total- (action.payload  * 100);
      return { 
        total: tempTotal >= 0 ? tempTotal : state.total, 
        cents: state.cents, 
        dollars: state.dollars + action.payload
      }
    default:
     return { 
       total: state.total, 
       cents: state.cents, 
       dollars: state.dollars
     }
  }
}
