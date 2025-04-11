import { type JSONContent } from "novel";

export const defaultEditorContent: JSONContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Welcome to your Scratchpad!" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a simple, persistent WYSIWYG editor acting as a scratchpad. ",
        },
        {
          type: "text",
          marks: [{ type: "bold" }],
          text: "Everything you type is saved to local storage",
        },
        {
          type: "text",
          text: " automatically. Feel free to experiment, take notes, or draft ideas.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You can use standard formatting options and include code snippets, like this one:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: { language: "javascript" },
      content: [
        {
          type: "text",
          text: "// Example JavaScript snippet\nfunction greet(name) {\n  console.log(`Hello, ${name}!`);\n}\
\ngreet('Scratchpad User');",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Try out different features and make this space your own.",
        },
      ],
    },
  ],
};
