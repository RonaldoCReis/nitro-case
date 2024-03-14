import { PropsWithChildren } from 'react';

const Paper = ({ children }: PropsWithChildren) => {
  return <div className="bg-gray-100 py-8 px-12 rounded-lg">{children}</div>;
};

export default Paper;
