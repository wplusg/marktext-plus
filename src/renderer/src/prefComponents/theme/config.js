import { t } from '../../i18n'

export const themes = [
  {
    name: 'light'
  },
  {
    name: 'dark'
  },
  {
    name: 'graphite'
  },
  {
    name: 'material-dark'
  },
  {
    name: 'ulysses'
  },
  {
    name: 'one-dark'
  }
]

export const getAutoSwitchThemeOptions = () => [
  {
    label: t('preferences.theme.autoSwitchOptions.startup'),
    value: 0
  },
  /* {
  label: 'Only at runtime',
  value: 1
}, */ {
    label: t('preferences.theme.autoSwitchOptions.never'),
    value: 2
  }
]
