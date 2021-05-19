import React from "react"
import {randomIntFromInterval} from '../helpers/utils'
import ContentLoader from "react-content-loader"

const MyLoader = (props) => {
    const rndInt = randomIntFromInterval(150, 379)
    // console.log(rndInt)
    return (
    <ContentLoader 
        speed={2}
        width={240}
        height={379}
        viewBox="0 0 240 379"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="3" ry="3" width="240" height={rndInt}/> 
    </ContentLoader>)
}

const Load = () => {
    const n = 60;
    
    return [...Array(n)].map((el, index) => <MyLoader key={index}/> )
}

const Call = ()=>{
    return (<React.Fragment><div className="masonry">  <Load/> </div> </React.Fragment>)
}

export default Call

