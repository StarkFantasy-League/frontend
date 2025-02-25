import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { ArgentIcon } from "../src/app/components/ArgentIcon";
import toast from "react-hot-toast";

// Mock Starknet React hooks
jest.mock("@starknet-react/core", () => ({
    useAccount: jest.fn(() => ({ address: null })), // Mock not connected
    useConnect: jest.fn(() => ({
        connect: jest.fn(),
        connectors: [{ id: "argentX", connect: jest.fn() }], // Ensure this is always an array
    })),
    useDisconnect: jest.fn(() => ({ disconnect: jest.fn() })),
}));

// Mock toast notifications
jest.mock("react-hot-toast", () => ({
    success: jest.fn(),
    error: jest.fn(),
}));

describe("ArgentIcon Component", () => {
    let mockConnect: jest.Mock;
    let mockDisconnect: jest.Mock;

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();

        mockConnect = jest.fn();
        mockDisconnect = jest.fn();

        // Mock the wallet connection and disconnection hooks
        (useAccount as jest.Mock).mockReturnValue({ address: null });
        (useConnect as jest.Mock).mockReturnValue({
            connect: mockConnect,
            connectors: [{ id: "argentX", name: "Argent X" }],
        });
        (useDisconnect as jest.Mock).mockReturnValue({ disconnect: mockDisconnect });
    });

    it("renders the connect button when no wallet is connected", () => {
        render(<ArgentIcon />);

        const button = screen.getByRole("button", { name: "Connect to Argent Wallet" });
        expect(button).not.toBeNull();
        expect(button).toHaveClass("bg-gray-200"); // Default background when not connected
    });

    it("renders the disconnect button when a wallet is connected", () => {
        (useAccount as jest.Mock).mockReturnValue({ address: "0x123" });

        render(<ArgentIcon />);

        const button = screen.getByRole("button", { name: "Disconnect from Argent Wallet" });
        expect(button).not.toBeNull();
        expect(button).toHaveClass("bg-green-500"); // Should be green when connected
    });

    it("calls connect function when clicking the button", async () => {
        render(<ArgentIcon />);

        const button = screen.getByRole("button", { name: "Connect to Argent Wallet" });
        fireEvent.click(button);

        expect(mockConnect).toHaveBeenCalledTimes(1);
        expect(toast.success).not.toHaveBeenCalled(); // Ensure no toast appears immediately

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith("Argent wallet successfully connected");
        });
    });

    it("calls disconnect function when clicking the button while connected", async () => {
        (useAccount as jest.Mock).mockReturnValue({ address: "0x123" });

        render(<ArgentIcon />);

        const button = screen.getByRole("button", { name: "Disconnect from Argent Wallet" });
        fireEvent.click(button);

        expect(mockDisconnect).toHaveBeenCalledTimes(1);
        expect(toast.success).not.toHaveBeenCalled(); // Ensure no toast appears immediately

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith("Argent wallet successfully disconnected");
        });
    });

    it("shows error when connection fails", async () => {
        mockConnect.mockRejectedValueOnce(new Error("Connection Error"));

        render(<ArgentIcon />);

        const button = screen.getByRole("button", { name: "Connect to Argent Wallet" });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText("Failed to connect. Please try again.")).not.toBeNull();
        });
    });

    it("shows error when disconnection fails", async () => {
        (useAccount as jest.Mock).mockReturnValue({ address: "0x123" });
        mockDisconnect.mockRejectedValueOnce(new Error("Disconnection Error"));

        render(<ArgentIcon />);

        const button = screen.getByRole("button", { name: "Disconnect from Argent Wallet" });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText("Failed to disconnect. Please try again.")).not.toBeNull();
        });
    });

    it("displays the loading spinner while connecting", async () => {
        render(<ArgentIcon />);

        const button = screen.getByRole("button", { name: "Connect to Argent Wallet" });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByTestId("spinner")).toBeInTheDocument();
        });
    });

    it("displays the error message when connection fails", async () => {
        mockConnect.mockRejectedValueOnce(new Error("Failed to connect"));

        render(<ArgentIcon showError={true} />);

        const button = screen.getByRole("button", { name: "Connect to Argent Wallet" });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText("Failed to connect. Please try again.")).not.toBeNull();
        });
    });
});