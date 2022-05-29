import axios from "axios";

export const SwitchRole = async (role_id: string) => {
  const { data } = await axios.post("/switch");

  return { data };
};
