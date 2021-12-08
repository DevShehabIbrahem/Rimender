import { ADD_REMINDER, ALL_REMOVE, REMOVE_REMINDER } from "../actionsTypes";
const reducer = (state = [], action) => {
  let reminder = []; // <= هحط فيها الاستات بتعتى
  if (action.type === ADD_REMINDER) {
    //حطلى جوه الفاليو الفاضيه دى
    reminder = [
      ...state, // <= هات الاستات القديمه
      { text: action.text, date: action.date, id: Math.random() }, //<= وحط ده
    ];
    console.log("from reducer", reminder);
    return reminder;
  } else if (action.type === REMOVE_REMINDER) {
    reminder = state.filter((item) => item.id !== action.id);
    return reminder;
  } else if (action.type === ALL_REMOVE) {
    reminder = [];
    return reminder;
  } else {
    return state;
  }
};

export default reducer;
