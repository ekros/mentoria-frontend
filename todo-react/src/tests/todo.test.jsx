import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, describe } from 'vitest'
import App from '../App.jsx';


describe("Test form", () => {
    test("Should add task on click", async () => {
        const user = userEvent.setup();
        render(<App tasks={[]} />)
        const input = screen.getByTestId("new-todo-input");
        const add = screen.getByTestId("add-button");
        await user.click(input);
        await user.keyboard("hola");
        await add.click();
        expect(screen.getAllByTestId("todo-label").length).toBe(1);
    });
});

describe("Test Checkbox", () => {
    test("Should check task as completed after click", async () => {
        const user = userEvent.setup();
        render(<App tasks={[{
            id: "hola",
            name: "hola",
            completed: false
        }]} />);
        const check = screen.getByTestId("todo-checkbox" + "hola");
        await user.click(check);
        expect(check).toBeChecked();
    });
    test("Should uncheck task as NOT completed after click", async () => {
        const user = userEvent.setup();
        render(<App tasks={[{
            id: "hola",
            name: "hola",
            completed: true
        }]} />);
        const check = screen.getByTestId("todo-checkbox" + "hola");
        await user.click(check);
        expect(check).not.toBeChecked();
    });
})

describe("Test actions", () => {
    test("Should enable editing on button click", async () => {
        const user = userEvent.setup();
        render(<App tasks={[{
            id: "hola",
            name: "hola",
            completed: false
        }]} />);
        const edit = screen.getByTestId("todo-edit" + "hola");
        await user.click(edit);
        const input = screen.getByTestId("todo-edit-input");
        expect(input).toBeInTheDocument();
    });
    test("Should remove task on button click", async () => {
        const user = userEvent.setup();
        render(<App tasks={[{
            id: "hola",
            name: "hola",
            completed: false
        }]} />);
        const deleteBtn = screen.getByTestId("todo-delete" + "hola");
        await user.click(deleteBtn);
        expect(screen.queryAllByTestId("todo-label").length).toBe(0);
    });
})

describe("Test filters", () => {
    test("Should filter by all", async () => {
        const user = userEvent.setup();
        render(<App tasks={[{
            id: "hola",
            name: "hola",
            completed: false
        }, 
        {   
            id: "hola",
            name: "hola",
            completed: true}]
        } />);
        const filterAll = screen.getByText("All");
        await user.click(filterAll);
        expect(screen.queryAllByTestId("todo-label").length).toBe(1);
    });
    test("Should filter by active", async () => {
        const user = userEvent.setup();
        render(<App tasks={[{
            id: "hola",
            name: "hola",
            completed: false
        }, 
        {
            id: "hola",
            name: "hola",
            completed: true
        }]} />);
        const active = screen.getByText("Active");
        await user.click(active);
        expect(screen.queryAllByTestId("todo-label").length).toBe(1);
    });
    test("Should filter by completed", async () => {
        const user = userEvent.setup();
        render(<App tasks={[{
            id: "hola",
            name: "hola",
            completed: false
        }]} />);
        const completed = screen.getByText("Completed");
        await user.click(completed);
        expect(screen.queryAllByTestId("todo-label").length).toBe(0);
    });
})