import React from "react";

export default function List(props) {
    let data = []
    const sort = props.data.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    });
    const filter =  sort.filter(function (item) {
        return !!props.searchText === false ? item : item.name === props.searchText ;
      });
      data = filter
    return (
       <React.Fragment>
        <div className="masonry">
            {
                   data.map((item, idx) => (
                    <div key={idx} className="masonry-item">
                        <img src={item.src} className="mansory-image"/></div>
                   ))
           
            }
           
        </div>
        </React.Fragment>
    )
  }
  