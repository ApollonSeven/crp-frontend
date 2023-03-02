import classNames from 'classnames';
import stylesBase from 'shared/ui/Input/Radio/Radio.module.css';
import { Props } from './Radio.typings';
import {mergeStyles} from "shared/utils/mergeStyles";

const Radio = ({ value, onChange, valueName, variant = "Dark", children, styles }: Props) => {
    const css = mergeStyles(stylesBase, styles);

  return (
    <div className={classNames(css.container, css[`radio${variant}`])}>
        <button className={classNames(css.radio, value === valueName && css.checked)} onClick={() => onChange(valueName)}></button>
        <div className={css.label}>
            {children}
        </div>
    </div>
  );
};
export default Radio;
