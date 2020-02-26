import React, { Component } from "react";
import { connect } from "react-redux";
import { UserAction , SortAction} from "../../redux/action/action";
import Filter from "../Filter/Filter";
import "./Home.css";
import Sort from "../Sort/Sort";
import ShoppingList from "../ShoppingList/ShoppingList";

class Home extends Component {
  state = {sortHigh : false , sortLow : false} ;

  getSortByHigh = () => {
    this.props.getSortList();
    this.setState({sortHigh : true,sortLow : false});
  };

  getSortByLow = () => {
   // this.props.getSortList();
    this.setState( {sortLow : true ,sortHigh: false});
    //console.log("high : "+this.state.sortHigh + "low : "+this.state.sortLow);
     //<ShoppingList content={this.props.sortDescending}/> || <ShoppingList content={this.props.sortAscending}/>
  };

  componentDidMount() {
    this.props.getList();    

  }

  render() {
    const { sortHigh , sortLow } = this.state;
    console.log(sortHigh);
    return (
      <div className="container-fluid">
      <div class="row">
    <div class="col-sm-2"><Filter/> </div> <hr/>
    <div class="col-sm-10"><Sort sortByHigh={this.getSortByHigh} sortByLow={this.getSortByLow}/>       
       
         {this.props.sortDescending != null && sortHigh === true ? 
          <ShoppingList content={this.props.sortDescending}/> :     
          (this.props.sortAscending != null && sortLow === true?     
            <ShoppingList content={this.props.sortAscending}/> :
      <ShoppingList content={this.props.usersList}/>) }
      

        </div>
        </div> 
      </div>
    );
  }
}

//that any time the store is updated, mapStateToProps will be called
//return an object or stateProps
const mapStateToProps = (state )=> (
  {
    usersList: state.user.data   ,
    sortDescending: state.sort.sort ,
    sortAscending : state.sort.sortByLow,
   
  }
  //console.log("hello state")
  //console.log(state.sort.sortHigh)
);

//console.log("hello")
// console.log(state.user.users)
/* */
// usersList: state.user.users

//return an object , dispatchProps
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(UserAction()) ,
  getSortList: () => dispatch(SortAction())
});

//The connect() function connects a React component to a Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
