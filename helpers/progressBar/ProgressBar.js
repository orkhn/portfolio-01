import { CircularProgressbar } from 'react-circular-progressbar';

import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';

const ProgressBar = ({ valueStart, valueEnd, pathColor, title }) => {
  return (
    <AnimatedProgressProvider
      valueStart={valueStart}
      valueEnd={valueEnd}
      duration={2}
      easingFunction={easeQuadInOut}
      title={title}
    >
      {(value) => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            value={value}
            text={`${roundedValue}%`}
            styles={{
              // Customize the root svg element
              root: {
                viewBox: '0 0 50 50',
                width: '145',
                height: '145',
              },

              // Customize the path
              path: {
                // Path color
                stroke: `rgba(${pathColor})`,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',

                // Customize transition animation
                transition: 'stroke-dashoffset .5s ease-out 0s',
              },

              // Customize the circle behind the path
              trail: {
                // Trail color
                stroke: '#d6d6d6',

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',

                // Rotate the trail
                transformOrigin: 'center center',
              },
              // Customize the text
              text: {
                textAnchor: 'middle',
                dominantBaseline: 'middle',

                // Text color
                fill: '#232320',

                // Text size
                fontSize: '24px',
              },
            }}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default ProgressBar;
