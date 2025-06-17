import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  // Register
  const register = async (username, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Set the user's display name
    await updateProfile(user, {
      displayName: username,
    });
  };

  // Login
  const login = async (email, password) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length === 0) {
        alert("Email does not exist. Please register first.");
        return;
      }

      // Email exists, proceed to login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in user:", userCredential.user);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  // Google Sign-in
  const signInWithGoogle = async () => {
    try {
      const provider = googleProvider;
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (!signInMethods.includes("google.com")) {
        alert("This Google account is not registered.");
        return;
      }

      console.log("Signed in with Google:", result.user);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Google sign-in failed: " + error.message);
    }
  };

  // Logout
  const logout = () => {
    signOut(auth);
    alert(user.displayName + "   logged out");
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, signInWithGoogle, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
