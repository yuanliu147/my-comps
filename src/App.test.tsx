// 这里文件后缀修改为 tsx，因为需要测试 dom
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from '@jest/globals'
import App from "./App";

describe("test", () => {
  test("first unit test", () => {
    render(<App />);
    expect(screen.getByText("click me")).toBeInTheDocument();
  });
});
