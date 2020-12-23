import React from "react";
import {withRouter,NavLink} from "react-router-dom";
import PersistentDrawerLeft from "../../Layout/Sidebar"
import CustomCard from "../../Layout/Card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {getCharacterByIdAction} from "../../redux/actions/characterAction"


class Characters extends React.Component {
  clickCard = (id) => {
    this.props.getCharacterByIdAction(id)
    let querystring = "character=" + id
    this.props.history.push(`/character/${querystring}`)
  }

    render() {
      const {characters}=this.props
    
      return(
        <PersistentDrawerLeft>
          {characters &&
            characters.map((item,index)=>{
            
              return (
                <Grid >
                <CustomCard
                onClick={()=>this.clickCard(item.char_id)}
                key={item.char_id}
                char_id={item.char_id}
                category={item.category}
                image={item.img}
                birthday={item.birthday}
                name={item.name}
                nicname={item.nicname}
                appearance={item.appearance}
                occupation={item.occupation}
                portrayed={item.portrayed}
                status={item.status}
                />  
                </Grid>
              )
            })
          }       
        </PersistentDrawerLeft>
      )
    }
  }
 
  
  export default connect( null, 
    {getCharacterByIdAction})(withRouter(Characters))
