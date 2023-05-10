import { useRef, useState, useEffect } from "react";
import lf from "localforage";
import { isNil, map } from "ramda";
import SDK from "weavedb-sdk";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import Web3 from "web3";

import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";

const contractTxId = "0P-YuG46ghkoxUTiZ_rkRsnqxxlTLVpzYVLd5FXwA80";

export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState("All");
  const [initDB, setInitDB] = useState(false);
  const [db, setdb] = useState("");
  let task = useRef();
  const tabs = isNil(user) ? ["All"] : ["All", "Yours"];

  const setupWeaveDB = async () => {
    window.Buffer = Buffer;
    let db = new SDK({
      contractTxId,
    });
    setdb(db);
    await db.initializeWithoutWallet();
    setInitDB(true);
  };

  const getTasks = async () => {
    setTasks(await db.cget("tasks", ["date", "desc"]));
  };

  const getMyTasks = async () => {
    setTasks(
      await db.cget(
        "tasks",
        ["user_address", "==", user.wallet.toLowerCase()],
        ["date", "desc"]
      )
    );
  };

  const addTask = async (task) => {
    await db.add(
      {
        task,
        date: db.ts(),
        user_address: db.signer(),
        done: false,
      },
      "tasks",
      user
    );
    await getTasks();
  };

  const completeTask = async (id) => {
    await db.update(
      {
        done: true,
      },
      "tasks",
      id,
      user
    );
    await getTasks();
  };

  const deleteTask = async (id) => {
    await db.delete("tasks", id, user);
    await getTasks();
  };

  const providerOptions = {};
  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
  });

  const providerUrl = "https://eth-rpc-api-testnet.thetatoken.org/rpc";
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

  const login = async () => {
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const wallet_address = accounts[0];
      let identity = await lf.getItem(
        `temp_address:${contractTxId}:${wallet_address}`
      );
      let tx;
      let err;
      if (isNil(identity)) {
        ({ tx, identity, err } = await db.createTempAddress(wallet_address));
        const linked = await db.getAddressLink(identity.address);
        if (isNil(linked)) {
          alert("something went wrong");
          return;
        }
      } else {
        await lf.setItem("temp_address:current", wallet_address);
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
        return;
      }
      if (!isNil(tx) && isNil(tx.err)) {
        identity.tx = tx;
        identity.linked_address = wallet_address;
        await lf.setItem("temp_address:current", wallet_address);
        await lf.setItem(
          `temp_address:${contractTxId}:${wallet_address}`,
          identity
        );
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    if (confirm("Would you like to sign out?")) {
      await lf.removeItem("temp_address:current");
      setUser(null, "temp_current");
    }
  };

  const checkUser = async () => {
    const wallet_address = await lf.getItem(`temp_address:current`);
    if (!isNil(wallet_address)) {
      const identity = await lf.getItem(
        `temp_address:${contractTxId}:${wallet_address}`
      );
      if (!isNil(identity))
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
    }
  };

  useEffect(() => {
    checkUser();
    setupWeaveDB();
  }, []);

  useEffect(() => {
    if (initDB) {
      if (tab === "All") {
        getTasks();
      } else {
        getMyTasks();
      }
    }
  }, [tab, initDB]);

  const NavBar = () => (
    <div>
      {!isNil(user) ? (
        <div onClick={() => logout()}>{user.wallet.slice(0, 7)}</div>
      ) : (
        <div onClick={() => login()}>Connect Wallet</div>
      )}
    </div>
  );
  const Tabs = () => (
    <div>{map((v) => <div onClick={() => setTab(v)}>{v}</div>)(tabs)}</div>
  );

  const Tasks = () =>
    map((v) => (
      <div>
        <div>
          {v.data.done ? (
            "✅"
          ) : v.data.user_address !== user?.wallet.toLowerCase() ? null : (
            <div onClick={() => completeTask(v.id)}>⬜</div>
          )}
        </div>
        <div>{v.data.task}</div>
        <div>{v.data.user_address.slice(0, 7)}</div>
        <div>
          {v.data.user_address === user?.wallet.toLowerCase() ? (
            <div
              style={{ marginLeft: "10px" }}
              onClick={() => deleteTask(v.id)}
            >
              ❌
            </div>
          ) : null}
        </div>
      </div>
    ))(tasks);

  const NewTask = () => {
    const [newTask, setNewTask] = useState("");

    const handleAddBtnClick = async () => {
      if (!/^\s*$/.test(newTask)) {
        await addTask(newTask);
        setNewTask("");
      }
    };

    return (
      <>
        <input
          placeholder="Enter New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div onClick={handleAddBtnClick}>add</div>
      </>
    );
  };

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <Tabs />
          {!isNil(user) ? <NewTask /> : null}
          <Tasks />
        </div>
      </div>
    </div>
  );
}
