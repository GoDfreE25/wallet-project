import { TooltipProps } from 'recharts';
import s from '../custom-tooltip/custom-tooltip.module.scss';

export const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className={s.tooltip_container}>
        <p>{label}</p>
        <p>{`${payload[0].value} $`}</p>
      </div>
    );
  }

  return null;
};
