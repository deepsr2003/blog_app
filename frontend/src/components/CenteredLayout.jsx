// src/components/CenteredLayout.jsx

// This component is a flex container that will grow to fill its parent's space
// and then center its own children both vertically and horizontally.
export default function CenteredLayout({ children }) {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center">
      {children}
    </div>
  );
}
