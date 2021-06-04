import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconNeutral1: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.018 7.79V20a.999.999 0 001.002 1 1.003 1.003 0 001.002-1V7.79a2.503 2.503 0 001.45-2.802 2.5 2.5 0 00-2.452-1.99 2.508 2.508 0 00-2.452 1.99 2.496 2.496 0 001.45 2.802z"
      fill={fill}
    />
    <path
      d="M6.509 10c.133.01.267.01.4 0l1.103 1.35V20a.999.999 0 001.002 1 1.003 1.003 0 001.002-1v-9a.999.999 0 00-.22-.62L8.602 8.87a2.496 2.496 0 00-1.136-3.68 2.51 2.51 0 00-2.73.542A2.498 2.498 0 006.51 10z"
      fill={fill}
    />
    <path
      d="M3.743 15.87l.762 2.29V20a.999.999 0 001.002 1 1.003 1.003 0 001.002-1v-2a1.187 1.187 0 000-.32l-.681-2a2.501 2.501 0 001.112-2.949 2.5 2.5 0 00-2.663-1.693A2.507 2.507 0 002.07 13.29a2.496 2.496 0 001.755 2.62l-.08-.04zM19.535 11a2.499 2.499 0 00-2.42 1.833 2.485 2.485 0 001.147 2.807l-.681 2a1.19 1.19 0 00-.05.32v2a.999.999 0 001.002 1 1.003 1.003 0 001.002-1v-1.8l.761-2.29a2.495 2.495 0 001.733-2.764A2.489 2.489 0 0019.535 11z"
      fill={fill}
    />
    <path
      d="M14.22 10.38A1 1 0 0014 11v9a1 1 0 002 0v-8.65L17.1 10c.133.01.267.01.4 0a2.5 2.5 0 10-2.09-1.13l-1.19 1.51z"
      fill={fill}
    />
  </svg>
);

IconNeutral1.defaultProps = {
  ...iconDefaultProps,
};

export default IconNeutral1;