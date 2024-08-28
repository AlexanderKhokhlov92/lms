import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Navbar.module.scss'

import { AppLink, AppLinkTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ul className={styles.linkList}>
        <li className={styles.mainLink}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
            {t('Главная')}
          </AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
            {t('О нас')}
          </AppLink>
        </li>
      </ul>
    </div>
  )
}
