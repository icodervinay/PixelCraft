import * as React from 'react';
declare module 'framer-motion' {
  interface MotionProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    // Add other missing props if needed, e.g.,
    // onClick?: React.MouseEventHandler<Element>;
  }
}
