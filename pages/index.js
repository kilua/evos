import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react'
import { wrapper } from '@/Store/index'
import { END } from 'redux-saga'

import Layout from 'Containers/layout'
import Navbar from 'Components/navbar'
import Loader from 'Components/loader'
import { loadItems } from '@/Store/data_store/actions'

const Home = (props) => {

  const [searchText, setSearchText] = useState('')

  const updateSearchTextValue = (e) => {
    setSearchText(e.target.value)
  }

  const GetContent = dynamic(
    () => import('Components/list'),
    { 
      loading: () => <Loader/>
    }
  )

  return (
    <Layout>
      <Navbar searchText={searchText}
        updateSearchText={updateSearchTextValue} />
       <div className="masonry-wrapper">
         <GetContent searchText={searchText} data={props.storeItems}/>
         <style>
           {
             `
            .masonry-wrapper {
              padding: 3.5em;
              max-width: auto;
              margin-right: auto;
              margin-left: auto;
            }
            .masonry {
              columns: 1;
              column-gap: 10px;
            }
            .masonry-item {
              display: inline-block;
              vertical-align: top;
              margin-bottom: 10px;
            }
            @media only screen and (max-width: 1023px) and (min-width: 768px) {  .masonry {
                columns: 2;
              }
            }
            @media only screen and (min-width: 1024px) {
              .masonry {
                columns: 6;
              }
            }
            .masonry-item, .masonry-content {
              border-radius: 0px;
              overflow: hidden;
            }
            .masonry-item {
              filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));
              transition: filter .25s ease-in-out;
            }
            .masonry-item:hover {
              filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .3));
            }
            .mansory-image {
                border-radius: 10px;
            }
            .masonry-footer {
              font-size: .75em;
              opacity: .25;
              text-align: center;
              padding-top: 3em; 
              padding-bottom: 3em;
              margin-bottom: -1.5em;
              transition: opacity 1s ease-in-out;
            }
            .masonry-footer a {
              color: currentColor;
            }
            .masonry-footer:hover, .masonry-footer:active, .masonry-footer:focus {
              opacity: .75;
            }
             `
           }
         </style>
        </div>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, query }) => {
    
    const isServer = !!req
    await store.dispatch(
      loadItems({
        payload: {
          is_server: isServer,
        },
      }
      ),
    )


    store.dispatch(END)
    await store.sagaTask.toPromise()

    return {
      props: {
        storeItems: !!store.getState().storeItems === true ? store.getState().storeItems.data : []
      },
    }
  },
)

export default Home
