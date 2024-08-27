import { classNames } from "shared/lib/classNames/classNames";
import * as styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(styles.ldsRipple, {}, [className])}>
      <div></div>
      <div></div>
    </div>
  );
};
