import Svg, { SvgProps, Path } from 'react-native-svg'

export const SearchIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" {...props}>
    <Path
      stroke={props.color || '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.06 18.081 25 25m-4-14c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
    />
  </Svg>
)
