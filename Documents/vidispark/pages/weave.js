import { useRef, useState, useEffect, useContext } from "react";
import { isNil, map } from "ramda";

import { AuthContext } from "./authContext";
import { useTodo } from "../src/services/todo";
export default function App() {
  const { user, initDB, db, login, logout, checkUser } =
    useContext(AuthContext);
  const { tasks, getTasks, addTask, completeTask, deleteTask, getMyTasks } =
    useTodo();
  const [tab, setTab] = useState("All");

  const tabs = isNil(user) ? ["All"] : ["All", "Yours"];

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
        <div onClick={() => logout()}>{user?.wallet?.slice(0, 7)}</div>
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
          {/* <NewTask /> */}
          <Tasks />
        </div>
      </div>
    </div>
  );
}
