import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../store";
import { webAppTheme } from "../styles/Theme";
import Loading from "../applicationUI/structure/Loading";

function TablesApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={webAppTheme}>
        <PersistGate persistor={store.__persistor} loading={<Loading />}>
          <Component {...pageProps} />
        </PersistGate>
      </ChakraProvider>
    </Provider>
  );
}
export default TablesApp;
