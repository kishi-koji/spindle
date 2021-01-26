import * as React from 'react';

function SvgThumbsupFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M3 17.84v-6.75c0-1.1.9-2 2-2s2 .9 2 2v6.75a2 2 0 11-4 0zm14.92-9h-2.79l1.46-1.97c.68-.92.53-2.21-.35-2.94-.88-.74-2.18-.66-2.96.18l-3.75 4c-.65.69-1 1.57-1.03 2.45-.003.096 0 .19 0 .28v6c0 1.66 1.34 3 3 3h5.33a3.51 3.51 0 003.38-2.58l1.09-4c.6-2.22-1.07-4.42-3.38-4.42z" />
    </svg>
  );
}

export default SvgThumbsupFill;
