import React from 'react';

const StackedBarGraph = ({ width, height, children, colors }) => {
  const viewBox = `0 0 ${width} ${height}`;
  const add = (a, b) => a + b;
  const values = children.map(c => c.props.value);
  const sum = values.reduce(add, 0);
  const widths = values.map(c => width / sum * c);
  const startingPoints = values.map((value, index) => {
    return widths.slice(0, index).reduce(add, 0);
  });
  const rects = children.map((datapoint, index) => (
  <rect
    x={startingPoints[index]}
    y={0}
    width={widths[index]}
    height={height}
    key={index}
    fill={colors[index % colors.length]}
  />
));

  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g>
        {rects}
      </g>
    </svg>
  );
};

StackedBarGraph.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
};

StackedBarGraph.defaultProps = {
  width: 600,
  height: 40,
  colors: ['#D0011B', '#50E3C2', '#F8E71C', '#4A90E2']
};

export default StackedBarGraph;
