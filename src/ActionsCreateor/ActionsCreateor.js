import { ADD_REMINDER, REMOVE_REMINDER, ALL_REMOVE } from "../actionsTypes";
export const add_reminder = (text, date) => {
  //<= هعوض دول فى الصفحه الرئيسيه و دول الى هيتعمل فيهم الاكشن
  const action = {
    type: ADD_REMINDER,
    text, //<= ده الى هبعتو للريدويسر بقلو انى هعمل الفكره دى اشتغل عليها
    date,
  };
  console.log("aDD", action);
  return action;
};
export const remove_reminder = (id) => {
  //<= هعوض دول فى الصفحه الرئيسيه و دول الى هيتعمل فيهم الاكشن
  const action = {
    type: REMOVE_REMINDER,
    id,
  };
  console.log("remove", action);
  return action;
};
export const all_remove = () => {
  //<= هعوض دول فى الصفحه الرئيسيه و دول الى هيتعمل فيهم الاكشن
  const action = {
    type: ALL_REMOVE,
  };
  console.log("remove", action);
  return action;
};
