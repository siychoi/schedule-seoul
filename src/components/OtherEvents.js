import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApiData } from './ApiDataContext';
import processedData from './JsonData';

function isTodayBeforeStartDate(todayTimestamp, eventStartDate) {
  const today = new Date(todayTimestamp);
  const startDate = new Date(eventStartDate);
  return today < startDate;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function OtherEvents() {
  const { id } = useParams();
  const [otherGenreEvent, setOtherGenreEvent] = useState([]);
  const [otherGuEvent, setOtherGuEvent] = useState([]);
  const [eventDetail, setEventDetail] = useState(null);

  const { apiData } = useApiData();
  
  useEffect(() => {

    const todayTimestamp = Date.now(); // 오늘의 타임스탬프
    if(processedData)
    {
      const eventDetailData = processedData.find(event => event.id === parseInt(id));
      if(eventDetailData)
      {
        setEventDetail(eventDetailData);
        setOtherGenreEvent(processedData.filter(event => 
          event.THEMECODE === eventDetailData.THEMECODE &&
          isTodayBeforeStartDate(todayTimestamp, event.STRTDATE) &&
          event.id !== parseInt(id)));
        setOtherGuEvent(processedData.filter(event => 
          event.GUNAME === eventDetailData.GUNAME &&
          isTodayBeforeStartDate(todayTimestamp, event.STRTDATE) &&
          event.id !== parseInt(id)));
      }
    }
  }, [processedData, id]);

  shuffle(otherGenreEvent);
  shuffle(otherGuEvent);
  return (
    <>
      {eventDetail ?
      <>
        <div className="bg-white">
          <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-2xl font-bold text-black-700">"{eventDetail.THEMECODE ? eventDetail.THEMECODE : "기타"}" 다른 행사는 어때요?</span>
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {otherGenreEvent.slice(0,8).map((product) => (
                <a key={product.id} href={`/detail/${product.id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.MAIN_IMG}
                        alt={product.TITLE}
                        className=" h-60 w-full object-cover object-center group-hover:opacity-75"
                      />
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.TITLE}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="mb-5"/>
        <div className="bg-white">
          <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-2xl font-bold text-black-700">{eventDetail.GUNAME}에서 진행하는 다른 행사는 어때요?</span>
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {otherGuEvent.slice(0,8).map((product) => (
                <a key={product.id} href={`/detail/${product.id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.MAIN_IMG}
                        alt={product.TITLE}
                        className=" h-60 w-full object-cover object-center group-hover:opacity-75"
                      />
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.TITLE}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
        : null}
    </>
  )
}

export default OtherEvents;