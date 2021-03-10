import style from './App.module.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() { //use HashRouter only for github-pages, usually use BrowserRouter
    return (
        <HashRouter>
            <Provider store={store}>
                <div className={style.AppWrapper}>
                    <div className={style.AppWrapper__header}>
                        <HeaderContainer />
                    </div>
                    <div className={style.AppWrapper__content}>
                        <Content/>
                    </div>
                </div>
            </Provider>
        </HashRouter>

    );
}

export default App;
