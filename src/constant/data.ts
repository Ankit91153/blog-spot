// data/samplePost.ts
export const samplePost = {
  id: "post-001",
  title: "How to Build a Tiny Static Site Generator",
  author: {
    name: "Jane Doe",
    avatar:
      "https://ui-avatars.com/api/?name=Jane+Doe&background=0D8ABC&color=fff&rounded=true",
  },
  date: "2025-08-05",
  thumbnail: "https://1200/600?random=42", // image host must be whitelisted in next.config.js
  tags: ["static-site", "javascript", "build-tools"],
  // content is HTML produced by a rich text / HTML editor (heading, paragraphs, code, lists, images)
  contentHtml: `
    <h1>Intro</h1>
    <p>This guide shows how to create a tiny static site generator using <strong>Node.js</strong>.</p>

    <h2>Why build one?</h2>
    <p>It's a great learning exercise — you'll understand routing, templating and file I/O.</p>

    <pre><code class="language-js">
    // build.js
    import fs from "fs";
    import path from "path";

    const content = fs.readFileSync(path.join(__dirname, "posts", "1.md"), "utf8");
    // render to HTML...
    </code></pre>

    <h3>Steps</h3>
    <ol>
      <li>Create markdown files</li>
      <li>Parse them to HTML</li>
      <li>Write HTML files to <code>dist/</code></li>
    </ol>

    <blockquote>Tip: Keep templates tiny — one template per page type.</blockquote>

    <p>Example inline code: <code>npx build</code></p>

    <p>And a small image:</p>
    <img src="https://picsum.photos/400/200" alt="random"/>

    <h4>Conclusion</h4>
    <p>That's it — now go build something!</p>
  `,
};

export const siteMetadata = {
  thumbnail: "https://picsum.photos/1200/600?random=42",
  content: `
    <h1>Intro</h1>
    <p>This guide shows how to create a tiny static site generator using <strong>Node.js</strong>.</p>

    <h2>Why build one?</h2>
    <p>It's a great learning exercise — you'll understand routing, templating and file I/O.</p>

    <pre><code class="language-js">
    // build.js
    import fs from "fs";
    import path from "path";

    const content = fs.readFileSync(path.join(__dirname, "posts", "1.md"), "utf8");
    // render to HTML...
    </code></pre>

    <h3>Steps</h3>
    <ol>
      <li>Create markdown files</li>
      <li>Parse them to HTML</li>
      <li>Write HTML files to <code>dist/</code></li>
    </ol>

    <blockquote>Tip: Keep templates tiny — one template per page type.</blockquote>

    <p>Example inline code: <code>npx build</code></p>

    <p>And a small image:</p>
    <img src="https://picsum.photos/400/200" alt="random"/>

    <h4>Conclusion</h4>
    <p>That's it — now go build something!</p>
  `,
  tags: ["static-site", "javascript", "build-tools"],
};

export const AVATAR_URL="https://ui-avatars.com/api/"