import palette from '@/constants/palette'
import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const PauseIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <Path
      stroke={palette.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.44 8.218a3.84 3.84 0 1 0-7.68 0v15.36a3.84 3.84 0 1 0 7.68 0V8.218ZM26.24 8.218a3.84 3.84 0 1 0-7.68 0v15.36a3.84 3.84 0 1 0 7.68 0V8.218Z"
    />
  </Svg>
)
export default PauseIcon
