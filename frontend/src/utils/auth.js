import { redirect } from "react-router-dom";

export function isAuthenticated() {
  const _token = sessionStorage.getItem("token");
  console.log(!!_token ? "Token Saved" : "Error saving the token");
  return !!_token;
}

export function requireAuth() {
  return !isAuthenticated() ? redirect("/login") : null;
}
