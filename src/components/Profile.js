import { useEffect, useState } from "react";

function Profile({ user, setUser }) {
  const [passwordHash, setPasswordHash] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost/user/${user.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPasswordHash(data.msg.passwordHash);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <>
      <h1>{user ? user.username : ""}</h1>
      <p>Profile</p>
    </>
  );
}

export default Profile;
