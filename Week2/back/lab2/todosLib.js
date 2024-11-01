let todoArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
  if (!task || !completed || !dueDate) {
    return false;
  }

  const newTask = {
    id: nextId++,
    task: task,
    completed: completed,
    dueDate: dueDate,
  };

  todoArray.push(newTask);
  return newTask;
}

function getAll() {
  return todoArray;
}

function findById(id) {
  const numericId = Number(id);
  const task = todoArray.find((item) => item.id === numericId);
  return task || false;
}

function updateOneById(id, updatedData) {
  const task = findById(id);
  if (!task) {
    return false;
  } else {
    if (updatedData.task) task.task = updatedData.task;
    if (updatedData.completed) task.completed = updatedData.completed;
    if (updatedData.dueDate) task.dueDate = updatedData.dueDate;
    return task;
  }
}

function deleteOneById(id) {
  const task = findById(id);
  if (task) {
    const initialLength = todoArray.length;
    todoArray = todoArray.filter((task) => task.id !== Number(id));
    return todoArray.length < initialLength;
  }
  return false;
}

if (require.main === module) {
  let result = addOne("Watch attack on titan", true, "2011-11-11");
  console.log(result);
  result = addOne("coding", true, "1999-08-01");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log("updateOneById called:", updateOneById(1, { completed: true }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const Task = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Task;
