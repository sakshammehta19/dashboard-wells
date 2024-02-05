import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark border-bottom border-body" >
            <div className="container-fluid">
                <div className="navbar-brand mx-10" href="/"  >
                    <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRG3-yXHy_mQJ8zWZlo1G3CUKuYhtTGzpKW6F07Rg=s900-c-k-c0x00ffffff-no-rj" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    <span className="addspace">Splunk Anomaly Detection Dashboard</span>
                </div>
            </div>
        </nav>

    )
}
