import AppLayout from "src/components/layout"
import 'src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
