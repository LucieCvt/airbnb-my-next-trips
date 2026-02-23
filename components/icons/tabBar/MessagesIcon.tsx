import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const MessagesIcon = (props: SvgProps) => (
  <Svg width={20} height={18} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M18 0H1.5A1.5 1.5 0 0 0 0 1.5v12A1.5 1.5 0 0 0 1.5 15h5.665l1.283 2.244a1.5 1.5 0 0 0 2.604 0L12.335 15H18a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 18 0Zm0 13.5h-6.1a.75.75 0 0 0-.657.375l-1.5 2.625-1.5-2.625a.75.75 0 0 0-.656-.375H1.5v-12H18v12Z"
    />
  </Svg>
);
export default MessagesIcon;
