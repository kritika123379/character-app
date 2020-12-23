import {connect} from "react-redux";
import React,{Component} from "react";
import {setCharactersAction } from "../../redux/actions/characterAction";
import Characters from "./characters"
import Pagination from "react-js-pagination";
import * as type from "../../redux/types/types"
import PersistentDrawerLeft from "../../Layout/Sidebar";



class Views extends Component{

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
    const {characters,selectedName,selectedCategory}=this.props;
    let filterCharacters
    if (selectedCategory.length > 0) {
      filterCharacters = selectedCategory
    }
    else if (selectedName.length > 0) {
      filterCharacters = selectedName
    }
    else{
      filterCharacters = characters
    }

    return(
      <PersistentDrawerLeft>
        <Characters
          characters={filterCharacters}
          type={type}
          />
      </PersistentDrawerLeft>
    )
  }
}


const mapStateToProps = (state) => ({
  characters:state.characterdata.fetch_Characters,
  type:state.characterdata.type ,
  selectedCategory: state.categoryReducer.fetch_category ,
  selectedName: state.searchdata.search_character
})

export default connect( mapStateToProps 
  ,{setCharactersAction})(Views)


