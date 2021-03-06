import { MarkdownIt as Mdr, Options as MdrOptions } from 'markdown-it';
import highlightjs from 'highlight.js/lib/highlight';

// Markdown Render options by default.
const defaultOptions: MdrOptions = {
    html:         false,        // Enable HTML tags in source. This could be unsafe if enabled (XSS).
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      true,         // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer:  true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */
};

// Markdown Render code highlighter.
const codeHighlighter = (mdr: Mdr, str, lang) => {
  const highlighter = () => {
    if (lang && highlightjs.getLanguage(lang)) {
      try {
        return highlightjs.highlight(lang, str, true).value;
      } catch (__) {}
    }
    return mdr.utils.escapeHtml(str);
  };
  return '<pre class="hljs"><code>' + highlighter() + '</code></pre>';
};

export { MdrOptions, defaultOptions, codeHighlighter }
