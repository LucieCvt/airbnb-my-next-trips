import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const HeartIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M13.795 2.716c-1.568 0-2.94.674-3.795 1.813-.855-1.14-2.227-1.813-3.795-1.813A4.71 4.71 0 0 0 1.5 7.421c0 5.313 7.877 9.613 8.212 9.79a.607.607 0 0 0 .576 0c.335-.177 8.212-4.477 8.212-9.79a4.71 4.71 0 0 0-4.705-4.705ZM10 15.982c-1.386-.807-7.286-4.486-7.286-8.56A3.496 3.496 0 0 1 6.205 3.93c1.476 0 2.716.787 3.233 2.05a.607.607 0 0 0 1.124 0c.517-1.266 1.757-2.05 3.233-2.05a3.496 3.496 0 0 1 3.49 3.491c0 4.069-5.9 7.753-7.285 8.561Z"
    />
  </Svg>
);

export default HeartIcon;
