"use client";

import { useState } from "react";


export default function Login() {

    const [isRegistering, setIsRegistering] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let message;
    let buttonText;
    let heading;
    let submitText;

    if (isRegistering) {
        message = "Already have an Account?";
        buttonText = "Log In";
        heading = "Create an Account";
        submitText = "Register";
    }
    else {
        message = "Don't have an account?";
        buttonText = "Create an Account";
        heading = "Welcome Back!";
        submitText = "Log In";
    }


    let nameField;

    if (isRegistering) {
        nameField = (
            <>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </>
        );
    }
    else {
        nameField = null;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (isRegistering) {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            }
            else {
                alert(data.error);
            }
        }

        else{
            const response = await fetch("/api/login", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if(response.ok){
                alert(data.message);
            }
            else {
                alert(data.error);
            }
        }
    }


    return (
        <main>
            <section id="login">
                <h2>{heading}</h2>
                <p>Log in to Boo Boo's Bakery to view your orders.</p>

                <form id="login-form" onSubmit={handleSubmit}>
                    {nameField}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">{submitText}</button>
                </form>

                {message}

                <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
                    {buttonText}
                </button>
            </section>
        </main>
    );
}