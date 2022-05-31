import React from 'react'
import "./styles.css"

class Incomplete extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div className='general' style={{ backgroundColor: "darkslateblue" }}>
                {console.log("Incompleted Component")}
                <h1 style={{ color: "white", textDecoration: "underLine" }}>Incomplete tasks</h1>
                {
                    this.props.data.filter((obj) => obj.completed !== true).map(taskObj => (
                        <div>
                            <h2>{taskObj.title}</h2>
                            <button className='state-btn' onClick={() => this.props.changeStatus(taskObj.id)}>Move to complete</button>
                            <button onClick={() => this.props.del(taskObj.id)} className="del-btn">Move to Trash</button>
                        </div>

                    ))
                }
            </div >
        )
    }


}

export default Incomplete