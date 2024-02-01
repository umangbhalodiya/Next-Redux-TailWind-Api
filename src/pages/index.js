import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import Header from "./Header";
export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
      </PersistGate>
    </Provider>
  );
}
