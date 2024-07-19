
export const CircleAnimatedIcon = ({className}:any) => {
    return (
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 100 100"
width="50"
height="50"
className={className}
>
<circle cx="50" cy="50" r="10" fill="#FFD700">
  <animate
    attributeName="cy"
    values="50;30;50"
    dur="1s"
    repeatCount="indefinite"
  />
</circle>
</svg>
  );
  
};