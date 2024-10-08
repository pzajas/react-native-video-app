import palette from '@/constants/palette'
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from 'react-native-svg'

const ChannelIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" {...props}>
    <Rect width={48} height={48} fill={palette.primary} rx={24} />
    <G clipPath="url(#a)">
      <Path
        fill={palette.white}
        fillRule="evenodd"
        d="M30.563 32H17.438c-.706 0-1.228-.697-.961-1.338C17.713 27.698 20.617 26 24 26c3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.962 1.338ZM19.916 20c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4S26.252 24 24 24c-2.251 0-4.083-1.794-4.083-4Zm14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={palette.white} d="M14 14h20v20H14z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ChannelIcon
