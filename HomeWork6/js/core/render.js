import {fetchData} from "../http/fetchData.js";
import {toggleLoader} from "../services/toggleLoader.js";

export const render = async (wrap, url, template) => {
  toggleLoader(wrap);

  const data = await fetchData(url);

  toggleLoader(wrap);

  if (typeof data !== "object") {
    return wrap.insertAdjacentHTML('beforeend', data);
  }

  wrap.insertAdjacentHTML('beforeend', template(data));
}