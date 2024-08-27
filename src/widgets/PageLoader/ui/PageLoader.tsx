import { classNames } from "shared/lib/classNames/classNames";
import * as styles from "./PageLoader.module.scss";
import { Loader } from "shared/ui";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [])}>
      <Loader />
    </div>
  );
};
