import {useSelector} from "react-redux";
import {commentsSelectors} from "../store/comments";

export const useCommentsSelector = (selector, arg) => {
  return useSelector(arg ? commentsSelectors[selector](arg) : commentsSelectors[selector]);
}