const ArrowRight = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      { ...props }
    >
      <path d="M5 12H19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ArrowRight