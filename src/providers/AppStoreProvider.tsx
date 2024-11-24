"use client";

import {appStore, persister} from "@/store/appStore";

import {Provider} from "react-redux";

import {PersistGate} from "redux-persist/integration/react";

const AppStoreProvider = ({children}: Required<React.PropsWithChildren>) => {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persister}>
        <div>{children}</div>
      </PersistGate>
    </Provider>
  );
};

export default AppStoreProvider;
