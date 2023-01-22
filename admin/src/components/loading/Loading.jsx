import "./loading.scss"
const Loading = (props) => {
  return (
    <>
    
    <div className="container-load">
    <svg
    width={640}
    height={640}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M462 322.17c0 80.58-65.42 146-146 146s-146-65.42-146-146 65.42-146 146-146 146 65.42 146 146z"
        id="outer_circle"
      />
      <path
        d="M422 320c0 56.3-45.7 102-102 102s-102-45.7-102-102 45.7-102 102-102 102 45.7 102 102z"
        id="inner_ring"
      />
      <mask
        id="prefix__d"
        x={178}
        y={178}
        width={284}
        height={284}
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M178 178h284v284H178z" />
        <use href="#inner_ring" />
      </mask>
      <path
        d="M375.14 189.22l-36.99 60.69-38.93.19-35.05-62.28c4.34-1.44 7.05-2.35 8.14-2.71 29.43-9.81 61.25-9.79 90.67.05 1.62.54 5.67 1.89 12.16 4.06z"
        id="top_main_piece"
      />
      <path
        d="M228.48 208.82l25.78 41.7-62.86.09c2.02-3.9 3.29-6.33 3.79-7.31a84.14 84.14 0 0 1 33.29-34.48z"
        id="top_left_piece"
      />
      <path
        d="M175.75 299.16c.07.48.48.84.97.84h39.35l-28.71-44.44c-2.2 3.74-3.57 6.08-4.12 7.02a57.72 57.72 0 0 0-7.37 37.42s-.67-4.67-.12-.84z"
        id="left_middle_piece"
      />
      <path
        d="M454.98 300h-40.2l28.72-47.41c2.46 4.46 3.99 7.26 4.61 8.37 6.32 11.5 8.8 24.72 7.05 37.73-.02.17-.08.61-.18 1.31z"
        id="right_middle_piece"
      />
      <path
        d="M320 466.91l-21.66-2.01-24.08-6.37-3.21-5.61 23.21-34.96L320 466.91z"
        id="left_bottom_piece"
      />
      <path
        d="M320 467.12l21.66-2.02 24.08-6.36 3.21-5.61-23.21-34.96L320 467.12z"
        id="right_bottom_piece"
      />
      <path
        d="M250 285.09l65.04 108.39v40.56l-97.9-168.53L250 285.09z"
        id="right_center_piece"
      />
      <path
        d="M390.79 285.31l-65.05 108.4v40.56l97.91-168.54-32.86 19.58z"
        id="left_center_piece"
      />
      <path
        d="M383.83 277.87l-126.41.56-34.87-20.71 194.9 1.9-33.62 18.25z"
        id="top_center_piece"
      />
      <path
        d="M284.97 290l-.61 3.7 71.78.61-3.07-4.31h20.86l-8.59 17.2-5.34-3.69-35.76 62.58 5.76.61-10 17.8-10-18.41h5.65l-38.04-62.58-4.29 6.49-9.2-20h20.85z"
        id="center_piece"
      />
      <path
        d="M172.24 340.73l74.57-.73 20.95 34.14-37.55 64.99c-3.68-3.08-5.98-5-6.9-5.77a143.476 143.476 0 0 1-48.23-79.58c-.38-1.74-1.33-6.09-2.84-13.05z"
        id="left_main_piece"
      />
      <path
        d="M404.5 438.04L370 375.9l19.06-33.94 71.47.28c-.89 4.49-1.44 7.29-1.66 8.42a143.218 143.218 0 0 1-44.83 78.82c-1.27 1.14-4.45 3.99-9.54 8.56z"
        id="right_main_piece"
      />
      <path
        d="M402.91 206.23l-25.77 41.7 62.86.1c-2.03-3.9-3.29-6.34-3.8-7.32a84.078 84.078 0 0 0-33.29-34.48z"
        id="top_right_piece"
      />
      <path
        d="M335.57 320c0 8.6-6.97 15.57-15.57 15.57-8.6 0-15.57-6.97-15.57-15.57 0-8.6 6.97-15.57 15.57-15.57 8.6 0 15.57 6.97 15.57 15.57z"
        id="prefix__b"
      />
      <clipPath id="prefix__s">
        <use href="#prefix__b" />
      </clipPath>
    </defs>
    <use href="#outer_circle" />
    <use href="#inner_ring" fill="#eeeec7" fillOpacity={0.09} />
    <g mask="url(#prefix__d)">
      <use
        href="#inner_ring"
        fillOpacity={0}
        stroke="#11059b"
        strokeWidth={40}
      />
    </g>
    <use href="#top_main_piece" fill="#30b9d5" fillOpacity={0.99} />
    <use href="#top_main_piece" fillOpacity={0} stroke="#000" />
    <use href="#top_left_piece" fill="#30b7d4" />
    <use href="#top_left_piece" fillOpacity={0} stroke="#000" />
    <use href="#left_middle_piece" fill="#30b7d4" />
    <use href="#left_middle_piece" fillOpacity={0} stroke="#000" />
    <use href="#right_middle_piece" fill="#30b7d4" />
    <use href="#right_middle_piece" fillOpacity={0} stroke="#000" />
    <use href="#left_bottom_piece" fill="#30b7d4" />
    <use href="#left_bottom_piece" fillOpacity={0} stroke="#000" />
    <use href="#right_bottom_piece" fill="#30b7d4" />
    <use href="#right_bottom_piece" fillOpacity={0} stroke="#000" />
    <use href="#right_center_piece" fill="#30b7d4" />
    <use href="#right_center_piece" fillOpacity={0} stroke="#000" />
    <g>
      <use href="#left_center_piece" fill="#30b7d4" />
      <use href="#left_center_piece" fillOpacity={0} stroke="#000" />
    </g>
    <g>
      <use href="#top_center_piece" fill="#30b7d4" />
      <use href="#top_center_piece" fillOpacity={0} stroke="#000" />
    </g>
    <g>
      <use href="#center_piece" fill="#30b7d4" />
      <use href="#center_piece" fillOpacity={0} stroke="#5d0808" />
    </g>
    <g>
      <use href="#left_main_piece" fill="#30b7d4" />
      <use href="#left_main_piece" fillOpacity={0} stroke="#000" />
    </g>
    <g>
      <use href="#right_main_piece" fill="#30b7d4" />
      <use href="#right_main_piece" fillOpacity={0} stroke="#000" />
    </g>
    <g>
      <use href="#top_right_piece" fill="#30b7d4" />
      <use href="#top_right_piece" fillOpacity={0} stroke="#000" />
    </g>
    <g>
      <filter
        id="prefix__r"
        x={149.43}
        y={149.43}
        width={341.15}
        height={341.15}
        filterUnits="userSpaceOnUse"
        primitiveUnits="userSpaceOnUse"
      >
        <feFlood />
        <feComposite in2="SourceAlpha" operator="in" />
        <feGaussianBlur stdDeviation={7.07} />
        <feOffset result="afterOffset" />
        <feFlood floodColor="#e4dcdc" floodOpacity={0.5} />
        <feComposite in2="afterOffset" operator="in" />
        <feMorphology operator="dilate" radius={50} />
        <feComposite in2="SourceAlpha" operator="out" />
      </filter>
      <path
        d="M335.57 320c0 8.6-6.97 15.57-15.57 15.57-8.6 0-15.57-6.97-15.57-15.57 0-8.6 6.97-15.57 15.57-15.57 8.6 0 15.57 6.97 15.57 15.57z"
        fill="#fff"
        filter="url(#prefix__r)"
      />
      <use href="#prefix__b" fill="#f1f5f6" />
      <g clipPath="url(#prefix__s)">
        <use
          href="#prefix__b"
          fillOpacity={0}
          stroke="#080000"
          strokeWidth={10}
        />
      </g>
      <g>
        <filter
          id="prefix__t"
          x={149.43}
          y={149.43}
          width={341.15}
          height={341.15}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="out" />
          <feGaussianBlur stdDeviation={7.07} />
          <feOffset result="afterOffset" />
          <feFlood floodColor="#fcfbfb" floodOpacity={0.8} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" radius={50} />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
        <path
          d="M335.57 320c0 8.6-6.97 15.57-15.57 15.57-8.6 0-15.57-6.97-15.57-15.57 0-8.6 6.97-15.57 15.57-15.57 8.6 0 15.57 6.97 15.57 15.57z"
          fill="#fff"
          filter="url(#prefix__t)"
        />
      </g>
    </g>
  </svg>
  </div>

    </>
  )
}

export default Loading