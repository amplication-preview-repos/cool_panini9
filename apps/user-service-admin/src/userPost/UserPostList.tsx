import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserPostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserPosts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Author" source="author" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PostId" source="postId" />
        <TextField label="PublishedAt" source="publishedAt" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};