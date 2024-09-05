import Svg, { SvgProps, Path } from 'react-native-svg'
import palette from '@/constants/palette'

const FullscreenIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <Path
      stroke={palette.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.333H5.333V12m21.334 0V5.333H20m0 21.334h6.667V20M5.333 20v6.667H12"
    />
  </Svg>
)
export default FullscreenIcon
