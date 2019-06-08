import React from 'react';
import './Icon.css';

import { ReactComponent as PieChart } from './pie-chart.svg';
import { ReactComponent as BarChart } from './bar-chart.svg';
import { ReactComponent as Code } from './code.svg';

const IconList = {
  PieChart: PieChart,
  BarChart: BarChart,
  Code: Code
};

const Icon = props => {
  const { className, icon } = props;
  const Icon = IconList[icon];

  let classNames = ['Icon'];

  if (className) classNames.push(className);

  return <Icon className={classNames.join(' ')} />;
};

export default Icon;
