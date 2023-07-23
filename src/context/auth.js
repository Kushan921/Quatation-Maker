import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
    });

    netlifyIdentity.on("init", (user) => {
      setUser(user);
    });

    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    // Replace 'YOUR_USERNAME' and 'YOUR_PASSWORD' with the desired credentials
    const predefinedUsername = 'YOUR_USERNAME';
    const predefinedPassword = 'YOUR_PASSWORD';

    // Perform a fake login using the predefined credentials
    netlifyIdentity.currentUser().signup("", predefinedUsername, predefinedPassword, {}, (err, user) => {
      if (!err) {
        setUser(user);
      }
    });
  };

  const logout = () => netlifyIdentity.logout();

  const context = { user, login, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
