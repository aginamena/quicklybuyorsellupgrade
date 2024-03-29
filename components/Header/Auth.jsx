"use client";
import { useEffect, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { auth, provider, signInWithPopup } from "@/config/firebase";
import { getUser, isUserAdmin, storeDataInFirestore } from "@/util";
import PhoneNumber from "./PhoneNumber";
import { useAppContext } from "@/context/app";

export default function Auth() {
  const { userProfile, setUserProfile } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [user, setUser] = useState({});
  const [takePhoneNumber, setTakePhoneNumber] = useState({
    open: false,
    number: "",
  });

  const open = Boolean(anchorEl);
  const router = useRouter();

  useEffect(() => {
    const user = getUser();
    if (Object.keys(userProfile).length == 0) {
      setUserProfile(user || {});
    }
  }, []);
  // useEffect(() => {
  //   const user = getUser();
  //   setUser(user || {});
  //   console.log("here2");
  // }, [auth.currentUser]);

  useEffect(() => {
    if (takePhoneNumber.number.length > 0) {
      createProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [takePhoneNumber]);

  function logout() {
    localStorage.removeItem("user");
    setUserProfile({});
    setTakePhoneNumber({ open: false, number: "" });
    router.push("/");
  }

  async function signIn() {
    try {
      const profile = await signInWithPopup(auth, provider);
      const { phoneNumber, email, uid, displayName, photoURL } = profile.user;
      setUserProfile({
        phoneNumber,
        email,
        uid,
        displayName,
        photoURL,
      });
      setTakePhoneNumber({ open: true, number: "" });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProfile() {
    //store profile in database
    const updatedUser = { ...userProfile };
    updatedUser.phoneNumber = takePhoneNumber.number;
    const path = `profiles/${updatedUser.email}`;
    await storeDataInFirestore(path, updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return (
    <Box>
      {Object.keys(userProfile).length > 0 ? (
        <Box>
          <Button
            id="basic-button"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            <Avatar src={userProfile?.photoURL} data-testid="image" />
          </Button>
          {open && (
            <div data-testid="profileIconMenu">
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem data-testid="MyAccount">
                  <Link
                    href="../my-account?tab=0"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    My Account
                  </Link>
                </MenuItem>
                {isUserAdmin() && (
                  <MenuItem>
                    <Link
                      href="../products-for-review"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Products for review
                    </Link>
                  </MenuItem>
                )}

                <MenuItem onClick={logout}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Box>
      ) : (
        <Button onClick={signIn}>Sign in</Button>
      )}
      <PhoneNumber
        open={takePhoneNumber.open}
        setTakePhoneNumber={setTakePhoneNumber}
      />
    </Box>
  );
}
