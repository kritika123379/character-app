import {connect} from "react-redux";
import React,{Component} from "react";
import {setCharactersAction } from "./redux/actions/characterAction";
import './App.css';
import * as type from "./redux/types/types"
import Routes from "./Routes";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }

  componentDidMount(){
    this.props.setCharactersAction()
  }
   
  render(){  
    const {characters}=this.props;
    return(
        <div>
          <Routes/>
          <characters
          characters={characters}
          type={type}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  characters:state.characterdata.fetch_Characters,
  type:state.characterdata.type 
})

export default connect( mapStateToProps 
  ,{setCharactersAction})(App)


