import Svg, { SvgProps, Path } from 'react-native-svg'
import palette from '@/constants/palette'

const SettingIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <Path stroke={palette.primary} strokeWidth={2} d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <Path
      stroke={palette.primary}
      strokeWidth={2}
      d="M18.354 2.87c-.49-.203-1.111-.203-2.354-.203-1.242 0-1.864 0-2.354.203-.653.27-1.172.79-1.443 1.443-.124.298-.172.645-.19 1.151-.029.744-.41 1.432-1.054 1.804-.645.372-1.432.358-2.09.01-.447-.236-.772-.368-1.092-.41a2.667 2.667 0 0 0-1.971.528c-.421.323-.732.861-1.353 1.937s-.932 1.614-1.001 2.14c-.092.701.098 1.41.528 1.972.197.256.473.471.902.74.63.396 1.035 1.07 1.035 1.815 0 .744-.405 1.419-1.035 1.814-.43.27-.705.485-.902.741-.43.561-.62 1.27-.528 1.972.07.525.38 1.064 1.001 2.14.621 1.076.932 1.614 1.353 1.937.56.43 1.27.62 1.971.528.32-.042.645-.174 1.092-.41.658-.348 1.445-.362 2.09.01.644.372 1.025 1.06 1.053 1.804.02.506.067.853.191 1.151.27.653.79 1.173 1.443 1.443.49.203 1.111.203 2.354.203 1.242 0 1.864 0 2.354-.203a2.667 2.667 0 0 0 1.443-1.443c.123-.298.172-.645.19-1.151.029-.744.41-1.432 1.054-1.804.645-.372 1.431-.358 2.09-.01.447.236.772.368 1.092.41a2.666 2.666 0 0 0 1.971-.528c.42-.323.732-.861 1.353-1.938.621-1.076.932-1.614 1.001-2.14a2.666 2.666 0 0 0-.528-1.97c-.197-.257-.473-.472-.902-.742-.63-.395-1.035-1.07-1.035-1.814s.405-1.419 1.035-1.814c.43-.27.705-.485.902-.741.43-.561.62-1.27.528-1.972-.07-.526-.38-1.064-1.001-2.14-.621-1.076-.932-1.614-1.353-1.937a2.667 2.667 0 0 0-1.971-.528c-.32.042-.645.174-1.092.41-.658.348-1.445.362-2.09-.01-.644-.372-1.025-1.06-1.053-1.804-.02-.506-.067-.853-.191-1.151a2.666 2.666 0 0 0-1.443-1.443Z"
    />
  </Svg>
)
export default SettingIcon
