import palette from '@/constants/palette'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const NotificationIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <Path
      fill={palette.primary}
      d="M15.617 9.533a1 1 0 0 0-.049-2l.05 2ZM8.41 16.257h1v-.022l-1 .022Zm0 3.09.052.998a1 1 0 0 0 .948-.998h-1Zm0 4.12-.052.998.052.002v-1Zm4.15 1a1 1 0 1 0 0-2v2Zm2.034-15.934a1 1 0 1 0 2 0h-2Zm2-3.2a1 1 0 0 0-2 0h2Zm-.976 2.2a1 1 0 0 0-.049 2l.05-2Zm7.16 8.724-1-.022v.022h1Zm0 3.09h-1a1 1 0 0 0 .947.998l.052-.998Zm0 4.12v1c.017 0 .034 0 .052-.002l-.053-.998Zm-4.151-1a1 1 0 1 0 0 2v-2Zm-5.068 1.003a1 1 0 1 0-2-.007l2 .007Zm-.112 2.263.73-.683-.002-.002-.728.685Zm4.29 0-.728-.685-.002.002.73.683Zm1.888-2.27a1 1 0 0 0-2 .007l2-.007Zm-7.067-.996a1 1 0 1 0 0 2v-2Zm6.069 2a1 1 0 1 0 0-2v2ZM15.568 7.534c-4.637.114-8.264 4.052-8.159 8.746l2-.045c-.082-3.64 2.72-6.616 6.208-6.702l-.049-2Zm-8.16 8.723v3.09h2v-3.09h-2Zm.949 2.091c-1.623.085-2.857 1.45-2.857 3.059h2c0-.589.445-1.035.961-1.062l-.104-1.997ZM5.5 21.407c0 1.608 1.234 2.974 2.857 3.058l.104-1.997c-.516-.027-.961-.473-.961-1.061h-2Zm2.909 3.06h4.15v-2H8.41v2Zm8.184-15.934v-3.2h-2v3.2h2Zm-1.025 1c3.488.086 6.29 3.063 6.209 6.702l2 .045c.105-4.694-3.522-8.632-8.16-8.746l-.049 2Zm6.208 6.724v3.09h2v-3.09h-2Zm.948 4.088c.517.027.961.473.961 1.062h2c0-1.609-1.234-2.974-2.856-3.059l-.105 1.997Zm.961 1.062c0 .588-.444 1.034-.96 1.061l.104 1.997c1.622-.084 2.856-1.45 2.856-3.058h-2Zm-.909 1.06h-4.15v2h4.15v-2Zm-11.217.996a4.291 4.291 0 0 0 1.16 2.956l1.456-1.371a2.292 2.292 0 0 1-.617-1.578l-2-.007Zm1.158 2.954a3.939 3.939 0 0 0 2.874 1.254v-2c-.528 0-1.04-.221-1.415-.621l-1.46 1.367Zm2.874 1.254a3.94 3.94 0 0 0 2.875-1.254l-1.46-1.367c-.374.4-.886.62-1.415.62v2Zm2.874-1.252a4.291 4.291 0 0 0 1.16-2.956l-2 .007a2.29 2.29 0 0 1-.617 1.578l1.457 1.37Zm-5.908-1.952h6.069v-2h-6.069v2Z"
    />
  </Svg>
)
export default NotificationIcon
