import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation,
  Zoom,
  Mousewheel,
  Keyboard,
} from 'swiper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { IGameGroup, ILobby } from '../types'
import Actions from '../redux/actions/games'

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Zoom, Mousewheel, Zoom, Keyboard])

export default function Slider() {
  const lobbies: Array<ILobby> = useSelector(
    (state: RootState) => state.lobbies
  )

  const games: Array<IGameGroup> = useSelector(
    (state: RootState) => state.games
  )

  const loading: boolean = useSelector((state: RootState) => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.getLobbyGameGroupGames())
    dispatch(Actions.getLobbyListWithGameGroups())
  }, [])

  return (
    <>
      <h1>{loading ? 'Loading...' : 'Done'}</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        zoom={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="slider"
        breakpoints={{
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}
