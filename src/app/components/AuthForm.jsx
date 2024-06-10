"use client";

import { useState } from "react";

import React from "react";

export default function AuthForm() {
  const [isNewUser, setIsNewUser] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    // TASK: handleLogin
  }

  async function handleSingUp(e) {
    e.preventDefault();
    // TASK: handleSingUp
  }

  return (
    <form onSubit={isNewUser ? handleSingUp : handleLogin}>
      <input type="text" />
    </form>
  );
}
