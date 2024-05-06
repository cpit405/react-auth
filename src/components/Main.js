import { useAuth } from '../AuthContext';
const Main = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <h1>Main</h1>
            <p>This is a protected page.</p>
            {currentUser ? (
                <p>Welcome, {currentUser.email}</p>
            ) : (
                <p>You are not signed in.</p>
            )}
        </div>
    );
}

export default Main;