import React from 'react'
import "./styles.css"

class Deleted extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='general' style={{ backgroundColor: "dimgrey " }}>
                {console.log("Deleted Component")}
                <h1 style={{ color: "white", textDecoration: "underLine" }}>Deleted Tasks</h1>
                {
                    this.props.data.map((obj) => (
                        <div>
                            <h2>{obj.title}</h2>
                            <button onClick={() => this.props.retrieveTask(obj)} className='del-btn'>Retrieve</button>

                        </div>


                    ))
                }

            </div>
        )
    }

}

export default Deleted