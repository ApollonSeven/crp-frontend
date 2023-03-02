import * as React from "react";
import { SVGProps } from "react";
const Pendant = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pendant"><g id="pendant_2"><path d="M20.8406 21.3281H20.7766C20.478 21.3281 20.2358 21.5904 20.2358 21.9141C20.2358 22.2377 20.4779 22.5 20.7766 22.5H20.8406C21.1392 22.5 21.3814 22.2377 21.3814 21.9141C21.3814 21.5904 21.1392 21.3281 20.8406 21.3281Z" fill={props.color} /><path d="M28.3053 16.6407H21.5967V15.0293L23.7979 15.6683C23.8448 15.6819 23.8919 15.6884 23.9382 15.6884C24.1769 15.6884 24.3955 15.5157 24.4603 15.254C24.5376 14.9414 24.3664 14.6201 24.0779 14.5364L15.7199 12.1099C15.4313 12.0261 15.1349 12.2117 15.0576 12.5242C14.9803 12.8368 15.1515 13.1581 15.44 13.2419L17.9211 13.9621V16.6406H13.9166V16.5234C13.9166 16.1998 13.6744 15.9375 13.3758 15.9375H11.7534V11.4844C11.7534 10.192 10.783 9.1406 9.59021 9.1406H3.317C2.12423 9.1406 1.15381 10.192 1.15381 11.4844V27.6562C1.15381 28.9486 2.12423 30 3.317 30H9.59021C10.783 30 11.7534 28.9486 11.7534 27.6562V23.2031H13.3758C13.6744 23.2031 13.9166 22.9408 13.9166 22.6172V22.5H18.0446C18.3432 22.5 18.5854 22.2377 18.5854 21.914C18.5854 21.5904 18.3433 21.3281 18.0446 21.3281H13.9166V17.8124H27.7645V21.3281H23.9379C23.6393 21.3281 23.3971 21.5904 23.3971 21.914C23.3971 22.2376 23.6392 22.5 23.9379 22.5H28.3053C28.6039 22.5 28.8461 22.2377 28.8461 21.914V17.2265C28.8461 16.903 28.604 16.6407 28.3053 16.6407ZM3.317 28.8282C2.72058 28.8282 2.23543 28.3025 2.23543 27.6564V27.2058L3.73287 28.8282H3.317ZM10.6718 27.6564C10.6718 28.3026 10.1866 28.8282 9.59021 28.8282H9.17434L10.6718 27.2058V27.6564ZM10.6718 13.9124C10.5896 13.9395 10.5121 13.9881 10.4472 14.0585L7.82429 16.9003C7.61314 17.1291 7.61314 17.5001 7.82429 17.729C7.92992 17.8434 8.06827 17.9006 8.20668 17.9006C8.34509 17.9006 8.48344 17.8434 8.58907 17.729L10.6718 15.4724V17.8235C10.5896 17.8506 10.5121 17.8992 10.4472 17.9696L7.82429 20.8114C7.61314 21.0402 7.61314 21.4113 7.82429 21.6401C7.92992 21.7546 8.06827 21.8117 8.20668 21.8117C8.34509 21.8117 8.48344 21.7546 8.58907 21.6401L10.6718 19.3835V21.7347C10.5896 21.7618 10.5121 21.8104 10.4472 21.8808L7.82429 24.7227C7.61314 24.9514 7.61314 25.3225 7.82429 25.5513C7.92992 25.6658 8.06827 25.723 8.20668 25.723C8.34509 25.723 8.48344 25.6658 8.58907 25.5513L10.6718 23.2947V25.6459C10.5896 25.673 10.5121 25.7216 10.4472 25.792L7.82429 28.6338C7.77128 28.6913 7.73164 28.7577 7.70524 28.8284H5.20196C5.17557 28.7576 5.13592 28.6913 5.08292 28.6338L2.46005 25.792C2.39504 25.7216 2.31753 25.6731 2.23538 25.6459V23.2947L4.31808 25.5513C4.42371 25.6657 4.56207 25.7229 4.70047 25.7229C4.83888 25.7229 4.97723 25.6657 5.08286 25.5513C5.29402 25.3224 5.29402 24.9514 5.08286 24.7226L2.46 21.8808C2.39498 21.8103 2.31748 21.7618 2.23532 21.7347V19.3834L4.31803 21.64C4.42366 21.7544 4.56201 21.8116 4.70042 21.8116C4.83883 21.8116 4.97718 21.7544 5.08281 21.64C5.29396 21.4111 5.29396 21.0401 5.08281 20.8113L2.45994 17.9695C2.39493 17.899 2.31742 17.8505 2.23527 17.8234V15.4722L4.31797 17.7288C4.4236 17.8432 4.56196 17.9004 4.70036 17.9004C4.83877 17.9004 4.97712 17.8432 5.08276 17.7288C5.29391 17.4999 5.29391 17.1289 5.08276 16.9001L2.4601 14.0583C2.39509 13.9879 2.31759 13.9394 2.23543 13.9122V11.561L4.31814 13.8176C4.42377 13.932 4.56212 13.9892 4.70053 13.9892C4.83893 13.9892 4.97729 13.932 5.08292 13.8176C5.29407 13.5888 5.29407 13.2177 5.08292 12.9889L2.76548 10.4782C2.92719 10.3738 3.11536 10.3126 3.317 10.3126H9.59021C9.79179 10.3126 9.98001 10.3738 10.1417 10.4782L7.82434 12.989C7.61319 13.2178 7.61319 13.5889 7.82434 13.8177C7.92997 13.9321 8.06833 13.9893 8.20673 13.9893C8.34514 13.9893 8.48349 13.9321 8.58912 13.8177L10.6718 11.5612L10.6718 13.9124ZM12.835 22.0314H11.7534V17.1095H12.835V22.0314ZM20.5152 14.7657V16.6407H19.0028V14.2762L20.5175 14.7159C20.5162 14.7324 20.5152 14.7489 20.5152 14.7657Z" fill={props.color} /><path d="M24.078 9.64916L15.72 7.22272C15.4314 7.13892 15.135 7.32451 15.0578 7.63703C14.9804 7.94961 15.1516 8.27092 15.4401 8.35466L23.7981 10.7811C23.845 10.7947 23.892 10.8012 23.9384 10.8012C24.1771 10.8012 24.3957 10.6285 24.4604 10.3668C24.5376 10.0542 24.3665 9.73296 24.078 9.64916Z" fill={props.color} /><path d="M24.078 12.0927L15.72 9.66628C15.4314 9.58248 15.135 9.76808 15.0578 10.0806C14.9804 10.3932 15.1516 10.7145 15.4401 10.7982L23.7981 13.2247C23.845 13.2383 23.892 13.2448 23.9384 13.2448C24.1771 13.2448 24.3957 13.0721 24.4604 12.8104C24.5376 12.4978 24.3665 12.1765 24.078 12.0927Z" fill={props.color} /><path d="M24.0778 7.20569L21.5967 6.48542V3.51561H23.0037C23.8983 3.51561 24.6261 2.72707 24.6261 1.75781C24.6261 0.78854 23.8983 0 23.0037 0H16.5142C15.6196 0 14.8918 0.78854 14.8918 1.75781C14.8918 2.72707 15.6195 3.51561 16.5141 3.51561H17.9211V5.41828L15.7199 4.77924C15.4312 4.69544 15.1349 4.88103 15.0576 5.19355C14.9803 5.50613 15.1515 5.82744 15.44 5.91118L23.7979 8.33763C23.8448 8.35123 23.8919 8.35773 23.9382 8.35773C24.177 8.35773 24.3955 8.18503 24.4603 7.92332C24.5376 7.61074 24.3664 7.28943 24.0778 7.20569ZM16.5141 2.3437C16.2159 2.3437 15.9733 2.08088 15.9733 1.75775C15.9733 1.43468 16.2159 1.17179 16.5141 1.17179H23.0036C23.3018 1.17179 23.5444 1.43462 23.5444 1.75775C23.5444 2.08082 23.3019 2.3437 23.0036 2.3437H16.5141ZM20.5152 6.17137L19.0027 5.73227V3.51561H20.5152V6.17137Z" fill={props.color} /></g></g></svg>;
export default Pendant;