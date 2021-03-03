import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconFAQ: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.958 9.334l-.006-.05v-.005l-.022-.188-.015-.13-.005-.039-.01.002a7.482 7.482 0 00-1.856-3.735 9.448 9.448 0 00-3.69-2.493A10.947 10.947 0 0012.483 2 10.64 10.64 0 007.4 3.263a7.94 7.94 0 00-4.392 7.46 7.808 7.808 0 001.68 4.187 9.076 9.076 0 003.56 2.675c.854.335 1.742.58 2.648.732a.49.49 0 01.39.616 2.982 2.982 0 00-.1 1.22.893.893 0 00.897.847 3.278 3.278 0 001.49-.59l.052-.03c.926-.558 1.799-1.188 2.455-1.674a21.514 21.514 0 004.286-3.827 7.7 7.7 0 001.592-5.545zm-9.413 6.69a1.001 1.001 0 01-.708-1.708 1.001 1.001 0 011.416 1.414 1.002 1.002 0 01-.708.293zm1.552-4.53a1.245 1.245 0 00-.602 1.045.998.998 0 01-1.001 1 1.002 1.002 0 01-1.002-.998 3.232 3.232 0 011.531-2.736.992.992 0 00-.756-1.804.987.987 0 00-.765 1.017 1 1 0 01-1.67.784 1 1 0 01-.33-.688c-.012-.268.01-.536.066-.798a2.961 2.961 0 012.287-2.272 2.998 2.998 0 013.407 1.786 2.99 2.99 0 01-1.165 3.664z"
      fill={fill}
    />
  </svg>
);

IconFAQ.defaultProps = {
  ...iconDefaultProps,
};

export default IconFAQ;
