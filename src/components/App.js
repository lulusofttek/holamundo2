import React from 'react'
import Regards from './regards'

/* Componentes funcionales
const App = () => {
}

function App() {
*/

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Lulu',
            lastName: 'Nieto'
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState(objectName){
        this.setState(objectName)
    }
    render(){
        return (<div>
            <Regards objectName={this.state}/>
            <button onClick={() => this.changeState({name: 'Pau', 
                lastName: 'Cano' })
                }>Pau
            </button>
            <button onClick={() => this.changeState({name: 'Fer', 
                lastName: 'Cano' })
                }>Fer
            </button>
        </div>
        )
    }
}

export default App
