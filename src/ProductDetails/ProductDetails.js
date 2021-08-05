import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props)=>

{
    const colorOptions=props.data.colorOptions.map((item,pos)=>{
        const classArr =[classes.ProductImage]
        if(props.currentImage===item.imageUrl){
            classArr.push(classes.SelectedProductImage)
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}
            onClick={() => props.OnColorOptionClick(pos)} />
        );
    })

    const featureList = props.data.featureList.map((item,pos)=> {
        const feautureArr =[classes.FeautureButton]
        if(pos===1 && props.heartBeatSection){
            feautureArr.push(classes.SelectedFeautureButton)
        }
        else if(pos===0 && ! props.heartBeatSection) feautureArr.push(classes.SelectedFeautureButton)
        
        return(
            <button key ={pos} className={feautureArr.join(' ') } onClick={()=> props.OnFeautureOptionClick(pos)}> {item} </button>
        );
    })

    return(
        <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
        <p className={classes.ProductDescription}>{props.data.description}</p>
        <h3 className={classes.SectionHeading}>
          Select Color
        </h3>
        <div>
            {colorOptions}
       
        </div>
        <h3 className={classes.SectionHeading}>
          Feautures
        </h3>
        <div> {featureList} </div>
        <button className={classes.BuyButton}>BUY NOW</button>
        </div>
    )
}
export default ProductDetails;