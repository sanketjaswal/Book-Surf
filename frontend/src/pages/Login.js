import AddUser from "../components/AddUser";

export const Login = () => {
  return (
    <>
      <h1>Add User</h1>
      <AddUser onUserAdded={(user) => console.log("User Added:", user)} />
    </>
  );
};
