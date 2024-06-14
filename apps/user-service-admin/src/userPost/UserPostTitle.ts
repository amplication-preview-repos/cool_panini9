import { UserPost as TUserPost } from "../api/userPost/UserPost";

export const USERPOST_TITLE_FIELD = "title";

export const UserPostTitle = (record: TUserPost): string => {
  return record.title?.toString() || String(record.id);
};
