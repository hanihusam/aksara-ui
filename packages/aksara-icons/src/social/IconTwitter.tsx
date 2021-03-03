import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconTwitter: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 6.65738C20.3306 6.93846 19.6174 7.12477 18.8737 7.21523C19.6388 6.778 20.2226 6.09092 20.4971 5.26277C19.7839 5.66985 18.9964 5.95738 18.1571 6.11785C17.4799 5.42754 16.5146 5 15.4616 5C13.4186 5 11.7739 6.58738 11.7739 8.53339C11.7739 8.81339 11.7986 9.08262 11.8594 9.33892C8.7915 9.19569 6.07687 7.78815 4.25325 5.644C3.93487 6.17277 3.74813 6.778 3.74813 7.42954C3.74813 8.65292 4.40625 9.73738 5.38725 10.3652C4.79437 10.3545 4.21275 10.1897 3.72 9.93015C3.72 9.94092 3.72 9.95492 3.72 9.96892C3.72 11.6855 4.99912 13.1114 6.6765 13.4398C6.37612 13.5185 6.04875 13.5562 5.709 13.5562C5.47275 13.5562 5.23425 13.5432 5.01038 13.4958C5.4885 14.8948 6.84525 15.9232 8.4585 15.9566C7.203 16.8968 5.60888 17.4632 3.88313 17.4632C3.5805 17.4632 3.29025 17.4503 3 17.4148C4.63462 18.4238 6.57188 19 8.661 19C15.4515 19 19.164 13.6154 19.164 8.948C19.164 8.79185 19.1584 8.64108 19.1505 8.49138C19.8829 7.99385 20.4982 7.37246 21 6.65738Z"
      fill={fill}
    />
  </svg>
);

IconTwitter.defaultProps = {
  ...iconDefaultProps,
};

export default IconTwitter;
