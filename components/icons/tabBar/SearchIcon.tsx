import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Search = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="m17.586 16.742-3.732-3.731a6.568 6.568 0 1 0-.843.843l3.731 3.732a.597.597 0 1 0 .844-.844ZM3.449 8.815a5.367 5.367 0 1 1 10.733 0 5.367 5.367 0 0 1-10.733 0Z"
    />
  </Svg>
);
export default Search;
