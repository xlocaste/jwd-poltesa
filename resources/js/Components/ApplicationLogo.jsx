export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" />
            <path d="M35 50 L50 25 L65 50 L50 75 Z" fill="currentColor" />
        </svg>
    );
}
