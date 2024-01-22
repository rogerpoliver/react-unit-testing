import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Check video at 53:58
describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);
    const names = ["Roger", "Fernando", "Felipe", "Alice", "Mariane"];

    names.forEach((name) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it("should add a new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const addButton = getByText("Add");
    const input = getByPlaceholderText("New item");
    const user = userEvent.setup();

    await user.type(input, "Luffy");
    await user.click(addButton);

    expect(input).toHaveValue("Luffy");
    await waitFor(() => expect(getByText("Luffy")).toBeInTheDocument());
  });
});
