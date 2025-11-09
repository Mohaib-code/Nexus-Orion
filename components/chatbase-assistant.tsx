"use client";

import { useEffect } from "react";

/**
 * Chatbase AI Assistant Component
 * Integrates the Chatbase chat widget into the application
 */
export const ChatbaseAssistant = () => {
    useEffect(() => {
        // Initialize Chatbase
        if (typeof window !== "undefined") {
            // Check if chatbase is already initialized
            if (!window.chatbase || (window as any).chatbase("getState") !== "initialized") {
                // Create the chatbase function
                (window as any).chatbase = (...args: any[]) => {
                    if (!(window as any).chatbase.q) {
                        (window as any).chatbase.q = [];
                    }
                    (window as any).chatbase.q.push(args);
                };

                // Create proxy for chatbase
                (window as any).chatbase = new Proxy((window as any).chatbase, {
                    get(target, prop) {
                        if (prop === "q") {
                            return target.q;
                        }
                        return (...args: any[]) => target(prop, ...args);
                    },
                });
            }

            // Load the script
            const onLoad = () => {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "qOHlmoXa_qG893j4F1zSG";
                script.setAttribute("data-domain", "www.chatbase.co");
                script.async = true;
                document.body.appendChild(script);
            };

            if (document.readyState === "complete") {
                onLoad();
            } else {
                window.addEventListener("load", onLoad);
            }

            // Cleanup function
            return () => {
                const existingScript = document.getElementById("qOHlmoXa_qG893j4F1zSG");
                if (existingScript) {
                    existingScript.remove();
                }
                window.removeEventListener("load", onLoad);
            };
        }
    }, []);

    // This component doesn't render anything visible
    return null;
};