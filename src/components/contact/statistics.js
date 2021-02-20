import React from 'react';
import { Progress } from 'reactstrap';

const Statistics = (props) => {
  return (
    <div>
      <div className="text-center">0% Недоволни туристи</div>
      <Progress />
      <div className="text-center">25% Трафик</div>
      <Progress value="25" />
      <div className="text-center">70% Хубава храна</div>
      <Progress value={50} />
      <div className="text-center">95% Прекрасни хотели и къщи за гости</div>
      <Progress value={75} />
      <div className="text-center">100% Щастливи туристи</div>
      <Progress value="100" />
    </div>
  );
};

export default Statistics;