import React from "react";

export default function Navbar(props) {
    return (
      <React.Fragment>
            <div id="navlist">
              <div className="search">
                <input type="text"  defaultValue={props.search_text}   onKeyUp={(event) =>props.updateSearchText(event)} placeholder="Search.."/>
              </div>
          </div>
          <style jsx>
          {
              `
              /* styling navlist */
              #navlist {
                  background-color: #e9e9e9;
                  position: absolute;
                  width: 100%;
              }
              
       
              /* hover effect of navlist anchor element */
              #navlist a:hover {
                  background-color: #ddd;
                  color: black;
              }
               
              /* styling search bar */
              .search input[type=text]{
                  width:300px;
                  height:25px;
                  border-radius:25px;
                  border: none;
       
              }
               
              .search{
                  float:right;
                  margin:7px;
       
              }
              
                  `
          }
      </style>
      </React.Fragment>
    )
  }
  