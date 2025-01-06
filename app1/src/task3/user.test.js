import React from "react";
import { render, screen } from "@testing-library/react";
import { UserList } from "./component/userList";
import "@testing-library/jest-dom";

describe("UserList Component", () => {
  test("renders a list of users correctly", () => {
    const mockUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
    ];

    // Render the component with mock data
    render(<UserList users={mockUsers} />);

    // Check if the correct number of list items is rendered
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockUsers.length);

    // Check if specific user names appear in the DOM
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
  });

  test("renders an empty list when no users are provided", () => {
    render(<UserList users={[]} />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
