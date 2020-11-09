import { useEffect, useState } from 'react';

type propsType = {
  equalWidth: number;
};

export function getWindowWidth(equalWidth: number): boolean {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const equalResult: boolean = windowWidth >= equalWidth;

  return equalResult;
}
