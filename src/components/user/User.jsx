
const User = ({user}) => {
    const { id, name, phone, email } = user;
    const userStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px'

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    );
};

export default User;