import { Provider } from "react-redux";
import { AppRouter } from "./router";
import store from "./store";

export default () => <Provider store={store}><AppRouter/></Provider>