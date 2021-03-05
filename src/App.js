import style from './App.module.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={style.AppWrapper}>
                    <div className={style.AppWrapper_header}>
                        <HeaderContainer />
                    </div>
                    <div className={style.AppWrapper_content}>
                        <Content/>
                    </div>
                    <div className={style.AppWrapper_nav}>

                    </div>
                </div>
            </Provider>
        </BrowserRouter>

    );
}

export default App;
