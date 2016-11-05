import React from 'react';

const ProgressBar = ({ width, height, percentage }) => {
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#D0011B" x={0} y={0} width={width * (percentage / 100)} height={height} />
        <rect fill="#50E3C2" x={width * (percentage / 100)} y={0} width={width * (1 / (percentage / 100))} height={height} />
      </g>
    </svg>
  );
};

ProgressBar.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  percentage: React.PropTypes.number.isRequired
}

ProgressBar.defaultProps = {
  width: 600,
  height: 40,
  percentage: 50
}

export default ProgressBar;
