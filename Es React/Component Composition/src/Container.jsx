import { useState } from "react"

export function Container({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);

    function handleCollapse() {
        setCollapsed(c => !c)
        console.log(collapsed)
    }

    return (
        <div className="app">
            <div className="app-title"><button onClick={handleCollapse}>{title}</button></div>
            <div className={!collapsed ? "app-content" : "app-content-hidden"}>{children}</div>
        </div>
    )
}

export default Container