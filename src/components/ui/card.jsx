const Card = ({ children, className = "" }) => {
    return (
      <div className={`rounded-2xl shadow-lg p-4 bg-white ${className}`}>
        {children}
      </div>
    );
  };
  
  const CardContent = ({ children, className = "" }) => {
    return <div className={`p-4 ${className}`}>{children}</div>;
  };
  
  export { Card, CardContent };
  