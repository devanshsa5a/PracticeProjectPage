import React, {Component} from 'react';
import classes from './App.module.css';
import ProductData from './utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import Productpreview from './ProductPreview/ProductPreview';
import Topbar from './TopBar/Topbar';

class App extends Component {
state =
{ currentImage: 'https://imgur.com/iOeUBV7.png',
  productData: ProductData,
  heartBeatSection: false,
  
} 
OnColorOptionClick = (pos)=>{
  const updatedurl=this.state.productData.colorOptions[pos].imageUrl;

  this.setState({currentImage:updatedurl});
}
OnFeautureOptionClick =(pos)=>{
  let updatecon=false;

  if(pos===1) 
  updatecon=true;

  this.setState({ heartBeatSection:updatecon});
  
}
  render(){

    
    return (
      <div className="App">
      <header className="App-header">
        <Topbar/>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.Productpreview} >
          <Productpreview currentImage={this.state.currentImage} heartBeatSection ={this.state.heartBeatSection} />
          </div>
          <div className={classes.ProductData}>
           <ProductDetails data={this.state.productData} currentImage={this.state.currentImage}  heartBeatSection ={this.state.heartBeatSection} OnColorOptionClick={this.OnColorOptionClick} OnFeautureOptionClick={this.OnFeautureOptionClick} />
          </div>
        </div>
      
    </div>
  );
}
  
}

export default App;
