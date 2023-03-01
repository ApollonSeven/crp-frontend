import * as React from "react";
import { SVGProps } from "react";
const Fail = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="fail"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM7.14286 15.6554L12.5824 21.4286L21.4286 12.0029L19.5604 10L12.5824 17.4227L9.06593 13.6524L7.14286 15.6554Z" fill={props.color} /></g></svg>;
export default Fail;