import React, { useEffect, useState } from "react";
import PublicPrivateSection from "./PublicPrivateSection";
import "./index.css";

export default function Dashboard(props) {
  const { taskData, loggedInUser } = props;

  const [preDefinedTaskData, setPreDefinedTaskData] = useState([]);

  useEffect(() => {
    if (taskData !== null && typeof taskData === "string") {
      setPreDefinedTaskData(JSON.parse(taskData));
    } else {
      if (loggedInUser === "user_b@system.com") {
        const userB = [
          {
            id: 1,
            status: "private",
            title: "Dom Private 3",
          },
          {
            id: 2,
            status: "private",
            title: "Dom Private 4",
          },
          {
            id: 3,
            status: "public",
            title: "Dom Block 1",
          },
          {
            id: 4,
            status: "public",
            title: "Dom Block 2",
          },
          {
            id: 5,
            status: "public",
            title: "Dom Block 3",
          },
          {
            id: 6,
            status: "public",
            title: "Dom Block 1",
          },
        ];

        setPreDefinedTaskData(userB);
      } else {
        const userA = [
          {
            id: 1,
            status: "private",
            title: "Dom Private 1",
          },
          {
            id: 2,
            status: "private",
            title: "Dom Private 2",
          },
          {
            id: 3,
            status: "public",
            title: "Dom Block 1",
          },
          {
            id: 4,
            status: "public",
            title: "Dom Block 2",
          },
          {
            id: 5,
            status: "public",
            title: "Dom Block 3",
          },
          {
            id: 6,
            status: "public",
            title: "Dom Block 1",
          },
        ];
        setPreDefinedTaskData(userA);
      }
    }
  }, [taskData,loggedInUser]);

  return (
    preDefinedTaskData &&
    preDefinedTaskData.length > 0 && (
      <PublicPrivateSection tasks={preDefinedTaskData} />
    )
  );
}
