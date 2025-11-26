
const ConnectGoogleButton = ({mentorId}) => {

  const handleGoogleAuth = () => {
    if (mentorId === null) {
      alert("You must be logged in first");
      return;
    }
    // Redirect to backend Google OAuth with mentorId in state
    window.location.href = `http://localhost:5000/api/v1/auth/google?state=${mentorId}`;
  };

  return (
    <button
      onClick={handleGoogleAuth}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Connect Google Calendar
    </button>
  );
};

export default ConnectGoogleButton;
