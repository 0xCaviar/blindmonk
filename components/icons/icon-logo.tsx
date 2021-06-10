export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 42 42"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeMiterlimit: 10 }}
    >
      <g id="Artboard1" transform="matrix(0.838328,0,0,1,0,-8)">
        <rect x="0" y="8" width="50.1" height="42" style={{ fill: 'none' }} />
        <clipPath id="_clip1">
          <rect x="0" y="8" width="50.1" height="42" />
        </clipPath>
        <g clip-path="url(#_clip1)">
          <g transform="matrix(1.19285,0,0,1,3.63805,10.4995)">
            <path
              d="M24.204,23.007C21.016,22.621 17.865,22.37 15.402,22.222C15.07,22.559 14.692,22.932 14.336,23.252C13.817,23.712 13.318,24.161 12.831,24.603C12.828,24.606 12.828,24.609 12.824,24.612C14.752,26.438 17.143,28.804 18.301,30.336C18.786,30.152 19.192,30.028 19.477,29.993C20.843,29.825 22.555,29.815 23.996,29.853C23.982,26.872 23.938,23.981 24.204,23.007Z"
              style={{ fill: 'rgb(132,94,246)', fillRule: 'nonzero' }}
            />
          </g>
          <g transform="matrix(1.19285,0,0,1,3.63805,10.4995)">
            <path
              d="M21,0L21,14C24,15 24,16.831 24,18C24,19.252 23,23.875 23,23.875C23,23.875 26.253,24.197 29.313,24.883C30.347,25.114 31.062,25.75 31.062,26.938C31.062,28.501 30.062,37.001 30.062,37.001M18,9L14,9C12.343,9 11,10.344 11,12C11,13.657 12.343,15 14,15L17,15C17,15 16.986,19.604 17,22C17,22 15.922,23.17 15,24C6.197,31.812 2,37 2,37L4.063,37C4.063,37 16.313,29.375 19.355,29C22.397,28.625 27,29 27,29L27,37L32,37"
              style={{ fill: 'none', fillRule: 'nonzero', stroke: 'white', strokeWidth: '2px' }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
