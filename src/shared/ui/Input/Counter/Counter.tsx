import { Props } from './Counter.typings';
import stylesBase from 'shared/ui/Input/Counter/Counter.module.css';
import {mergeStyles} from "shared/utils/mergeStyles";
import React from "react";

const Counter: React.FC<Props> = ({ value, onChange, children, styles }) => {
    const css = mergeStyles(stylesBase, styles);

  return (
    <div className={css.counter}>
      <div onClick={() => onChange?.(value - 1)} className={css.btn}>
        -
      </div>
      <div className={css.value}>{value}</div>
      <div onClick={() => onChange?.(value + 1)} className={css.btn}>
        +
      </div>
    </div>
  );
};

export default Counter;
