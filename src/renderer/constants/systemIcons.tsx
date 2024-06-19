import React from 'react';
import { SystemColors } from './systemColors';
interface IconsProps {
  isActive?: boolean;
}

interface PtzIconProps {
  style?: React.CSSProperties;
}

export const CraneIcon: React.FC<IconsProps> = ({ isActive = false }) => {
  const fill = isActive
    ? SystemColors.link.icons.active
    : SystemColors.link.icons.inactive;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0V1.875H0V0H20ZM11.5625 6.5625C11.562 6.20244 11.4375 5.85354 11.2098 5.57461C10.9821 5.29568 10.6652 5.10378 10.3125 5.03125V4.375H9.6875V5.3125C9.6875 5.39538 9.72042 5.47487 9.77903 5.53347C9.83763 5.59208 9.91712 5.625 10 5.625C10.1854 5.625 10.3667 5.67998 10.5208 5.783C10.675 5.88601 10.7952 6.03243 10.8661 6.20373C10.9371 6.37504 10.9557 6.56354 10.9195 6.7454C10.8833 6.92725 10.794 7.0943 10.6629 7.22541C10.5318 7.35652 10.3648 7.44581 10.1829 7.48199C10.001 7.51816 9.81254 7.49959 9.64123 7.42864C9.46993 7.35768 9.32351 7.23752 9.2205 7.08335C9.11748 6.92918 9.0625 6.74792 9.0625 6.5625C9.0625 6.47962 9.02958 6.40013 8.97097 6.34153C8.91237 6.28292 8.83288 6.25 8.75 6.25C8.66712 6.25 8.58763 6.28292 8.52903 6.34153C8.47042 6.40013 8.4375 6.47962 8.4375 6.5625C8.43831 6.83963 8.51319 7.11151 8.6544 7.34997C8.79561 7.58844 8.99801 7.78481 9.24063 7.91875L5.90938 10H7.09063L10 8.18125L12.9094 10H14.0906L10.7594 7.91875C11.002 7.78481 11.2044 7.58844 11.3456 7.34997C11.4868 7.11151 11.5617 6.83963 11.5625 6.5625ZM6.5625 3.75H13.4375C13.4918 3.7503 13.5452 3.73631 13.5924 3.70943C13.6396 3.68256 13.6788 3.64374 13.7063 3.59688L14.3656 2.5H5.63438L6.29375 3.59688C6.32117 3.64374 6.36044 3.68256 6.40761 3.70943C6.45479 3.73631 6.50821 3.7503 6.5625 3.75ZM17.8125 10.9375V19.6875C17.8125 19.7704 17.7796 19.8499 17.721 19.9085C17.6624 19.9671 17.5829 20 17.5 20H2.5C2.41712 20 2.33763 19.9671 2.27903 19.9085C2.22042 19.8499 2.1875 19.7704 2.1875 19.6875V10.9375C2.1875 10.8546 2.22042 10.7751 2.27903 10.7165C2.33763 10.6579 2.41712 10.625 2.5 10.625H17.5C17.5829 10.625 17.6624 10.6579 17.721 10.7165C17.7796 10.7751 17.8125 10.8546 17.8125 10.9375ZM5.3125 12.8125C5.3125 12.7296 5.27958 12.6501 5.22097 12.5915C5.16237 12.5329 5.08288 12.5 5 12.5C4.91712 12.5 4.83763 12.5329 4.77903 12.5915C4.72042 12.6501 4.6875 12.7296 4.6875 12.8125V17.8125C4.6875 17.8954 4.72042 17.9749 4.77903 18.0335C4.83763 18.0921 4.91712 18.125 5 18.125C5.08288 18.125 5.16237 18.0921 5.22097 18.0335C5.27958 17.9749 5.3125 17.8954 5.3125 17.8125V12.8125ZM7.8125 12.8125C7.8125 12.7296 7.77958 12.6501 7.72097 12.5915C7.66237 12.5329 7.58288 12.5 7.5 12.5C7.41712 12.5 7.33763 12.5329 7.27903 12.5915C7.22042 12.6501 7.1875 12.7296 7.1875 12.8125V17.8125C7.1875 17.8954 7.22042 17.9749 7.27903 18.0335C7.33763 18.0921 7.41712 18.125 7.5 18.125C7.58288 18.125 7.66237 18.0921 7.72097 18.0335C7.77958 17.9749 7.8125 17.8954 7.8125 17.8125V12.8125ZM10.3125 12.8125C10.3125 12.7296 10.2796 12.6501 10.221 12.5915C10.1624 12.5329 10.0829 12.5 10 12.5C9.91712 12.5 9.83763 12.5329 9.77903 12.5915C9.72042 12.6501 9.6875 12.7296 9.6875 12.8125V17.8125C9.6875 17.8954 9.72042 17.9749 9.77903 18.0335C9.83763 18.0921 9.91712 18.125 10 18.125C10.0829 18.125 10.1624 18.0921 10.221 18.0335C10.2796 17.9749 10.3125 17.8954 10.3125 17.8125V12.8125ZM12.8125 12.8125C12.8125 12.7296 12.7796 12.6501 12.721 12.5915C12.6624 12.5329 12.5829 12.5 12.5 12.5C12.4171 12.5 12.3376 12.5329 12.279 12.5915C12.2204 12.6501 12.1875 12.7296 12.1875 12.8125V17.8125C12.1875 17.8954 12.2204 17.9749 12.279 18.0335C12.3376 18.0921 12.4171 18.125 12.5 18.125C12.5829 18.125 12.6624 18.0921 12.721 18.0335C12.7796 17.9749 12.8125 17.8954 12.8125 17.8125V12.8125ZM15.3125 12.8125C15.3125 12.7296 15.2796 12.6501 15.221 12.5915C15.1624 12.5329 15.0829 12.5 15 12.5C14.9171 12.5 14.8376 12.5329 14.779 12.5915C14.7204 12.6501 14.6875 12.7296 14.6875 12.8125V17.8125C14.6875 17.8954 14.7204 17.9749 14.779 18.0335C14.8376 18.0921 14.9171 18.125 15 18.125C15.0829 18.125 15.1624 18.0921 15.221 18.0335C15.2796 17.9749 15.3125 17.8954 15.3125 17.8125V12.8125Z"
        fill={fill}
      />
    </svg>
  );
};
export const PlcIcon: React.FC<IconsProps> = ({ isActive = false }) => {
  const fill = isActive
    ? SystemColors.link.icons.active
    : SystemColors.link.icons.inactive;
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6608 0H2.33945L0.0361328 10.5137H15.9641L13.6608 0ZM12.9404 1.27014H10.2731C10.1897 1.27014 10.1214 1.2019 10.1214 1.11848C10.1214 1.03507 10.1897 0.966825 10.2731 0.966825H12.9404C13.0238 0.966825 13.0921 1.03507 13.0921 1.11848C13.0921 1.2019 13.0238 1.27014 12.9404 1.27014Z"
        fill={fill}
      />
      <path d="M11.6702 13.4501H10.4229V13.8937H11.6702V13.4501Z" fill={fill} />
      <path d="M8.62575 13.4501H7.37646V13.8937H8.62575V13.4501Z" fill={fill} />
      <path d="M5.57552 11.8766H4.32812V12.3202H5.57552V11.8766Z" fill={fill} />
      <path d="M8.62575 11.8766H7.37646V12.3202H8.62575V11.8766Z" fill={fill} />
      <path d="M2.52913 11.8766H1.28174V12.3202H2.52913V11.8766Z" fill={fill} />
      <path d="M5.57552 13.4501H4.32812V13.8937H5.57552V13.4501Z" fill={fill} />
      <path d="M2.52913 13.4501H1.28174V13.8937H2.52913V13.4501Z" fill={fill} />
      <path d="M14.7166 13.4501H13.4692V13.8937H14.7166V13.4501Z" fill={fill} />
      <path d="M14.7166 11.8766H13.4692V12.3202H14.7166V11.8766Z" fill={fill} />
      <path
        d="M0 10.8171V14.9536H16V10.8171H0ZM2.83412 14.0475C2.83412 14.1309 2.76588 14.1991 2.68246 14.1991H1.12986C1.04645 14.1991 0.978199 14.1309 0.978199 14.0475V13.3006C0.978199 13.2171 1.04645 13.1489 1.12986 13.1489H2.68057C2.76398 13.1489 2.83223 13.2171 2.83223 13.3006V14.0475H2.83412ZM2.83412 12.4721C2.83412 12.5555 2.76588 12.6238 2.68246 12.6238H1.12986C1.04645 12.6238 0.978199 12.5555 0.978199 12.4721V11.7252C0.978199 11.6418 1.04645 11.5735 1.12986 11.5735H2.68057C2.76398 11.5735 2.83223 11.6418 2.83223 11.7252V12.4721H2.83412ZM5.88057 14.0475C5.88057 14.1309 5.81232 14.1991 5.72891 14.1991H4.1782C4.09479 14.1991 4.02654 14.1309 4.02654 14.0475V13.3006C4.02654 13.2171 4.09479 13.1489 4.1782 13.1489H5.72891C5.81232 13.1489 5.88057 13.2171 5.88057 13.3006V14.0475ZM5.88057 12.4721C5.88057 12.5555 5.81232 12.6238 5.72891 12.6238H4.1782C4.09479 12.6238 4.02654 12.5555 4.02654 12.4721V11.7252C4.02654 11.6418 4.09479 11.5735 4.1782 11.5735H5.72891C5.81232 11.5735 5.88057 11.6418 5.88057 11.7252V12.4721ZM8.92701 14.0475C8.92701 14.1309 8.85877 14.1991 8.77536 14.1991H7.22275C7.13934 14.1991 7.07109 14.1309 7.07109 14.0475V13.3006C7.07109 13.2171 7.13934 13.1489 7.22275 13.1489H8.77536C8.85877 13.1489 8.92701 13.2171 8.92701 13.3006V14.0475ZM8.92701 12.4721C8.92701 12.5555 8.85877 12.6238 8.77536 12.6238H7.22275C7.13934 12.6238 7.07109 12.5555 7.07109 12.4721V11.7252C7.07109 11.6418 7.13934 11.5735 7.22275 11.5735H8.77536C8.85877 11.5735 8.92701 11.6418 8.92701 11.7252V12.4721ZM11.9735 14.0475C11.9735 14.1309 11.9052 14.1991 11.8218 14.1991H10.2711C10.1877 14.1991 10.1194 14.1309 10.1194 14.0475V13.3006C10.1194 13.2171 10.1877 13.1489 10.2711 13.1489H11.8218C11.9052 13.1489 11.9735 13.2171 11.9735 13.3006V14.0475ZM11.9735 12.4721C11.9735 12.5555 11.9052 12.6238 11.8218 12.6238H10.2711C10.1877 12.6238 10.1194 12.5555 10.1194 12.4721V11.7252C10.1194 11.6418 10.1877 11.5735 10.2711 11.5735H11.8218C11.9052 11.5735 11.9735 11.6418 11.9735 11.7252V12.4721ZM15.0199 14.0475C15.0199 14.1309 14.9517 14.1991 14.8682 14.1991H13.3175C13.2341 14.1991 13.1659 14.1309 13.1659 14.0475V13.3006C13.1659 13.2171 13.2341 13.1489 13.3175 13.1489H14.8682C14.9517 13.1489 15.0199 13.2171 15.0199 13.3006V14.0475ZM15.0199 12.4721C15.0199 12.5555 14.9517 12.6238 14.8682 12.6238H13.3175C13.2341 12.6238 13.1659 12.5555 13.1659 12.4721V11.7252C13.1659 11.6418 13.2341 11.5735 13.3175 11.5735H14.8682C14.9517 11.5735 15.0199 11.6418 15.0199 11.7252V12.4721Z"
        fill={fill}
      />
      <path d="M11.6702 11.8766H10.4229V12.3202H11.6702V11.8766Z" fill={fill} />
    </svg>
  );
};
export const CameraIcon: React.FC<IconsProps> = ({ isActive = false }) => {
  const fill = isActive
    ? SystemColors.link.icons.active
    : SystemColors.link.icons.inactive;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.6574 9.37481L18.8857 9.15376L8.02322 6.04714C7.34551 5.85918 6.63934 6.24966 6.44212 6.92737L5.33622 10.8057C5.14297 11.4834 5.53411 12.1896 6.21182 12.3868L7.85447 12.8527L7.22374 14.9521C6.64001 14.9806 6.15555 15.3571 5.96693 15.884H4.9411V14.4723C4.9411 14.2135 4.72932 14.0017 4.47055 14.0017C4.21178 14.0017 4 14.2135 4 14.4723V18.2375C4 18.4962 4.21178 18.708 4.47055 18.708C4.72932 18.708 4.9411 18.4962 4.9411 18.2375V16.8258H5.96693C6.16482 17.3718 6.68237 17.7669 7.29388 17.7669C8.0702 17.7669 8.70555 17.1316 8.70555 16.3553C8.70555 15.8893 8.47523 15.475 8.12645 15.2209L8.75718 13.1124L15.1346 14.9337C15.2524 14.9668 15.3702 14.9853 15.4827 14.9853C16.0195 14.9853 16.5085 14.6465 16.6872 14.1197L18.179 14.5479C18.2213 14.5618 18.2683 14.5664 18.3107 14.5664C18.3908 14.5664 18.4708 14.5479 18.5364 14.5055C18.6495 14.4446 18.7296 14.3453 18.762 14.2229L19.4259 11.8978C19.5013 11.6483 19.355 11.3849 19.1055 11.3141L17.6184 10.8906L17.8209 10.1798C17.8448 10.0904 17.901 10.0196 17.9811 9.97724C18.0612 9.93488 18.1505 9.92098 18.2352 9.94878L19.4027 10.2784C19.6476 10.3492 19.911 10.2076 19.9818 9.95805C20.0526 9.70854 19.9115 9.44563 19.6574 9.37481ZM7.29378 16.825C7.03502 16.825 6.82323 16.6132 6.82323 16.3545C6.82323 16.0957 7.03502 15.8839 7.29378 15.8839C7.55255 15.8839 7.76433 16.0957 7.76433 16.3545C7.76433 16.6132 7.55255 16.825 7.29378 16.825ZM9.01127 8.71099C8.92655 9.00287 8.65852 9.19545 8.36202 9.19545C8.30577 9.19545 8.24422 9.19082 8.18333 9.17163C7.82065 9.06838 7.61879 8.69644 7.7174 8.33839C7.76902 8.16433 7.8822 8.02335 8.03772 7.93335C8.19788 7.84864 8.37657 7.82481 8.55063 7.8771C8.72005 7.92409 8.86566 8.04189 8.95037 8.19742C9.03972 8.35295 9.05892 8.53694 9.01127 8.71099ZM18.396 12.0902L17.9863 13.5118L16.9512 13.2199L17.3609 11.7937L18.396 12.0902Z"
        fill={fill}
      />
    </svg>
  );
};
export const ServerIcon: React.FC<IconsProps> = ({ isActive = false }) => {
  const fill = isActive
    ? SystemColors.link.icons.active
    : SystemColors.link.icons.inactive;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.997 13.9997V13.3356C20.0064 13.1741 19.9938 13.0118 19.9584 12.8542C19.8796 12.5832 19.6952 12.3539 19.4479 12.2184C19.3013 12.1404 19.1382 12.0971 18.972 12.0916H16.0665L9.90885 12.0955H5.44413C5.24244 12.0869 5.03918 12.0908 4.8375 12.1058C4.76659 12.1144 4.69648 12.1302 4.62952 12.1531C4.39316 12.2358 4.20172 12.4115 4.09931 12.6392L4.05204 12.7684L4.04337 12.7967V12.7959C4.01658 12.9275 4.00792 13.063 4.01816 13.1969V16.8769C4.01816 17.088 4.00477 17.3086 4.01816 17.519C4.02998 17.6348 4.06701 17.7475 4.12609 17.8475C4.26318 18.0697 4.48298 18.2273 4.73744 18.2856C4.87374 18.3092 5.01162 18.3179 5.15027 18.3116H18.5797C18.7783 18.3186 18.9776 18.3131 19.1753 18.2942C19.4613 18.232 19.7095 18.0555 19.8623 17.8058C19.9238 17.701 19.9639 17.5852 19.9805 17.4646C19.9947 17.2787 19.9978 17.092 19.9915 16.9061V14.0014L19.997 13.9997ZM10.5674 15.4186C10.4318 15.5557 10.2176 15.5187 10.0403 15.5187H6.74232C6.59106 15.525 6.43901 15.5226 6.28774 15.5108C6.15932 15.4911 6.05296 15.4013 6.01121 15.2776C5.97024 15.1547 6.00176 15.0184 6.09236 14.9255C6.23968 14.7844 6.46973 14.8175 6.65724 14.8175H9.88966C10.0488 14.8175 10.215 14.8073 10.3734 14.8246C10.438 14.8317 10.4994 14.8601 10.5467 14.905C10.6184 14.9648 10.6617 15.0515 10.6672 15.1453C10.6759 15.2461 10.639 15.3469 10.5674 15.4186ZM15.3181 15.5486C15.1644 15.7487 14.9588 15.811 14.7169 15.8354C14.546 15.8315 14.3797 15.7771 14.2395 15.6786C14.0678 15.5581 13.9551 15.3722 13.9267 15.1649C13.8984 14.9578 13.9582 14.7474 14.0906 14.5859C14.3522 14.251 14.8335 14.1864 15.1739 14.4409C15.3354 14.5646 15.4433 14.7466 15.474 14.9475C15.5048 15.161 15.4488 15.3777 15.3181 15.5486ZM17.7855 15.4887H17.7847C17.6516 15.6723 17.4467 15.7928 17.2214 15.8188C17.0938 15.8315 16.9654 15.8102 16.8487 15.7566C16.6526 15.6699 16.4997 15.5084 16.4233 15.3083L16.4131 15.2792H16.4138C16.4005 15.2429 16.391 15.2059 16.3847 15.1681C16.3626 14.9554 16.4241 14.7427 16.5572 14.5748C16.8007 14.2747 17.2285 14.2014 17.5586 14.4015C17.7429 14.5189 17.8737 14.7041 17.9225 14.9176C17.958 15.1185 17.9092 15.3249 17.787 15.4887L17.7855 15.4887Z"
        fill={fill}
      />
      <path
        d="M11.0336 5.0082L6.94948 5.00583H5.64719C5.40138 5.00111 5.14455 4.99323 4.90033 5.01135C4.83257 5.02238 4.76561 5.03971 4.70022 5.06256C4.44022 5.15473 4.22989 5.35012 4.11801 5.60223C4.0991 5.64871 4.08256 5.69677 4.06995 5.74562L4.06129 5.77555C4.03371 5.9087 4.02347 6.04577 4.03135 6.18207V6.7832L4.02268 8.7071V9.95031C4.02268 10.167 4.0085 10.3931 4.02741 10.6081H4.0282C4.04159 10.7374 4.08177 10.8626 4.1448 10.9761C4.27558 11.1943 4.48514 11.3534 4.73015 11.4212C4.96177 11.4866 5.26825 11.4503 5.50932 11.4503H18.3511C18.6087 11.4503 18.8718 11.4614 19.1295 11.4432V11.4425C19.5738 11.3818 19.9236 11.0336 19.9858 10.5892C19.9969 10.3686 19.9969 10.1472 19.9858 9.92665V6.17489C19.9929 6.0575 19.9882 5.93932 19.9693 5.82351C19.911 5.54462 19.7392 5.30276 19.4958 5.15542C19.3437 5.06482 19.1712 5.0144 18.9947 5.0081L18.0824 5.00101H16.3066L11.0336 5.0082ZM10.6428 8.42899C10.5909 8.52983 10.4963 8.6031 10.3852 8.6291H6.76195C6.59572 8.6291 6.34125 8.66534 6.18682 8.60941H6.18761C6.11513 8.5771 6.05762 8.51959 6.02532 8.4479C5.97726 8.34784 5.97489 8.23203 6.02059 8.13041C6.06392 8.03193 6.15216 7.96023 6.25773 7.93896H9.69748C9.90705 7.93896 10.1221 7.93029 10.3309 7.93896H10.3301C10.3734 7.94054 10.416 7.94841 10.457 7.96417C10.5413 8.00041 10.609 8.06738 10.646 8.15168C10.6894 8.23913 10.6878 8.34233 10.6428 8.42899ZM15.3675 8.58735C15.2415 8.77958 15.0429 8.91273 14.8168 8.95683C14.6553 8.97653 14.4915 8.94659 14.3473 8.87175C14.148 8.75987 14.003 8.57158 13.9463 8.34942C13.9053 8.15404 13.9408 7.94998 14.0463 7.77982C14.1771 7.58365 14.3843 7.45208 14.6167 7.41505C14.7688 7.39929 14.9216 7.42766 15.0587 7.4962C15.247 7.60334 15.3872 7.77902 15.4487 7.98702C15.507 8.18949 15.477 8.40692 15.3675 8.58735ZM16.5005 7.81211C16.6178 7.61672 16.8117 7.47886 17.0346 7.43237C17.2016 7.41346 17.3702 7.4434 17.5215 7.51746C17.7058 7.61279 17.8445 7.77666 17.9083 7.9744C17.9776 8.17372 17.954 8.39431 17.8437 8.57473C17.7255 8.76145 17.5373 8.89223 17.3214 8.93793C17.137 8.96551 16.9487 8.93478 16.7825 8.85048C16.6052 8.75121 16.4784 8.58184 16.4319 8.38487C16.3728 8.19264 16.398 7.98463 16.5005 7.81211Z"
        fill={fill}
      />
    </svg>
  );
};
export const IllustrationIcon: React.FC<IconsProps> = ({
  isActive = false,
}) => {
  const fill = isActive
    ? SystemColors.link.icons.active
    : SystemColors.link.icons.inactive;
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 14H13V16H11V14ZM11 7H13V12H11V7Z"
        fill={fill}
      />
    </svg>
  );
};

export const LeftPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M0 9L13.2766 0.339745V17.6603L0 9Z" fill="white" />
    </svg>
  );
};
export const TopLeftPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M0.806858 0.83972L15.3472 1.79713L1.82534 15.3759L0.806858 0.83972Z"
        fill="white"
      />
    </svg>
  );
};
export const BottomLeftPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M15.5735 15.6033L0.0708703 12.2962L12.3521 0.0826171L15.5735 15.6033Z"
        fill="white"
      />
    </svg>
  );
};
export const RightPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M13.7021 9L0.425552 17.6603L0.425552 0.339746L13.7021 9Z"
        fill="white"
      />
    </svg>
  );
};
export const TopRightPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M14.8846 0.269409L15.1675 17.2102L0.487679 2.88718L14.8846 0.269409Z"
        fill="white"
      />
    </svg>
  );
};
export const BottomRightPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M15.5735 15.6033L0.0708703 12.2962L12.3521 0.0826171L15.5735 15.6033Z"
        fill="white"
      />
    </svg>
  );
};
export const TopPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M9 0L17.6603 11.1983L0.339746 11.1983L9 0Z" fill="white" />
    </svg>
  );
};
export const BottomPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M9 14.5L0.339745 0.968085H17.6603L9 14.5Z" fill="white" />
    </svg>
  );
};
export const CameraPtzIcon = ({ style }: PtzIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g clip-path="url(#clip0_826_5137)">
        <path
          d="M0.454102 6.18195C0.454102 5.13195 1.31319 4.27286 2.36319 4.27286H5.22683L7.13592 2.36377H12.8632L14.7723 4.27286H17.6359C18.1422 4.27286 18.6278 4.474 18.9859 4.83202C19.3439 5.19004 19.545 5.67563 19.545 6.18195V15.7274C19.545 16.2337 19.3439 16.7193 18.9859 17.0773C18.6278 17.4354 18.1422 17.6365 17.6359 17.6365H2.36319C1.85687 17.6365 1.37129 17.4354 1.01326 17.0773C0.655237 16.7193 0.454102 16.2337 0.454102 15.7274V6.18195ZM9.99956 15.7274C11.2654 15.7274 12.4793 15.2246 13.3744 14.3295C14.2694 13.4344 14.7723 12.2205 14.7723 10.9547C14.7723 9.68887 14.2694 8.47491 13.3744 7.57985C12.4793 6.68479 11.2654 6.18195 9.99956 6.18195C8.73375 6.18195 7.51979 6.68479 6.62473 7.57985C5.72967 8.47491 5.22683 9.68887 5.22683 10.9547C5.22683 12.2205 5.72967 13.4344 6.62473 14.3295C7.51979 15.2246 8.73375 15.7274 9.99956 15.7274ZM9.99956 13.8183C9.6235 13.8183 9.25112 13.7442 8.90369 13.6003C8.55626 13.4564 8.24057 13.2455 7.97466 12.9796C7.70875 12.7137 7.49781 12.398 7.3539 12.0505C7.20999 11.7031 7.13592 11.3307 7.13592 10.9547C7.13592 10.5786 7.20999 10.2062 7.3539 9.85881C7.49781 9.51138 7.70875 9.19569 7.97466 8.92978C8.24057 8.66387 8.55626 8.45293 8.90369 8.30902C9.25112 8.16511 9.6235 8.09104 9.99956 8.09104C10.759 8.09104 11.4874 8.39274 12.0245 8.92978C12.5615 9.46682 12.8632 10.1952 12.8632 10.9547C12.8632 11.7142 12.5615 12.4425 12.0245 12.9796C11.4874 13.5166 10.759 13.8183 9.99956 13.8183Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_826_5137">
          <rect
            width="19.0909"
            height="19.0909"
            fill="white"
            transform="translate(0.454102 0.454712)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const SuccessIcon = () => {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55 0C24.75 0 0 24.75 0 55C0 85.25 24.75 110 55 110C85.25 110 110 85.25 110 55C110 24.75 85.25 0 55 0ZM44 82.5L16.5 55L24.255 47.245L44 66.935L85.745 25.19L93.5 33L44 82.5Z"
        fill="#17A851"
      />
    </svg>
  );
};
export const SmallCameraIcon = () => {
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.11942 11.9076H9.82639C10.3885 11.9076 10.9276 11.6851 11.325 11.2889C11.7225 10.8927 11.9458 10.3553 11.9458 9.795V8.56582L15.0748 10.6477C15.2322 10.7529 15.4172 10.809 15.6066 10.8091C15.7654 10.8083 15.9215 10.7687 16.0613 10.6938C16.2154 10.6126 16.3442 10.4909 16.4338 10.342C16.5235 10.193 16.5706 10.0225 16.57 9.84878V2.05887C16.5643 1.88809 16.5129 1.72193 16.4212 1.57753C16.3296 1.43314 16.2009 1.31574 16.0486 1.23745C15.8962 1.15915 15.7256 1.12281 15.5544 1.13216C15.3833 1.14151 15.2177 1.19622 15.0748 1.29064L11.9458 3.34182V2.11265C11.9458 1.55234 11.7225 1.01498 11.325 0.61878C10.9276 0.222582 10.3885 0 9.82639 0H2.11942C1.55731 0 1.01823 0.222582 0.620763 0.61878C0.223295 1.01498 0 1.55234 0 2.11265V9.795C0 10.3553 0.223295 10.8927 0.620763 11.2889C1.01823 11.6851 1.55731 11.9076 2.11942 11.9076ZM15.4139 2.41994V9.48771L11.9458 7.183V4.72465L15.4139 2.41994ZM1.15605 2.11265C1.15605 1.85796 1.25754 1.61371 1.43821 1.43362C1.61888 1.25353 1.86392 1.15235 2.11942 1.15235H9.82639C10.0819 1.15235 10.3269 1.25353 10.5076 1.43362C10.6883 1.61371 10.7898 1.85796 10.7898 2.11265V9.795C10.7898 10.0497 10.6883 10.2939 10.5076 10.474C10.3269 10.6541 10.0819 10.7553 9.82639 10.7553H2.11942C1.86392 10.7553 1.61888 10.6541 1.43821 10.474C1.25754 10.2939 1.15605 10.0497 1.15605 9.795V2.11265Z"
        fill="black"
      />
    </svg>
  );
};
