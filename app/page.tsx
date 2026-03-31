'use client';

import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input.trim(), completed: false },
      ]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#e5e5e5]">
          Todo App
        </h1>

        <div className="bg-[#1a1a1a] rounded-xl p-6 mb-6 shadow-xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="flex-1 bg-[#252525] text-[#e5e5e5] placeholder-[#a3a3a3] px-4 py-3 rounded-lg border border-[#333] focus:outline-none focus:border-[#6366f1] transition-colors"
            />
            <button
              onClick={addTodo}
              className="bg-[#6366f1] hover:bg-[#818cf8] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-[#a3a3a3] py-8">
              No tasks yet. Add one above!
            </p>
          ) : (
            todos.map(todo => (
              <div
                key={todo.id}
                className="bg-[#1a1a1a] rounded-xl p-4 flex items-center gap-4 shadow-xl border border-[#252525] hover:border-[#333] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 accent-[#6366f1] cursor-pointer"
                />
                <span
                  className={`flex-1 text-lg ${
                    todo.completed
                      ? 'line-through text-[#a3a3a3]'
                      : 'text-[#e5e5e5]'
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-[#ef4444] hover:text-[#dc2626] p-2 rounded-lg hover:bg-[#252525] transition-colors"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="mt-6 text-center text-[#a3a3a3]">
            {todos.filter(t => t.completed).length} of {todos.length} tasks completed
          </div>
        )}
      </div>
    </div>
  );
}
