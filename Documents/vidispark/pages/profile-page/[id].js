import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProfileHeader from "../../src/components/Profile Page/ProfileHeader";
import ProfilePageTabs from "../../src/components/Profile Page/ProfilePageTabs";
import Layouts from "../../src/layouts/Layouts";
import { countdown } from "../../src/utils";
import { useRouter } from "next/router";
import { useUser } from "../../src/services/user";

const Profile = () => {
  const [followerState, setFollowerState] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const { users, followUser } = useUser();
  const user = users?.filter((item) => item?.id == id);
  useEffect(() => {
    countdown();
  }, []);

  return <Layouts></Layouts>;
};
export default Profile;
