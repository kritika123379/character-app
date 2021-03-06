import React from "react";
import PersistentDrawerLeft from "../../Layout/Sidebar"
import DetailCard from "../../Layout/Card"
import {connect} from "react-redux";



class CharacterDetails extends React.Component {
    render() {
      const {character}=this.props
      return(
        <PersistentDrawerLeft>
           <h1>Details Character</h1>    
           {character &&
            character.map((item,index)=>{
              return (
                <DetailCard
                key={item.char_id}
                birthday={item.birthday}
                category={item.category}
                occupation={item.occupation}
                appearance={item.appearance}
                portrayed={item.portrayed}
                image={item.img}
                name={item.name}
                nickname={item.nickname}
                occupation={item.occupation}
                status={item.status}
              />
              )
            })
          }            
        </PersistentDrawerLeft>
      )
    }
  }
 
  const mapStateToProps = (state) => ({
     character:state.characterdata.fetch_Character
  })
  

  export default connect( mapStateToProps)(CharacterDetails)
