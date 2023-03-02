import * as React from "react";
import { SVGProps } from "react";
const Output = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="output"><path id="output_2" d="M28.5 7.15685H19C18.1716 7.15685 17.5 7.85918 17.5 8.72548V10.2941C17.501 10.9138 17.8507 11.4747 18.3925 11.7257L18.235 12.3856H10.6525C12.3971 11.1114 13.281 8.89815 12.921 6.70489C12.561 4.51169 11.022 2.7332 8.971 2.14037C8.91492 1.83933 8.7726 1.56323 8.56301 1.34876C8.28404 1.04864 7.90025 0.88026 7.5 0.882343C6.78615 0.882466 6.17133 1.40869 6.03 2.14037C3.96709 2.73724 2.42332 4.53246 2.07398 6.7408C1.72465 8.94913 2.63332 11.1686 4.4025 12.4285C1.89457 12.7491 0.00732422 14.9722 0 17.6144V27.549C0 28.4153 0.671602 29.1176 1.5 29.1176H9C9.8284 29.1176 10.5 28.4153 10.5 27.549V25.7053L10.55 25.7492C11.0929 26.2363 11.7847 26.5038 12.5 26.5032C13.173 26.5065 13.827 26.2697 14.354 25.8318L21.354 20.0802C21.9815 19.5684 22.3869 18.8152 22.4796 17.9887C22.4861 17.9338 22.4871 17.8795 22.4906 17.825C23.4146 17.3353 23.9978 16.3448 24.0001 15.2614C24.0015 14.7015 23.845 14.1537 23.5501 13.6865C23.8607 13.4719 24.0834 13.1437 24.1746 12.7662L24.3905 11.8627H28.5C29.3284 11.8627 30 11.1603 30 10.294V8.72541C30 7.85918 29.3285 7.15685 28.5 7.15685ZM20.6745 14.7276C20.0639 14.4556 19.3843 14.4029 18.742 14.578L19.3905 11.8627H21.3595L20.6745 14.7276ZM7.24998 6.63399H7.74996C8.44031 6.63399 8.99994 7.21923 8.99994 7.94116V8.98693C8.99994 9.70887 8.44031 10.2941 7.74996 10.2941H7.24998C6.55963 10.2941 6 9.70887 6 8.98693V7.94116C6 7.21923 6.55963 6.63399 7.24998 6.63399ZM7.5 1.92811C7.63471 1.92769 7.76361 1.98559 7.85602 2.0881C7.9493 2.18345 8.00133 2.31457 8.00004 2.45097V5.61488C7.91725 5.60097 7.83381 5.59202 7.75002 5.58822H7.25004C7.16631 5.59208 7.08281 5.60097 7.00002 5.61488V2.45097C7.00002 2.16218 7.22385 1.92811 7.5 1.92811ZM3 7.67977C3.00615 5.68841 4.20621 3.91518 6 3.2468V5.98669C5.37568 6.4229 5.00063 7.15599 4.99998 7.94122V8.98699C5.00139 10.2859 6.00791 11.3385 7.24998 11.3399H7.74996C8.99203 11.3385 9.99856 10.2859 9.99996 8.98699V7.94116C9.99938 7.15599 9.62426 6.42284 8.99994 5.98663V3.2468C11.1579 4.04466 12.3994 6.40948 11.8847 8.74184C11.3699 11.0742 9.26303 12.6308 6.98889 12.359C4.7148 12.0871 2.99813 10.0734 3 7.67977ZM21.486 17.8638C21.4247 18.4149 21.1546 18.9173 20.736 19.2582L13.736 25.0099C12.9815 25.6089 11.932 25.5862 11.202 24.955L5.14699 19.5276C5.01246 19.3976 4.8208 19.3549 4.64736 19.4163C4.47393 19.4777 4.34643 19.6334 4.31508 19.8221C4.28373 20.0108 4.35352 20.2023 4.49701 20.3213L9.50004 24.8092V27.549C9.50004 27.8378 9.27615 28.0718 9.00006 28.0718H1.50006C1.22391 28.0718 1.00008 27.8377 1.00008 27.549V17.6144C1.00365 15.4209 2.62371 13.6014 4.71557 13.4413C4.80756 13.4361 4.90359 13.4314 5.00004 13.4314H17.9855L17.558 15.2206L15.2805 17.0915H10.113L8.11307 15.2985C7.97854 15.1685 7.78688 15.1259 7.61344 15.1873C7.44 15.2487 7.3125 15.4044 7.28115 15.5931C7.2498 15.7817 7.31959 15.9733 7.46309 16.0923L12.2461 20.3798C12.4273 20.5423 12.693 20.5482 12.8806 20.3939L18.2661 15.9698C18.9022 15.4471 19.7768 15.3766 20.482 15.7912C21.1871 16.2057 21.5841 17.0238 21.4876 17.8637H21.486V17.8638ZM14.0075 18.1372L12.584 19.3064L11.2795 18.1372H14.0075ZM22.3575 16.6732C22.2071 16.163 21.9312 15.703 21.5575 15.3393L21.8905 13.9542H22.4715C22.4775 13.96 22.4835 13.9647 22.489 13.9704C22.8185 14.3114 23.0027 14.7768 23 15.2614C22.9988 15.8083 22.7641 16.326 22.36 16.6732H22.3575ZM23.202 12.5137C23.1464 12.7467 22.9462 12.9102 22.7165 12.91H22.1405L22.3905 11.8643H23.3596L23.202 12.5137ZM29 10.2941C29 10.5829 28.7762 10.817 28.5 10.817H19C18.7239 10.817 18.5 10.5828 18.5 10.2941V8.72548C18.5 8.43669 18.7239 8.20262 19 8.20262H19.5V8.72548C19.5 9.01426 19.7238 9.24833 20 9.24833C20.2761 9.24833 20.5 9.0142 20.5 8.72548V8.20262H21.5V8.72548C21.5 9.01426 21.7239 9.24833 22 9.24833C22.2761 9.24833 22.4999 9.0142 22.4999 8.72548V8.20262H23.5V8.72548C23.5 9.01426 23.7238 9.24833 23.9999 9.24833C24.2761 9.24833 24.4999 9.0142 24.4999 8.72548V8.20262H28.5C28.7762 8.20262 29 8.43675 29 8.72548V10.2941Z" fill={props.color} /></g></svg>;
export default Output;