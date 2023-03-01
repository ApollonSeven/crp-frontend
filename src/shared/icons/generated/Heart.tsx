import * as React from "react";
import { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="heart"><path id="heart_2" d="M21.7044 0.555664C26.2857 0.555664 30 4.69532 30 9.80011C30 18.2378 14.9996 29.4446 14.9996 29.4446C14.9996 29.4446 0 18.6418 0 9.80003C0 3.44438 3.71437 0.555664 8.29474 0.555664C11.0538 0.555664 13.491 2.06368 14.9996 4.37256C16.5084 2.06368 18.946 0.555664 21.7044 0.555664Z" fill={props.color} /></g></svg>;
export default Heart;