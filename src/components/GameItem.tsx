import type { GameItemProps } from "@/interfaces/interfaces"
import type { FunctionalComponent } from "preact"

const GameItem: FunctionalComponent<GameItemProps> = ({id, icon, position, colorStart, colorEnd}) => {
  const positionClass = position === 'left' 
    ? 'top-0 left-0 translate-x-[-50%] translate-y-[-50%]'
    : position === 'right'
    ? 'top-0 right-0 translate-x-[50%] translate-y-[-50%]'
    : 'bottom-[-10%] left-[50%] transform -translate-x-[50%]';

  return (
    <button
      className={`absolute ${positionClass} flex items-center justify-center 
      rounded-full h-36 w-36 bg-gradient-to-t ${colorStart} ${colorEnd} shadow-outCir
      sm:h-32 sm:w-32 md:h-40 md:w-40`}
    >
      <div className="bg-white rounded-full flex items-center justify-center w-28 h-28 shadow-innCir
      sm:w-24 sm:h-24 md:w-32 md:h-32">
        <img src={icon.src} alt="item-img" />
      </div>
    </button>
  )
}

export default GameItem