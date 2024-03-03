import {
  getFileUrl,
  getUniqueId,
  getUser,
  updateDataInFirestore,
} from "@/util";
import { Box, Button, TextField, Typography } from "@mui/material";
import { auth, updateProfile } from "@/config/firebase";
import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "@/context/app";

export default function Settings() {
  const user = getUser();

  const [imageUrl, setImageUrl] = useState(user.photoURL);
  const [name, setName] = useState(user.displayName);

  const { setUserProfile } = useAppContext();

  async function handleSubmit(e) {
    if (name.length == 0) {
      alert("Display name can't be empty");
      return;
    }
    const url = await getFileUrl(
      imageUrl,
      user.email,
      getUniqueId(),
      "profiles"
    );
    await updateProfile(auth.currentUser, { displayName: name, photoURL: url });
    const { email, uid, displayName, photoURL } = auth.currentUser;
    const updatedUserInfo = {
      phoneNumber: user.phoneNumber,
      email,
      uid,
      displayName,
      photoURL,
    };
    updatedUserInfo;
    updateDataInFirestore(`profiles/${user.email}`, updatedUserInfo);
    setUserProfile(updatedUserInfo);
    localStorage.setItem("user", JSON.stringify(updatedUserInfo));
    alert("Profile saved");
  }

  return (
    <Box>
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Update your profile image
      </Typography>
      {imageUrl && (
        <Image
          src={
            typeof imageUrl === "string"
              ? imageUrl
              : URL.createObjectURL(imageUrl)
          }
          width={100}
          height={100}
          style={{ borderRadius: "50px" }}
          alt={`${user.displayName} profile picture`}
        />
      )}

      <Box style={{ marginBottom: "50px" }}>
        <input
          type="file"
          multiple
          data-testid="image"
          accept="image/jpeg, image/png"
          onChange={(e) => setImageUrl(e.target.files[0])}
        />
      </Box>

      <TextField
        required
        fullWidth
        value={name}
        style={{ marginBottom: "30px" }}
        onChange={(e) => setName(e.target.value)}
        placeholder="Display name"
        label="Display name"
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Save profile
      </Button>
    </Box>
  );
}
