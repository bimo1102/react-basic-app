import React from "react";
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShotHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    //re-render
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs ? 'showJobs = true' : 'showJobs = false';
        console.log('=>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ? <div><button onClick={() => this.handleShotHide()}>Show both information</button></div>
                    :
                    <>
                        <div className="Job-lists">
                            {
                                arrJobs?.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShotHide()}>Hide both infomation</button></div>
                    </>
                }
            </>
        )
    }


    // }
    // const ChildComponent = (props) => {
    //     let { arrJobs } = props;
    //     return (
    //         <>
    //             <div className="Job-lists">
    //                 {
    //                     arrJobs?.map((item, index) => {
    //                         console.log('luong la', item.salary)
    //                         if (item.salary >= 500) {
    //                             console.log('luong la', item.salary)
    //                             return (
    //                                 <div key={item.id}>
    //                                     {item.title} - {item.salary} $
    //                                 </div>
    //                             )
    //                         }
    //                         return null;
    //                     })
    //                 }
    //             </div>
    //         </>
    //     )
}
export default ChildComponent;