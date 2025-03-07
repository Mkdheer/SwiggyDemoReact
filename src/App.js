import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default App;


