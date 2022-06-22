import { MantineProvider } from '@mantine/core'

function Theme({ children }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      {children}
    </MantineProvider>
  )
}

export default Theme
