import { t } from '../i18n'

const COMMAND_KEY_MAP = {
  // ============================================
  // # 应用程序级别命令 (Application Level Commands)
  // ============================================
  'mt.hide': 'commands.mt.hide',
  'mt.hide-others': 'commands.mt.hideOthers',

  // ============================================
  // # 文件操作命令 (File Operations)
  // ============================================
  // 文件创建和打开
  'file.new-window': 'commands.file.newWindow',
  'file.new-tab': 'commands.file.newTab',
  'file.open-file': 'commands.file.openFile',
  'file.open-folder': 'commands.file.openFolder',
  'file.quick-open': 'commands.file.quickOpen',
  'file.import-file': 'commands.file.importFile',

  // 文件保存和导出
  'file.save': 'commands.file.save',
  'file.save-as': 'commands.file.saveAs',
  'file.export-file': 'commands.file.exportFile',
  'file.export-file.pdf': 'commands.file.exportFilePdf',

  // 文件管理
  'file.move-file': 'commands.file.moveFile',
  'file.rename-file': 'commands.file.renameFile',
  'file.toggle-auto-save': 'commands.file.toggleAutoSave',

  // 文件设置
  'file.change-encoding': 'commands.file.changeEncoding',
  'file.line-ending': 'commands.file.changeLineEnding',
  'file.trailing-newline': 'commands.file.trailingNewline',
  'file.preferences': 'commands.file.preferences',

  // 文件操作
  'file.print': 'commands.file.print',
  'file.zoom': 'commands.file.zoom',
  'file.check-update': 'commands.file.checkUpdate',

  // 文件关闭
  'file.close': 'commands.file.closeTab',
  'file.close-tab': 'commands.file.closeTab',
  'file.close-window': 'commands.file.closeWindow',
  'file.quit': 'commands.file.quit',

  // ============================================
  // # 编辑操作命令 (Edit Operations)
  // ============================================
  // 撤销重做
  'edit.undo': 'commands.edit.undo',
  'edit.redo': 'commands.edit.redo',

  // 剪贴板操作
  'edit.cut': 'commands.edit.cut',
  'edit.copy': 'commands.edit.copy',
  'edit.paste': 'commands.edit.paste',
  'edit.copy-as-rich': 'commands.edit.copyAsRich',
  'edit.copy-as-html': 'commands.edit.copyAsHtml',
  'edit.paste-as-plaintext': 'commands.edit.pasteAsPlaintext',

  // 选择和复制
  'edit.select-all': 'commands.edit.selectAll',
  'edit.duplicate': 'commands.edit.duplicate',

  // 段落操作
  'edit.create-paragraph': 'commands.edit.createParagraph',
  'edit.delete-paragraph': 'commands.edit.deleteParagraph',

  // 查找替换
  'edit.find': 'commands.edit.find',
  'edit.find-next': 'commands.edit.findNext',
  'edit.find-previous': 'commands.edit.findPrevious',
  'edit.replace': 'commands.edit.replace',
  'edit.find-in-folder': 'commands.edit.findInFolder',

  // 其他编辑功能
  'edit.screenshot': 'commands.edit.screenshot',

  // ============================================
  // # 段落格式命令 (Paragraph Formatting)
  // ============================================
  // 标题级别
  'paragraph.heading-1': 'commands.paragraph.heading1',
  'paragraph.heading-2': 'commands.paragraph.heading2',
  'paragraph.heading-3': 'commands.paragraph.heading3',
  'paragraph.heading-4': 'commands.paragraph.heading4',
  'paragraph.heading-5': 'commands.paragraph.heading5',
  'paragraph.heading-6': 'commands.paragraph.heading6',
  'paragraph.upgrade-heading': 'commands.paragraph.upgradeHeading',
  'paragraph.degrade-heading': 'commands.paragraph.degradeHeading',

  // 块级元素
  'paragraph.table': 'commands.paragraph.table',
  'paragraph.code-fence': 'commands.paragraph.codeFence',
  'paragraph.quote-block': 'commands.paragraph.quoteBlock',
  'paragraph.math-block': 'commands.paragraph.mathBlock',
  'paragraph.html-block': 'commands.paragraph.htmlBlock',

  // 列表类型
  'paragraph.order-list': 'commands.paragraph.orderList',
  'paragraph.bullet-list': 'commands.paragraph.bulletList',
  'paragraph.task-list': 'commands.paragraph.taskList',
  'paragraph.loose-list-item': 'commands.paragraph.looseListItem',

  // 段落类型
  'paragraph.paragraph': 'commands.paragraph.paragraph',
  'paragraph.reset-paragraph': 'commands.paragraph.resetParagraph',

  // 分隔符和特殊元素
  'paragraph.horizontal-rule': 'commands.paragraph.horizontalRule',
  'paragraph.horizontal-line': 'commands.paragraph.horizontalLine',
  'paragraph.math-formula': 'commands.paragraph.mathFormula',
  'paragraph.front-matter': 'commands.paragraph.frontMatter',

  // ============================================
  // # 文本格式命令 (Text Formatting)
  // ============================================
  // 基础格式
  'format.strong': 'commands.format.strong',
  'format.emphasis': 'commands.format.emphasis',
  'format.underline': 'commands.format.underline',
  'format.strike': 'commands.format.strike',

  // 高级格式
  'format.highlight': 'commands.format.highlight',
  'format.superscript': 'commands.format.superscript',
  'format.subscript': 'commands.format.subscript',

  // 内联元素
  'format.inline-code': 'commands.format.inlineCode',
  'format.inline-math': 'commands.format.inlineMath',

  // 链接和媒体
  'format.hyperlink': 'commands.format.hyperlink',
  'format.image': 'commands.format.image',

  // 格式清除
  'format.clear-format': 'commands.format.clearFormat',

  // ============================================
  // # 窗口管理命令 (Window Management)
  // ============================================
  // 窗口控制
  'window.minimize': 'commands.window.minimize',
  'window.close': 'commands.window.close',
  'window.toggle-always-on-top': 'commands.window.toggleAlwaysOnTop',
  'window.toggle-full-screen': 'commands.window.toggleFullScreen',

  // 窗口缩放
  'window.zoomIn': 'commands.window.zoomIn',
  'window.zoomOut': 'commands.window.zoomOut',

  // 主题设置
  'window.change-theme': 'commands.window.changeTheme',

  // ============================================
  // # 视图控制命令 (View Controls)
  // ============================================
  // 界面切换
  'view.toggle-sidebar': 'commands.view.toggleSidebar',
  'view.toggle-tabbar': 'commands.view.toggleTabbar',
  'view.toggle-toc': 'commands.view.toggleToc',

  // 编辑模式
  'view.toggle-source-code-mode': 'commands.view.toggleSourceCodeMode',
  'view.source-code-mode': 'commands.view.sourceCodeMode',
  'view.toggle-typewriter-mode': 'commands.view.toggleTypewriterMode',
  'view.typewriter-mode': 'commands.view.typewriterMode',
  'view.toggle-focus-mode': 'commands.view.toggleFocusMode',
  'view.focus-mode': 'commands.view.focusMode',

  // 视图功能
  'view.command-palette': 'commands.view.commandPalette',
  'view.actual-size': 'commands.view.actualSize',
  'view.text-direction': 'commands.view.textDirection',

  // 开发者工具
  'view.dev-reload': 'commands.view.devReload',
  'view.dev-toggle-developer-tools': 'commands.view.devToggleDeveloperTools',
  'view.toggle-dev-tools': 'commands.view.toggleDevTools',

  // 菜单项
  'view.reload-images': 'commands.view.reloadImages',

  // ============================================
  // # 标签页管理命令 (Tab Management)
  // ============================================
  // 标签页切换
  'tabs.cycleBackward': 'commands.tabs.cycleBackward',
  'tabs.cycleForward': 'commands.tabs.cycleForward',
  'tabs.switchToLeft': 'commands.tabs.switchToLeft',
  'tabs.switchToRight': 'commands.tabs.switchToRight',

  // 按序号切换标签页
  'tabs.switchToFirst': 'commands.tabs.switchToFirst',
  'tabs.switchToSecond': 'commands.tabs.switchToSecond',
  'tabs.switchToThird': 'commands.tabs.switchToThird',
  'tabs.switchToFourth': 'commands.tabs.switchToFourth',
  'tabs.switchToFifth': 'commands.tabs.switchToFifth',
  'tabs.switchToSixth': 'commands.tabs.switchToSixth',
  'tabs.switchToSeventh': 'commands.tabs.switchToSeventh',
  'tabs.switchToEighth': 'commands.tabs.switchToEighth',
  'tabs.switchToNinth': 'commands.tabs.switchToNinth',
  'tabs.switchToTenth': 'commands.tabs.switchToTenth',

  // ============================================
  // # 文档和帮助命令 (Documentation & Help)
  // ============================================
  'docs.user-guide': 'commands.docs.userGuide',
  'docs.markdown-syntax': 'commands.docs.markdownSyntax',

  // ============================================
  // # 拼写检查命令 (Spell Checker)
  // ============================================
  'spellchecker.switch-language': 'commands.spellchecker.switchLanguage'
}

/**
 * 根据命令ID获取对应的国际化描述文本
 * @param {string} id - 命令ID，格式如 'file.save', 'edit.copy' 等
 * @returns {string} 返回国际化后的命令描述文本，如果找不到对应描述则返回原ID用于调试
 */
export default (id) => {
  // 每次调用都重新获取命令描述，以支持动态语言切换
  const description = t(COMMAND_KEY_MAP[id])

  // 如果找不到对应的描述，返回原始ID用于调试
  return description || id
}
