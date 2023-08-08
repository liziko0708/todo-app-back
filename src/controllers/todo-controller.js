import tasks from "../models/todo.js";
export const getAllTasks = async (req, res) => {
  // const data = await tasks.find();
  // res.sendFile(path.join(frontEndFolderPath, "index.html"));

  const toDo = [
    {
      todo: "workout",
      status: false,
      id: 1,
    },
    {
      todo: "study",
      status: true,
      id: 2,
    },
    {
      todo: "drink water",
      status: false,
      id: 3,
    },
  ];
  return res.status(200).send(toDo);
};
export const createTask = async (req, res) => {
  console.log(req.body);
  return res.status(200).send("task was created successfully");
};
