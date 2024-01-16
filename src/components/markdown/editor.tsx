import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

export default function MarkDownEditor({
  onChange,
  value,
  ...props
}: {
  onChange: (e: string | undefined) => void;
  value: string | undefined;
}) {
  return (
    <MDEditor
      value={value}
      height={350}
      {...props}
      onChange={onChange}
      previewOptions={{
        rehypePlugins: [rehypeSanitize],
      }}
    />
  );
}
