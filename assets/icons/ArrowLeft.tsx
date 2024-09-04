import Svg, { SvgProps, Path } from 'react-native-svg'
import palette from '@/constants/palette'

export const ArrowLeft = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <Path
      stroke={palette.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.8 16H3.2m0 0L14.4 4.8M3.2 16l11.2 11.2"
    />
  </Svg>
)
export default ArrowLeft
