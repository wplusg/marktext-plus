import bus from '../bus'
import notice from '@/services/notification'
import { delay } from '@/util'
import { SpellChecker } from '@/spellchecker'
import { getLanguageName } from '@/spellchecker/languageMap'
import getCommandDescriptionById from './descriptions'
import { t } from '../i18n'

// Command to switch the spellchecker language
class SpellcheckerLanguageCommand {
  constructor(spellchecker) {
    this.id = 'spellchecker.switch-language'
    this.description = getCommandDescriptionById('spellchecker.switch-language')
    this.placeholder = t('commandPalette.placeholders.selectLanguage')
    this.shortcut = null

    this.spellchecker = spellchecker

    this.subcommands = []
    this.subcommandSelectedIndex = -1
  }

  run = async () => {
    const langs = await SpellChecker.getAvailableDictionaries()
    // 只显示英语拼写检查选项
    const englishLangs = langs.filter((lang) => lang.startsWith('en'))
    // 如果没有英语选项，提供默认的 en-US
    const finalLangs = englishLangs.length > 0 ? englishLangs : ['en-US']

    this.subcommands = finalLangs.map((lang) => {
      return {
        id: `spellchecker.switch-language-id-${lang}`,
        description: getLanguageName(lang),
        value: lang
      }
    })
    const currentLanguage = this.spellchecker.lang
    this.subcommandSelectedIndex = this.subcommands.findIndex(
      (cmd) => cmd.value === currentLanguage
    )
  }

  execute = async () => {
    // Timeout to hide the command palette and then show again to prevent issues.
    await delay(100)
    bus.emit('show-command-palette', this)
  }

  executeSubcommand = async (id) => {
    const command = this.subcommands.find((cmd) => cmd.id === id)
    if (this.spellchecker.isEnabled) {
      // 强制使用英语作为拼写检查语言
      bus.emit('switch-spellchecker-language', 'en-US')
    } else {
      notice.notify({
        title: 'Spelling',
        type: 'warning',
        message: 'Cannot change language because spellchecker is disabled.'
      })
    }
  }

  unload = () => {
    this.subcommands = []
  }
}

export default SpellcheckerLanguageCommand
