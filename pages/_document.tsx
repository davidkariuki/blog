import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-light dark:bg-dark text-dark-l dark:text-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
