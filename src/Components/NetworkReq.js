import React from "react"
import axios from "axios"
class NetworkRequest extends React.Component {
    constructor() {
        super()
        this.state = {
            toSearch: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            toSearch: e.target.value
        })
    }
    handleSearch = () => {
        console.log(`https://hn.algolia.com/api/v1/search?query=${this.state.toSearch}`)
        axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.toSearch}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.currTask} type="text" />
                <button onClick={this.handleSearch}>Submit</button>


            </div>
        )


    }
}
export default NetworkRequest