import React, {FC, useState, useEffect} from 'react'
import { ITodo } from '../../types/types';
import List from '../List/List';
import TodoItem from '../TodoComponent/TodoItem';

const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
      }, []);

    async function fetchTodos() {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          const data = (await response.json()) as ITodo[];
          setTodos(data);
        } catch (e) {
          alert(e);
        }
      }
    return(
        <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    )
}

export default TodoPage