"use client";

import { useState, useEffect } from "react";
import { signIn, getProviders } from "next-auth/react";

function LogIn() {
  const [providers, setProvidersInfo] = useState(null);

  useEffect(() => {
    const setUpProvider = async () => {
      const res = await getProviders();
      setProvidersInfo(res);
    };

    setUpProvider();
  }, []);

  return (
    <>
      {providers &&
        Object.values(providers).map((provider, index) => {
          return (
            <button
              type="button"
              className="btn btn-white btn-active"
              key={index}
              onClick={() => {
                signIn(provider.id);
              }}
            >
              sign in with {provider.name}
            </button>
          );
        })}
    </>
  );
}

export default LogIn;
