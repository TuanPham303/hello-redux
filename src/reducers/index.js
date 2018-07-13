export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'is_open':
      return;
    case 'is_clicked':
      return;
    default:
      return state;
  }
}