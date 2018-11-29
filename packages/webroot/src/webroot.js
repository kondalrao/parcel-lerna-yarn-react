import React, { Component } from 'react'
import Comp1 from '@parcel_lerna_yarn_react/comp1'
import Comp2 from '@parcel_lerna_yarn_react/comp2'

export default class App extends Component {
    render() {
        return (
            <div>
                <div>This is webroot.</div><br/>
                <Comp1 title="Title" onClick={() => console.log("Clicked!!")}>
                    <Comp2/>
                    <div>This is a page...</div>
                </Comp1>
            </div>
        )
    }
}
