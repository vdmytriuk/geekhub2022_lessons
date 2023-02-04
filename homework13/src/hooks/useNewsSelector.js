import {useSelector} from "react-redux";
import {newsSelectors} from "../store/news";

export const useNewsSelector = (selector, arg) => {
  return useSelector(arg ? newsSelectors[selector](arg) : newsSelectors[selector]);
}