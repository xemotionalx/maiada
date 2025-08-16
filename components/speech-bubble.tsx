export default function AsciiSpeechBubble() {
  return (
    <pre
      aria-label="Speech bubble"
      style={{
        whiteSpace: "pre",
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        lineHeight: 1.1,
        fontSize: 14,
        margin: 0,
      }}
    >
      {String.raw`+------------------------------------+
| hello world!                       |
|                                    |
| i love you guys for making my      |
|                                    |
| website dreams come true!          |
+------------------------------------+
                                     `}
    </pre>
  );
}
