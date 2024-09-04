import Svg, { SvgProps, Path } from 'react-native-svg'
import palette from '@/constants/palette'

export const ClockIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill={palette.primary}
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM3.007 12a8.993 8.993 0 1 0 17.986 0 8.993 8.993 0 0 0-17.986 0Z"
    />
    <Path
      fill={palette.primary}
      d="M12 5a1 1 0 0 0-1 1v6.467s0 .26.127.457c.084.166.217.31.39.41l4.62 2.668a1 1 0 0 0 1-1.732L13 11.88V6a1 1 0 0 0-1-1Z"
    />
  </Svg>
)
export default ClockIcon
