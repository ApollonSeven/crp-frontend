import * as React from "react";
import { SVGProps } from "react";
const Eyebrow = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="eyebrow"><path id="eyebrow_2" d="M17.3522 10.7917L2.45257 13.4983C0.867554 13.7861 -0.203128 15.2761 0.0324768 16.866C0.300133 18.6721 2.11806 19.8157 3.86714 19.2783L13.6158 16.5201C18.885 15.0293 24.5038 15.2921 29.5967 17.3023L29.6104 17.3077C29.8823 17.4152 30.1186 17.09 29.935 16.8612C28.2189 14.7232 23.3238 9.49627 17.3522 10.7917Z" fill={props.color} /></g></svg>;
export default Eyebrow;