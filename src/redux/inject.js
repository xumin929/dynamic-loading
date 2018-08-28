import {getStore} from "./create";

export default reducers => ComposedComponent => {
  const {inject} = getStore();
  inject(reducers);
  return ComposedComponent;
};
