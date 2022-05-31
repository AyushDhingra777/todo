import React from 'react'
import "./styles.css"

class Completed extends React.Component {
    // console.log(props)
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='general' style={{ backgroundColor: 'blueviolet' }}>
                {console.log("Completed Component")}
                <h1 style={{ color: "white", textDecoration: "underLine" }}>Completed Tasks</h1>
                {
                    this.props.data.map((obj) => (
                        (obj.completed === true) &&
                        <div>
                            <h2>{obj.title}</h2>
                            <button className='state-btn' onClick={() => this.props.changeStatus(obj.id)}>Move to Incomplete</button>
                            <button onClick={() => this.props.del(obj.id)} className="del-btn">Move to Trash</button>
                        </div>

                    ))

                }

            </div >
        )
    }



}

export default Completed