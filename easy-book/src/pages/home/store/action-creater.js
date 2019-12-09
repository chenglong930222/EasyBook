import * as Api from '../../../api/data';
import * as actionType from './action-type';
export const searchBookListAction = (list) => ({
  type: actionType.SEARCH_BOOKLIST,
  bookList: list
});
export const searchBookList = () => {
  return (dispatch) => {
    console.log(Api.searchEasyList);
    Api.searchEasyList('http://localhost:7888/easy-book/index1.php').then((res) => {
      console.log(res.data);
      dispatch(searchBookListAction(res.data));
    });
  };
};