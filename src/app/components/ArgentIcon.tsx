"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core"
import toast from "react-hot-toast"

// Interface defining the props that can be passed to the ArgentIcon component
interface ArgentIconProps {
    iconClassName?: string; // Optional CSS class for styling the icon
    buttonClassName?: string; // Optional CSS class for styling the button
    tooltipClassName?: string; // Optional CSS class for styling the tooltip
    errorClassName?: string; // Optional CSS class for styling error messages
    showTooltip?: boolean; // Determines whether to show the tooltip
    showError?: boolean; // Determines whether to display errors
    onConnect?: () => void; // Callback function triggered when wallet connects
    onDisconnect?: () => void; // Callback function triggered when wallet disconnects
}

// Argent Wallet Connection Button Component
export const ArgentIcon: React.FC<ArgentIconProps> = ({
    iconClassName = "",
    buttonClassName = "",
    tooltipClassName = "",
    errorClassName = "",
    showTooltip = true,
    showError = true,
    onConnect,
    onDisconnect,
}) => {
    // Get the wallet address, connection methods, and disconnection methods
    const { address } = useAccount(); // Retrieves the connected wallet address
    const { connect, connectors } = useConnect(); // Handles connecting wallets
    const { disconnect } = useDisconnect(); // Handles disconnecting wallets

    // State management
    const [isConnecting, setIsConnecting] = useState(false); // Loading state while connecting
    const [error, setError] = useState<string | null>(null); // Stores any connection errors

    // Handles the wallet connection logic
    const handleConnection = async () => {
        setIsConnecting(true); // Show loading state
        setError(null); // Clear previous errors

        // If the wallet is already connected, disconnect it
        if (address) {
            try {
                await disconnect();
                toast.success("Argent wallet successfully disconnected"); // Show success notification
                onDisconnect?.(); // Call the disconnect callback if provided
            } catch (e) {
                console.error(e);
                setError("Failed to disconnect. Please try again."); // Set error message
            } finally {
                setIsConnecting(false); // Remove loading state
            }
            return;
        }

        // Find the Argent wallet connector
        const argentConnector = connectors.find((c) => c.id === "argentX");
        if (!argentConnector) {
            setError("Argent connector not found"); // Display error if Argent is not available
            setIsConnecting(false);
            return;
        }

        // Attempt to connect to Argent Wallet
        try {
            await connect({ connector: argentConnector });
            toast.success("Argent wallet successfully connected"); // Show success notification
            onConnect?.(); // Call the connect callback if provided
        } catch (e) {
            console.error(e);
            setError("Failed to connect. Please try again."); // Set error message
        } finally {
            setIsConnecting(false); // Remove loading state
        }
    };

    return (
        <div className="group relative inline-block">
            {/* Wallet Connection Button */}
            <button
                onClick={handleConnection}
                className={`p-2 rounded-full transition-colors duration-200 
          ${address ? "bg-green-500 hover:bg-green-600" : "bg-gray-200 hover:bg-gray-300"} 
          flex items-center justify-center ${buttonClassName}`}
                disabled={isConnecting} // Disable button when connecting
                aria-label={address ? "Disconnect from Argent Wallet" : "Connect to Argent Wallet"}
            >
                {/* Argent Wallet Icon */}
                <Image
                    src="/ArgentIcon.png" // Image source (must be placed in the `public/` folder)
                    alt="Argent Wallet"
                    width={40}
                    height={40}
                    className={`rounded-full ${address ? "filter brightness-0 invert" : ""} ${iconClassName}`}
                />
            </button>

            {/* Tooltip (Shows 'Connect' or 'Disconnect' on hover) */}
            {showTooltip && (
                <span
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tooltipClassName}`}
                >
                    {address ? "Disconnect" : "Connect"}
                </span>
            )}

            {/* Loading Spinner (Shown while connecting) */}
            {isConnecting && (
                <div data-testid="spinner" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 rounded-full">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error Message (Shown if connection fails) */}
            {showError && error && (
                <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-red-100 text-red-700 text-xs rounded shadow ${errorClassName}`}
                >
                    {error}
                </div>
            )}
        </div>
    );
};