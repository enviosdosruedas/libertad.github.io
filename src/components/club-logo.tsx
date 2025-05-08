import type { SVGProps } from 'react';

export function ClubLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center space-x-2">
      <svg
        viewBox="0 0 58 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Club Atlético Libertad Logo"
        {...props}
      >
        <defs>
          <clipPath id="clubLibertadShieldPath">
            <path d="M29 0C29 0 0 10 0 20V58C0 58 10 68 29 68C48 68 58 58 58 58V20C58 10 29 0 29 0Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#clubLibertadShieldPath)">
          {/* Using CSS variables for colors requires them to be inline or through a mechanism that Next.js can process for SVGs if they are external files.
              For inline SVGs, direct HSL values or hex codes are more reliable if CSS variables don't propagate.
              However, if these are styled by parent CSS, `fill="currentColor"` or specific classes can work.
              Here, using fallback direct colors from the theme for simplicity in an SVG component.
              Red: hsl(0, 75%, 55%) -> #DB3A3A
              White: hsl(0, 0%, 100%) -> #FFFFFF
              Gold: hsl(42, 85%, 55%) -> #EAC445
          */}
          <rect width="11.6" height="68" fill="#DB3A3A" /> {/* Red */}
          <rect x="11.6" width="11.6" height="68" fill="#FFFFFF" /> {/* White */}
          <rect x="23.2" width="11.6" height="68" fill="#DB3A3A" /> {/* Red */}
          <rect x="34.8" width="11.6" height="68" fill="#FFFFFF" /> {/* White */}
          <rect x="46.4" width="11.6" height="68" fill="#DB3A3A" /> {/* Red */}
        </g>
        <path
          d="M29 0C29 0 0 10 0 20V58C0 58 10 68 29 68C48 68 58 58 58 58V20C58 10 29 0 29 0Z"
          stroke="#EAC445" // Gold outline
          strokeWidth="2.5" 
        />
      </svg>
      <span className="font-semibold text-xl text-primary group-hover:text-accent transition-colors">
        Club Libertad
      </span>
    </div>
  );
}
