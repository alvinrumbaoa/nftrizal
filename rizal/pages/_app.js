import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import "regenerator-runtime/runtime";


function MyApp({ Component, pageProps }) {

  const supportedChainIds = [80001, 4];

  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
         <ChakraProvider>
               <Layout>
                <Component {...pageProps} />
              </Layout>
          </ChakraProvider>
    </ThirdwebWeb3Provider>
   
  )
}

export default MyApp
