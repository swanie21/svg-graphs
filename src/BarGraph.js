import React from 'react';

const BarGraph = ({ width, height, colors, children }) => {
  const barWidth = width / children.length;
  const tallest = Math.max(...children.map(d => d.props.value));

  const rects = children.map((dataPoint, index) => {
    const barHeight = height / tallest * dataPoint.props.value;
    return (
      <rect
        x={barWidth * index}
        y={height - barHeight}
        width={barWidth}
        height={barHeight}
        key={index}
        fill={colors[index % colors.length]}
      />
    );
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        {rects}
      </g>
    </svg>
  );
};

BarGraph.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
};

BarGraph.defaultProps = {
  width: 600,
  height: 40,
  colors: ['#D0011B', '#50E3C2', '#F8E71C', '#4A90E2']
};

export default BarGraph;
