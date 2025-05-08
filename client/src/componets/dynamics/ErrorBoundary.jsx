export default function ErrorBoundary({ error }) {
    return (
      <div>
        <h1>Something went wrong:</h1>
        <p>{error.message}</p>
      </div>
    );
  }