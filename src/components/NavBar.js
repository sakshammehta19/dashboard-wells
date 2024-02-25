import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar sticky-top border-bottom border-warning border-5" style={{"backgroundColor":"#d71e28", "width":"80"}}>
            <div className="container-fluid">
                <div className="navbar-brand mx-10  " href="/"  >
                    <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Logo" />
                    <span className='mx-2 text-warning'> | </span>
                    <span className="addspace text-light" ><b >Splunk Anomaly Detection Dashboard</b></span>
                </div>
            </div>
        </nav>

    )
}
