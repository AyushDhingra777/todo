import React, { Component } from 'react'
import axios from "axios"

export default class GetData extends Component {
    componentDidMount() {
        axios.get(" http://localhost:3001/todo")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
