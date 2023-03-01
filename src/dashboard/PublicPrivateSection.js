import React, { useState } from "react";

export default function PublicPrivateSection(props) {
  const { tasks } = props;
  const loggedInUser = localStorage.getItem("isAuth");
  const [state, setState] = useState(tasks);

  const handleLogout = () => {
    localStorage.setItem(`${loggedInUser}`, JSON.stringify(state));
    localStorage.removeItem("isAuth");
    window.location.reload();
  };
  const onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };
  const onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };
  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };
  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };
  const onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let tasks = state;
    let updated = tasks.map((task) => {
      if (task.id.toString() === data.toString()) {
        task.status = status;
      }
      return task;
    });
    setState(updated);
  };

  let publicData = state.filter((t) => t.status === "public");
  let privateData = state.filter((t) => t.status === "private");

  return (
    <>
      <div className="logOut">
        <button className="logOutBtn" onClick={handleLogout} type="button">
          Logout
        </button>
      </div>
      <div className="main-container">
        <h4>{loggedInUser === "user_b@system.com" ? "User B" : "User A"}</h4>

        <div
          className="order small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "public")}
        >
          <section className="drag_container">
            <div>
              <div className="drag_column">
                <div className="drag_row">
                  <h4 className="textCenter">Public</h4>
                  {publicData.map((task) => (
                    <div
                      className="card"
                      key={task.title + task.id}
                      id={task.id}
                      draggable
                      onDragStart={(e) => onDragStart(e)}
                      onDragEnd={(e) => onDragEnd(e)}
                    >
                      {task.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="pending small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "private")}
        >
          <section className="drag_container">
            <div>
              <div className="drag_column">
                <div className="drag_row">
                  <h4 className="textCenter">Private</h4>
                  {privateData.map((task) => (
                    <div
                      className="card"
                      key={task.title + task.id + task.title}
                      id={task.id}
                      draggable
                      onDragStart={(e) => onDragStart(e)}
                      onDragEnd={(e) => onDragEnd(e)}
                    >
                      {task.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
