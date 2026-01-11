// src/components/LexicalEditor.jsx
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { $getRoot, $getSelection } from 'lexical';

// Theme for styling
const theme = {
  paragraph: 'lexical-paragraph',
  heading: {
    h1: 'lexical-h1',
    h2: 'lexical-h2',
  },
  text: {
    bold: 'lexical-bold',
    italic: 'lexical-italic',
    underline: 'lexical-underline',
  }
};

// Error handling
function onError(error) {
  console.error(error);
}

// Toolbar component
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const formatBold = () => {
    editor.dispatchCommand('FORMAT_TEXT_COMMAND', 'bold');
  };

  const formatItalic = () => {
    editor.dispatchCommand('FORMAT_TEXT_COMMAND', 'italic');
  };

  const formatUnderline = () => {
    editor.dispatchCommand('FORMAT_TEXT_COMMAND', 'underline');
  };

  return (
    <div style={{ 
      padding: '10px', 
      borderBottom: '1px solid #ccc',
      display: 'flex',
      gap: '10px'
    }}>
      <button onClick={formatBold}>Bold</button>
      <button onClick={formatItalic}>Italic</button>
      <button onClick={formatUnderline}>Underline</button>
    </div>
  );
}

export default function LexicalEditor() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      LinkNode
    ]
  };

  const onChange = (editorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const selection = $getSelection();
      console.log('Content:', root.getTextContent());
    });
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '4px',
      maxWidth: '800px',
      margin: '20px auto'
    }}>
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <div style={{ position: 'relative', background: 'white' }}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable 
                style={{ 
                  minHeight: '300px', 
                  padding: '15px',
                  outline: 'none'
                }} 
              />
            }
            placeholder={
              <div style={{ 
                position: 'absolute', 
                top: '15px', 
                left: '15px',
                color: '#999',
                pointerEvents: 'none'
              }}>
                Enter some text...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={onChange} />
        </div>
      </LexicalComposer>
    </div>
  );
}