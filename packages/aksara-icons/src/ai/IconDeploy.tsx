import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDeploy: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4v2.73c-2.045.161-4.54.27-7.5.27A95.57 95.57 0 014 6.73V4c0-.552 3.358-1 7.5-1 4.142 0 7.5.448 7.5 1zm-8.816 10.994c-.12.493-.182.999-.184 1.506 0 .175.013.348.027.52.052.677.211 1.342.471 1.97C6.831 18.925 4 18.507 4 18v-3.238c1.98.145 4.11.213 6.184.232zM16.5 10c.859 0 1.708.17 2.5.501V8.762c-2.401.175-5.028.238-7.5.238-2.472 0-5.099-.063-7.5-.238v3.967c1.935.153 4.28.257 7.034.268A6.496 6.496 0 0116.5 10zM14 12.758a4.5 4.5 0 115 7.483 4.5 4.5 0 01-5-7.483zm4.684 4.662a1 1 0 00.324-1.63l-1.8-1.798a.942.942 0 00-.134-.089.983.983 0 00-.19-.126 1 1 0 00-.383-.077H16.5a.155.155 0 00-.044.008.189.189 0 01-.037.008.907.907 0 00-.63.282l-1.796 1.795a1 1 0 001.414 1.415l.093-.093V18.3a1 1 0 002 0v-1.19l.094.094a.998.998 0 001.09.216z"
      fill={fill}
    />
  </svg>
);

IconDeploy.defaultProps = {
  ...iconDefaultProps,
};

export default IconDeploy;
