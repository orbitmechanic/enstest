import ENSAddress from "@ensdomains/react-ens-address";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

function App(props) {
  const { web3, enableWeb3, isWeb3Enabled } = useMoralis();

  useEffect(() => {
    if (!isWeb3Enabled) {
      enableWeb3();
    }
  }, [isWeb3Enabled, enableWeb3]);

  return (
    <div className="App">
      {isWeb3Enabled && (
        <ENSAddress
          provider={web3.givenProvider || web3.currentProvider}
          onResolve={({ name, address, type }) => {
            if (
              type &&
              address !== "0x0000000000000000000000000000000000000000"
            ) {
              console.log("name:", name);
              console.log("address:", address);
              console.log("type:", type);
            }
          }}
        />
      )}
      <p>Orbiter.</p>
    </div>
  );
}

export default App;
