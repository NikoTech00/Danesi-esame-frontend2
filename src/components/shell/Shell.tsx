import { Outlet } from "react-router"
import Header from "./Header"

const Shell = () => {
    return (
        <div className="shell">
            <Header />
            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}

export default Shell