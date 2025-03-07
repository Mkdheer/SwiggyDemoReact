import { useRouteError } from "react-router-dom"

export default () => {
    const errObj = useRouteError();
    console.log(errObj);
    return (
        <div>
            <h2>Iam a Error Page</h2>
            <h3>{errObj.status} and {errObj.statusText}</h3>
        </div>
    )
}