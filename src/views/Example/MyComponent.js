import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    // state = {
    //     name: 'hai',
    //     age: 19
    // }
    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleClickButton = () => {
    //     alert('click on me pls')
    // }
    // render() {
    //     // let name = "lamlvhe";
    //     return (
    //         <>
    //             <div className="first">
    //                 <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}></input>
    //             </div>
    //             <div className="second">
    //                 {console.log('asdf:', this.state.name)}
    //                 hello my name is {this.state.name}
    //             </div>
    //             <div className="third">
    //                 <button onClick={() => this.handleClickButton()}>click on me</button>
    //             </div>
    //         </>

    //     )
    // }

    //state
    state = {
        arrJobs: [{ id: '0', title: 'developer', salary: '500' }, { id: '1', title: 'tester', salary: '600' }, { id: '2', title: 'bm', salary: '5000' }, { id: '3', title: 'doc', salary: '3500' }]
    }

    addANewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    //re-render
    render() {
        console.log('>>>> call render', this.state)
        return (
            <>
                <AddComponent addANewJob={this.addANewJob}></AddComponent>

                <ChildComponent arrJobs={this.state.arrJobs}></ChildComponent>
            </>
        )
    }
}
export default MyComponent;