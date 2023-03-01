import * as React from "react";
import { SVGProps } from "react";
const Plot = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="plot"><rect id="Rectangle 345" x={0.707107} y={13} width={17.3848} height={17.3848} transform="rotate(-45 0.707107 13)" stroke={props.color} /><ellipse id="Ellipse 3" cx={13.3015} cy={13} rx={3.3254} ry={3.3254} fill={props.color} /></g></svg>;
export default Plot;