import palette from '@/constants/palette'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const MainScreenIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={116} height={116} fill="none" {...props}>
    <Path
      stroke={palette.primary}
      strokeWidth={8}
      d="M4.667 58c0-25.142 0-37.712 7.81-45.523 7.81-7.81 20.381-7.81 45.523-7.81 25.141 0 37.713 0 45.523 7.81 7.81 7.81 7.81 20.381 7.81 45.523 0 25.141 0 37.713-7.81 45.523-7.81 7.81-20.382 7.81-45.523 7.81-25.142 0-37.712 0-45.523-7.81-7.81-7.81-7.81-20.382-7.81-45.523Z"
    />
    <Path
      stroke={palette.primary}
      strokeLinecap="round"
      strokeWidth={8}
      d="M108.667 36.667H7.333M50 7.333 31.333 36.667M84.667 7.333 66 36.667M74 71.333c0-3.378-3.53-5.656-10.592-10.212-7.158-4.618-10.737-6.927-13.406-5.232-2.669 1.696-2.669 6.278-2.669 15.444s0 13.75 2.67 15.445c2.668 1.695 6.247-.614 13.405-5.232C70.469 76.989 74 74.71 74 71.333Z"
    />
  </Svg>
)
