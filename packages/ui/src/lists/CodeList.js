import Editor from 'https://pkg.do/@monaco-editor/react'

export const CodeList = ({ code }) => (
  <Editor
     height="90vh"
     defaultLanguage="javascript"
     defaultValue={code}
   />
)