import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { useState, useEffect } from "react";
import { GrPrevious, GrNext} from "react-icons/gr";
import "../css/main.css"
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import { useApiData } from './ApiDataContext';

function SimpleSlider(props) {
  const [events, setEvents] = useState([]);
  const { apiData } = useApiData();

  useEffect(() => {
    if (apiData) {
      setEvents(apiData);
    }
  }, [apiData]);

  return (
    <Carousel
      IndicatorIcon={events.MAIN_IMG} // Previous Example
      indicatorIconButtonProps={{
        style: {
          padding: '10px',    // 1
          color: 'grey'       // 3
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: 'grey' // 2
        }
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '20px', // 5
          textAlign: 'center' // 4
        }

      }}
      fullHeightHover={true}     // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'black',
          borderRadius: 100
        }
      }}
      navButtonsAlwaysVisible={true}
      NextIcon={<GrNext />}           // Change the "inside" of the next button to "next"
      PrevIcon={<GrPrevious />}             // Change the "inside of the prev button to "prev"
    >
      {events.length > 0 ? events.slice(0,10).map((item, i) => <Item key={i} item={item} />) : null}
    </Carousel>
  )
}

function Item(props) {
  return (
    <>
      <Box>
        <hr />
        <h1 class="my-5 text-xl">{props.item.TITLE}</h1>
        <div className="flex justify-center items-center h-[550px]">
          <Link to={`/detail/${props.item.id}`}>
            <img
              className="w-full max-w-sm min-w-72"
              src={props.item.MAIN_IMG}
            />
          </Link>
        </div>
        <hr />
        
      </Box >
    </>
  )
}

export default SimpleSlider;
