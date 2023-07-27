import { useRouteError,Link } from "react-router-dom"


export default function ProductError() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
        <h3>Error</h3>
        <p>{error.message}</p>
        <Link to={"/"}> back to home page</Link>
    </div>
  )
}
