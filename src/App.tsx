import React, { useState } from "react";
import AgoraUIKit, { PropsInterface } from "agora-react-uikit";

const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true);
  const props: PropsInterface = {
    rtcProps: {
      appId: "b081d208169b49b1bab93211a13ab06d",
      channel: "main",
      token:
        "006b081d208169b49b1bab93211a13ab06dIABtupIO3nm9XOYQvmBgChfJz2qyDxOscFLdh7i3V0tudGTNKL8AAAAAEACkKU4ChrbXYgEAAQCFttdi", // pass in channel token if the app is in secure mode
    },
    callbacks: {
      EndCall: () => setVideocall(false),
    },
  };
  return (
    <div style={styles.container}>
      {videocall ? (
        <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} />
      ) : null}
    </div>
  );
};

const styles = {
  container: { width: "100vw", height: "100vh", display: "flex", flex: 1 },
};

export default App;
