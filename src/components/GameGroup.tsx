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
  Virtual,
} from 'swiper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { IGame, IGameGroupDTO, ILobby, ScreenSize } from '../types'
import Actions from '../redux/actions/games'

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Virtual])

export default function GameGroup({
  gameGroup,
  screenSize,
}: {
  gameGroup: IGameGroupDTO
  screenSize: ScreenSize
}) {
  const [slidesPerView, setSlidesPerView] = useState(1)
  const loading: boolean = useSelector((state: RootState) => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.getLobbyGameGroupGames())
    dispatch(Actions.getLobbyListWithGameGroups())
  }, [])

  useEffect(() => {
    switch (screenSize) {
      case ScreenSize.DESKTOP:
        setSlidesPerView(5)
        break
      case ScreenSize.TABLET:
        setSlidesPerView(3)
        break
      case ScreenSize.MOBILE:
        setSlidesPerView(1)
        break
    }
  }, [screenSize])

  return (
    <>
      <Swiper
        navigation={true}
        mousewheel={false}
        keyboard={false}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          type: 'progressbar',
        }}
        className="slider"
        virtual={{
          cache: true,
        }}
      >
        {gameGroup &&
          gameGroup.games.map((game, index) => (
            <SwiperSlide key={`game_idx_${index}`} virtualIndex={index}>
              <div className="slide-card">
                <h3>{game.name}</h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
