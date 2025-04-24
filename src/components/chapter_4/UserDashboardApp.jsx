import UserDashboard from "../chapter_4/UserDashboard"

function UserDashboardApp() {
    const user = {
      name: "Alice Doe",
      email: "alice@example.com",
      tasks: ["Buy groceries", "Finish React project"],
    };
  
    return <UserDashboard user={user} />;
  }

  export default UserDashboardApp