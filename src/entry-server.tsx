import App from "./App";
import { renderToStringAsync, HydrationScript } from "solid-js/web";

export async function render(url) {
  return await renderToStringAsync(() => (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="shortcut icon"
          type="image/ico"
          href="/src/assets/favicon.ico"
        />
        <title>Solid App</title>
        <HydrationScript />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <App url={url} />
        </div>
        <script src="/src/entry-client.tsx" type="module"></script>
      </body>
    </html>
  ));
}
