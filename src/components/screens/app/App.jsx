import React, { useState, useEffect } from "react"

import loader from "../../../assets/preloader.svg"

import ls from "../../screens/app/LoadingScreen.module.css"
import dark from "../../themes/dark.module.css"
import main from "../../Main.module.css"

import get_client from "../../../api"

import Welcome from "../welcome/Welcome"
import Index from "../index/Index"


export default function App() {
    const [client, setClient] = useState("")

    useEffect(() => {get_client().then(status => setClient(status))}, [])

    if (typeof client !== "object") return <Index client={client}/>

    if (client === false) return <Welcome />
    
    return (
        <div className="app">
            <main className={main.fullScreen + " " + ls.loadingScreen}>
                <div className={ls.screenPanel}>
                    <div className={ls.title}>Meteora</div>

                    <span className={ls.waitText}>
                        Please wait. Starting the app...
                    </span>
                    
                    <img 
                        src={loader} alt=""
                        className={dark['ui-icon'] + " " + ls.preloader}
                    />
                </div>
            </main>
        </div>
    )
}