const Users = ({ users }) => {
  return (
    <>
      <div className="heading">
        <h1>FACE_Prep Users List</h1>
      </div>

      <div id="user">
        {users.map((user) => (
          <div className="user_info" key={user.login.uuid}>
            {/* User Image */}
            <img src={user.picture.large} alt="" />

            {/* User Name */}
            <p>
              <span>Name : </span>
              {user.name.title} {user.name.first} {user.name.last}
            </p>

            {/* User Email */}
            <p>
              <span>Email : </span>
              {user.email}
            </p>

            {/* Cell Number */}
            <p>
              <span>Cell : </span>
              {user.cell}
            </p>

            {/* Age */}
            <p>
              <span>Age : </span>
              {user.dob.age} years
            </p>

            {/* Gender */}
            <p>
              <span>Gender : </span>
              {user.gender}
            </p>

            {/* Location */}
            <p>
              <span>Location : </span> {user.location.city},{" "}
              {user.location.state}, {user.location.country}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
