import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/provider/ThemeProvider'
import MoonIcon from 'assets/icons/moon.svg'
import SunIcon from 'assets/icons/sun.svg'
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext'
import { Button, ThemeButton } from 'shared/ui'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.LIGHT ? (
        <MoonIcon className={styles.moonIcon} width="40px" height="40px" />
      ) : (
        <SunIcon width="40px" height="40px" />
      )}
    </Button>
  )
}
