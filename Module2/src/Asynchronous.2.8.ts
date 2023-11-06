{
  // Asyncrhonous
  type Error = {
    message: string;
  };
  type Data = {
    name: string;
  };
  const createPromise = (): Promise<Error | Data> => {
    return new Promise<Error | Data>((resolve, reject) => {
      let data: Data = { name: "sayed" };
      if (data) {
        resolve(data);
      } else {
        reject({ message: "some error" });
      }
    });
  };

  const showData = async (): Promise<Error | Data> => {
    try {
      const data: Data | Error = await createPromise();
      console.log(data);
      return data;
    } catch (err: any) {
      console.log(err.message);
      return err;
    }
  };
  //   showData();

  //Using APi call
  interface TodoData {
    userId: number;
    id: number;
    title: string;
    completed: string;
  }

  const getTodos = async (): Promise<TodoData | Error> => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      return data;
    } catch (err: unknown) {
      return { message: "Got an Error" };
    }
  };

  const showTodo = async (): Promise<TodoData | Error> => {
    const data = await getTodos();
    console.log(data);

    return data;
  };
  showTodo();
}
