import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }
    handleOnChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault()
        if (!this.state.salary || !this.state.title) {
            alert('Missing required params')
            return;
        }
        console.log('=>>> call render: ', this.state)
        this.props.addANewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {

        return (
            <div>

                <form>
                    <label htmlFor="fname">Job's Titile:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleOnChangeSalary(event)} /><br /><br />
                    <input type="button" value="Submit" onClick={(event) => this.handleOnClick(event)} />
                </form>
            </div>
        )
    }
}
export default AddComponent;