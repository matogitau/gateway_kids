import Link from "next/link";

function UserList() {
  const users = [
    { id: "1", username: "User 1" },
    { id: "2", username: "User 2" },
    { id: "3", username: "User 3" },
  ];
  return (
    <div>
      <p> List of Users </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/admin/users/${user.id}`}>{user.username}</Link>
            {/* alternative is to use pathname  as so         
              href={{pathname: "/user/[userId]",
                query: { userId: user.id },
              }} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
