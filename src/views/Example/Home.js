import React from 'react'
// import { withRouter } from 'react-router';
import Color from '../HOC/Color';


class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todos')
        }, 3000)
    }
    render() {
        return (
            <div>
                lam dep trai vo dich vu tru
            </div>
        )
    }
}
export default Color(Home);
// export default withRouter(Home);