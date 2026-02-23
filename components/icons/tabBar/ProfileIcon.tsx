import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ProfileIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M9.75 0a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 9.75 0ZM4.695 16.266a6 6 0 0 1 10.11 0 8.234 8.234 0 0 1-10.11 0ZM6.75 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm9.165 6.226a7.469 7.469 0 0 0-3.38-2.695 4.5 4.5 0 1 0-5.57 0 7.469 7.469 0 0 0-3.38 2.695 8.25 8.25 0 1 1 12.33 0Z"
    />
  </Svg>
);
export default ProfileIcon;
