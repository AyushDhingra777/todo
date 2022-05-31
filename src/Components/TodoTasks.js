import React, { Component } from 'react'

import Completed from './Completed'
import Deleted from './Deleted'
import Incomplete from './Incomplete'

export default class TodoTasks extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [
                { id: 0, title: "Eat", completed: true },
                { id: 1, title: "Sleep", completed: false },
                { id: 2, title: "Repeat", completed: false },
            ],
            delTasks: [],
            currTask: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            currTask: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, { id: this.state.tasks.length + 1, title: this.state.currTask, completed: false }],
            currTask: ""
        })
    }
    changeCompletion = (itemID) => {
        let allTasks = this.state.tasks
        // console.log(allTasks)
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === itemID)
                allTasks[i].completed = !(allTasks[i].completed)    //changing value(false=>true,true-=>false)
        }
        this.setState({
            tasks: [...allTasks]
        })
    }
    moveToTrash = (itemID) => {
        let allTasks = [...this.state.tasks]
        let deletedTask = []
        //Try doing this below method using filter,or even better -find method ,const trashObj=allTask.find((item)=>item.id==ItemID)
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === itemID) {
                deletedTask = allTasks[i]
                this.setState({
                    delTasks: [...this.state.delTasks, deletedTask]
                })
            }

        }
        let newArr = this.state.tasks.filter((obj) => (
            obj.id !== itemID
        ))
        this.setState({
            tasks: [...newArr]
        })
    }
    retrieveTask = (task) => {

        let newArr = this.state.delTasks.filter((obj) => (
            obj.id !== task.id
        ))
        this.setState({
            tasks: [...this.state.tasks, task],
            delTasks: [...newArr]
        })

    }

    render() {
        console.log("Parent")
        return (
            <div>
                {/* Add new Task  */}
                <div className='input-text-box' >
                    <input onChange={this.handleChange} value={this.state.currTask} type="text" />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>

                <Incomplete data={this.state.tasks} changeStatus={this.changeCompletion} del={this.moveToTrash} />
                <Completed data={this.state.tasks} changeStatus={this.changeCompletion} del={this.moveToTrash} />
                <Deleted data={this.state.delTasks} retrieveTask={this.retrieveTask} />
            </div>
        )
    }
}
